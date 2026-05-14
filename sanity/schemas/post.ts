import {defineType} from 'sanity'
import {categories} from '../categories'

const post = defineType({
  name: 'post',
  title: 'Yazılar',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Başlık',
      type: 'string',
      validation: (Rule) => Rule.required().min(40).max(90),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 90,
      },
      validation: (Rule) => Rule.required(),
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
    {
      title: 'Özet',
      name: 'summary',
      type: 'text',
      validation: (Rule) => Rule.min(150).max(380),
    },
    {
      name: 'body',
      title: 'Yazı',
      type: 'markdown',
      validation: (Rule) => Rule.required().min(100).max(25000),
    },
    {
      name: 'mainImage',
      title: 'Ana Görsel',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
})

export default post
