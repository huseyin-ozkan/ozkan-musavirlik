import {defineType} from 'sanity'

const announcement = defineType({
  name: 'announcement',
  title: 'Duyurular',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Başlık',
      type: 'string',
      validation: (Rule) => Rule.required().min(15).max(90),
    },
    {
      name: 'body',
      title: 'Yazı',
      type: 'text',
      validation: (Rule) => Rule.min(0).max(500),
    },
    // {
    //   name: 'categories',
    //   title: 'Kategoriler',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'category'}}],
    // },
  ],
})

export default announcement
