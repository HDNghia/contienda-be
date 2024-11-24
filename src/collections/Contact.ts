import { CollectionConfig } from 'payload';

const Contact: CollectionConfig = {
  slug: 'contacts', // This is the API endpoint for the collection
  admin: {
    useAsTitle: 'name', // Field to display as the title in the admin panel
  },
  access:{
    read: () => true,
    create: ()=>true
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true, // Ensure the field is mandatory
    },
    {
        name: 'email',
        type: 'text',
      },
      {
        name: 'phone',
        type: 'text',
      },
    {
      name: 'message',
      type: 'textarea', // Multiline text for longer descriptions
    },
  ],
};

export default Contact;
