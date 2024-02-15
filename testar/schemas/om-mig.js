// schemas/ommig.js
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'Ommig',
    title: 'Ommig',
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
  