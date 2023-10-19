import {defineType} from 'sanity'

const post = defineType({
  name: 'post',
  title: 'Post',
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
      title: 'Özet',
      name: 'summary',
      type: 'text',
      validation: (Rule) => Rule.min(200).max(380),
    },
    {
      name: 'body',
      title: 'Yazı',
      type: 'markdown',
      validation: (Rule) => Rule.required().min(100).max(20000),
    },
    {
      name: 'mainImage',
      title: 'Ana Görsel',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    // {
    //   name: 'categories',
    //   title: 'Kategoriler',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'category'}}],
    // },
  ],
})

export default post
