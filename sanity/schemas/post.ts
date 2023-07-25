export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Başlık',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Yazı',
      type: 'markdown',
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
