import {defineType} from 'sanity'

const branch = defineType({
  name: 'branch',
  title: 'Branch',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(4).max(20),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(100),
    },
    {
      name: 'mapLink',
      title: 'Map Link',
      type: 'string',
      validation: (Rule) => Rule.uri(),
    },
    {
      name: 'phones',
      title: 'Phones',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1).max(2),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    },
  ],
})

export default branch
