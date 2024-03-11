import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'pictureOfMe',
  title: 'pictureOfMe',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      description: 'Alternative text for the image (for accessibility and SEO)',
    }),
    // Additional SEO fields
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Title for SEO purposes (overrides default behavior)',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'Description for SEO purposes (overrides default behavior)',
    }),
    // ... other fields as needed
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
});
