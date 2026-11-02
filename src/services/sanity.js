import { createClient } from '@sanity/client';

export const sanityClient = createClient({
    projectId: '18tckou4',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-01-01',
});