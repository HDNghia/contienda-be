import { CollectionConfig } from 'payload';

const Product: CollectionConfig = {
  slug: 'products', // This is the API endpoint for the collection
  admin: {
    useAsTitle: 'title', // Field to display as the title in the admin panel
  },
  access:{
    read: () => true
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true, // Ensure the field is mandatory
    },
    {
      name: 'image',
      type: 'upload', // For uploading images
      relationTo: 'media', // Relation to the media collection (you need to define a media collection)
    },
    {
      name: 'description',
      type: 'textarea', // Multiline text for longer descriptions
    },
    {
      name: 'price',
      type: 'number', // Numeric field for price
      required: true,
    },
  ],
};

export default Product;
