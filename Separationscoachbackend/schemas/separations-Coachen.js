// text.js
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'separation',
  title: 'Separationcoachen start',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ]
})
