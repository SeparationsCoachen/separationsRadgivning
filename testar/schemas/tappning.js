// schemas/text1.js
import { defineField, defineType } from 'sanity'
export default {
    name: 'Tappning',
    title: 'Tappning',
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
    }
