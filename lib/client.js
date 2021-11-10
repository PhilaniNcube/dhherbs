import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID, // ID of a Compose-compatible space to be used \
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN, // delivery API key for the space \
});

export async function fetchEntries() {
  const entries = await client.getEntries({
    content_type: 'herbs',
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
}

export async function fetchEntry(slug) {
  const entry = await client.getEntry(slug);
  if (entry) return entry;
  console.log(`Error getting Entries for ${contentType.name}.`);
}

export default fetchEntries;
