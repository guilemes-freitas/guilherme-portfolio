export default ({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of my project",
      type: "string",
    },
    {
      name: "experience",
      title: "Experience",
      type: "string",
      description: "Experience in years",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options:{
        hotspot: true,
      }
    },
  ],
})
