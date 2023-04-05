export default {
  type: 'document',
  name: 'personal',
  title: 'Personal',
  fields: [
    //   type: 'reference',
    //   name: 'author',
    //   title: 'Author',
    //   to: {type: 'author'},
    {
      title: 'About Me',
      name: 'about',
      type: 'reference',
      to: {type: 'aboutMe'},
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'reference',
      to: {type: 'bio'},
    },
    {
      title: 'Education',
      name: 'education',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'education'}],
        },
      ],
    },

    {
      title: 'Social',
      name: 'social',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'social'}],
        },
      ],
    },
  ],
}
