export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Başlık',
      type: 'string',
      validation: (Rule: any) => Rule.required().min(10).max(90),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 90,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Yazı',
      type: 'markdown',
      validation: (Rule: any) => Rule.required().min(100).max(20000),
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
}
