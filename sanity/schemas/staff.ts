// TODO name
// TODO title
// TODO image
// TODO description

import {defineType} from 'sanity'

const staff = defineType({
  name: 'staff',
  title: 'Staff',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Ad Soyad',
      type: 'string',
      validation: (Rule) => Rule.required().min(4).max(25),
    },
    {
      name: 'title',
      title: 'Ünvan',
      type: 'string',
      validation: (Rule) => Rule.required().min(4).max(35),
    },
    {
      name: 'image',
      title: 'Fotoğraf',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required().min(100).max(300),
    },
  ],
})

export default staff
