import { Content } from "@prismicio/client"
import * as prismicT from "@prismicio/types"
import * as prismicH from "@prismicio/helpers"
import { AuthorDocument, BlogArticleDocument, BlogCategoryDocument } from "@/prismicio-types";

export const isOfTypeBlogArticleDocument= 
  (contentRelationshipField: prismicT.ContentRelationshipField | undefined): contentRelationshipField is prismicT.ContentRelationshipField & {
  data?: BlogArticleDocument["data"]
} | undefined =>  {
  return (
    prismicH.isFilled.contentRelationship(contentRelationshipField) &&
    typeof contentRelationshipField.data === "object" &&
    contentRelationshipField.data !== null &&
    "featured_image" in contentRelationshipField.data
  );
};

export const isOfTypeBlogCategoryDocument= 
  (contentRelationshipField: prismicT.ContentRelationshipField | undefined): contentRelationshipField is prismicT.ContentRelationshipField & {
  data?: BlogCategoryDocument["data"]
} | undefined =>  {
  return (
    prismicH.isFilled.contentRelationship(contentRelationshipField) &&
    typeof contentRelationshipField.data === "object" &&
    contentRelationshipField.data !== null &&
    "category_name" in contentRelationshipField.data
  );
};

export const isOfTypeAuthorDocument= 
  (contentRelationshipField: prismicT.ContentRelationshipField | undefined): contentRelationshipField is prismicT.ContentRelationshipField & {
  data?: AuthorDocument["data"]
} | undefined =>  {
  return (
    prismicH.isFilled.contentRelationship(contentRelationshipField) &&
    typeof contentRelationshipField.data === "object" &&
    contentRelationshipField.data !== null &&
    "author_image" in contentRelationshipField.data &&
    "author_name" in contentRelationshipField.data &&
    "author_role" in contentRelationshipField.data
  );
};

export const blogArticleGraphQuery = `
{
  blog_article {
    category {
      ...on blog_category {
        ...blog_categoryFields
      }
    }
    author {
      ...on author {
        ...authorFields
      }
    }
    slices {
      ... on article_list {
        variation {
          ... on verticalList {
            primary {
              ...primaryFields
            }
            items {
              article {
                ...on blog_article {
                  title
                  excerpt
                  featured_image
                  author {
                    ...on author {
                      ...authorFields
                    }
                  }
                  category {
                    ...on blog_category {
                      ...blog_categoryFields
                    }
                  }
                }
              }
            }
          }
          ... on horizontalList {
            primary {
              ...primaryFields
            }
            items {
              article {
                ...on blog_article {
                  title
                  excerpt
                  featured_image
                  author {
                    ...on author {
                      ...authorFields
                    }
                  }
                  category {
                    ...on blog_category {
                      ...blog_categoryFields
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export const blogIndexGraphQuery = `
{
  blog_article {
    title
    excerpt
    featured_image
    author {
      ...on author {
        ...authorFields
      }
    }
    category {
      ...on blog_category {
        ...blog_categoryFields
      }
    }
  }
}
`;