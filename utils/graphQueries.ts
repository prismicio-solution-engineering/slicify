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