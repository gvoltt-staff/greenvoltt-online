import { getPayload } from 'payload';
import payloadConfig from '@payloadcms/config';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

export async function getPayloadInstance() {
  return getPayload({
    config: {
      ...payloadConfig,
      database: postgresAdapter({
        client: { url: process.env.DATABASE_URI || '' },
      }),
    },
  });
}