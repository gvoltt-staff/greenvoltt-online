import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: 'users',
  },
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-in-production',
  collections: [
    {
      slug: 'pages',
      label: 'Pages',
      admin: { useAsTitle: 'title' },
      access: { read: () => true, create: () => true, update: () => true, delete: () => true },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'slug', type: 'text', required: true, unique: true },
        { name: 'content', type: 'richText' },
        { 
          name: 'sections', 
          type: 'array',
          fields: [
            { name: 'heading', type: 'text' },
            { name: 'body', type: 'richText' },
            { name: 'image', type: 'upload', relationTo: 'media' }
          ]
        },
      ],
    },
    {
      slug: 'media',
      label: 'Media',
      admin: { useAsTitle: 'filename' },
      access: { read: () => true, create: () => true, update: () => true, delete: () => true },
      fields: [
        { name: 'filename', type: 'text', required: true },
        { name: 'alt', type: 'text' },
        { name: 'url', type: 'text' }
      ],
      upload: { staticURL: '/media' },
    },
    {
      slug: 'testimonials',
      label: 'Testimonials',
      admin: { useAsTitle: 'name' },
      access: { read: () => true, create: () => true, update: () => true, delete: () => true },
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'quote', type: 'textarea', required: true },
        { name: 'image', type: 'upload', relationTo: 'media' }
      ],
    },
    {
      slug: 'services',
      label: 'Services',
      admin: { useAsTitle: 'title' },
      access: { read: () => true, create: () => true, update: () => true, delete: () => true },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
        { name: 'icon', type: 'upload', relationTo: 'media' }
      ],
    },
    {
      slug: 'users',
      label: 'Users',
      admin: { useAsTitle: 'email' },
      auth: true,
      access: { read: () => true, create: () => true, update: () => true, delete: () => true },
      fields: [
        { name: 'email', type: 'email', required: true, unique: true }
      ],
    },
  ],
  database: postgresAdapter({
    client: { url: process.env.DATABASE_URI || '' },
  }),
  typescript: { rootDir: dirname },
});