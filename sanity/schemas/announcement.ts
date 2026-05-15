import {defineType} from 'sanity'
import {categories} from '../categories'

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
    {
      title: 'Kategori',
      name: 'category',
      type: 'string',
      options: {
        list: categories,
        layout: 'dropdown',
      },
    },
  ],
})

export default announcement
