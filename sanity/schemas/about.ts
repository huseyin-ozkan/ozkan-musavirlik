import {defineType} from 'sanity'

const about = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'paragraph',
      title: 'Paragraf',
      type: 'text',
      validation: (Rule) => Rule.required().min(200).max(400),
    },
    {
      name: 'mission',
      title: 'Missyonumuz Paragrafı',
      type: 'text',
      validation: (Rule) => Rule.required().min(200).max(400),
    },
    {
      name: 'vision',
      title: 'Vizyonumuz Paragrafı',
      type: 'text',
      validation: (Rule) => Rule.required().min(200).max(400),
    },
  ],
})

export default about
