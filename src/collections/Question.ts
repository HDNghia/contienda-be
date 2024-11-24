import type { CollectionConfig } from 'payload'

export const Question: CollectionConfig = {
    slug: 'questions',
    admin: {
        useAsTitle: 'question',
    },
    access:{
        read: () => true
      },
    fields: [
        {
            name: 'question',
            type: 'text',
            required: true, // Ensure the field is mandatory
        },
        {
            name: 'answer',
            type: 'text',
            required: true, // Ensure the field is mandatory
        }
    ],
}
