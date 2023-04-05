export default {
  type: 'document',
  name: 'bio',
  title: 'Bio',
  fields: [
    {
      title: 'Occupation',
      name: 'occupation',
      type: 'string',
    },

    {
      title: 'DOB year',
      name: 'dob_year',
      type: 'string',
    },

    {
      title: 'Hobbies',
      name: 'hobbies',
      type: 'array',
      of: [{type: 'string'}],
    },

    // {
    //   type: 'slug',
    //   name: 'slug',
    //   title: 'Slug',
    // },
    // {
    //   type: 'image',
    //   name: 'image',
    //   title: 'Book Image',
    // },
    // {
    //   type: 'reference',
    //   name: 'author',
    //   title: 'Author',
    //   to: {type: 'author'},
    // },
  ],
}
