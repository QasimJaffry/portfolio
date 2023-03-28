export default {
  type: 'document', //value must be a schema type e.g document
  name: 'aboutMe', //value can be any word
  title: 'About Me', //value can be any word
  fields: [
    {
      type: 'image',
      name: 'logo',
      title: 'Logo',
    },
    {
      type: 'string',
      name: 'first_name',
      title: 'First Name',
    },
    {
      type: 'string',
      name: 'name',
      title: 'Full Name',
    },
    {
      type: 'image',
      name: 'profile_photo',
      title: 'Profile Photo',
      options: {
        hotspot: true,
      },
    },
    {
      type: 'string',
      name: 'short_description',
      title: 'Short Description',
    },
    {
      type: 'string',
      name: 'profession',
      title: 'Profession',
    },
    {
      type: 'string',
      name: 'full_description',
      title: 'Full Description',
    },
  ],
}
