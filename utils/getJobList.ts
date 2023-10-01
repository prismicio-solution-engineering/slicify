import { Client, Content } from "@prismicio/client";
/**
 * Returns an array of jobs from Gist
 */
export async function getJobList(
  doc: Content.AllDocumentTypes,
  client: Client<Content.AllDocumentTypes>,
  locales?: string[]
) {
  
  const gistId = '5bb154469b98fa0d39bc8e03fd6f500a',

  // Fetch 'https://api.github.com/gists/<gist-id>'
  fetch(`https://api.github.com/gists/${gistId}`)
  .then(function (response) {
    if (response.ok) return response.json();
    return Promise.reject(response);
  })
  
  return [{url: doc.url || `/${doc.lang}`, lang_name: doc.lang}];
}
