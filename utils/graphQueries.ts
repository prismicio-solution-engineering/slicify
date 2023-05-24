export const authorGraphQuery = `
{
  blog_article {
    author {
      ...on author {
        ...authorFields
      }
    }
  }
}
`;

export const blogArticleGraphQuery = `
{
  blog_article {
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