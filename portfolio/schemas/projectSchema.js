export default {
  type: 'document',
  name: 'project',
  title: 'Project',
  fields: [
    {
      type: 'image',
      name: 'cover_photo',
      title: 'Cover Photo',
    },

    {
      type: 'string',
      name: 'project_title',
      title: 'Project Title',
    },

    {
      type: 'string',
      name: 'project_subtitle',
      title: 'Project Subtitle',
    },

    {
      type: 'string',
      name: 'project_description',
      title: 'Project Description',
    },

    {
      type: 'string',
      name: 'website',
      title: 'Website',
    },

    {
      type: 'string',
      name: 'android_link',
      title: 'Android',
    },

    {
      type: 'string',
      name: 'ios_link',
      title: 'iOS',
    },

    {
      type: 'string',
      name: 'platform',
      title: 'Platform',
    },

    {
      type: 'string',
      name: 'stack',
      title: 'Stack',
    },

    {
      type: 'string',
      name: 'features',
      title: 'Feature',
    },

    {
      type: 'array',
      name: 'project_images',
      title: 'Project Images',
      of: [
        {
          type: 'image',
        },
      ],
    },
  ],
}
