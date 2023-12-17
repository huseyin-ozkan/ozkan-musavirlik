import {defineType} from 'sanity'

const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required().min(30).max(60),
    },

    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      validation: (Rule) => Rule.required().min(50).max(150),
    },

    {
      name: 'services',
      title: 'Services',
      type: 'object',

      fields: [
        {
          name: 'accountancy',
          title: 'Muhasebe',
          type: 'string',
          validation: (Rule) => Rule.required().min(30).max(60),
        },

        {
          name: 'realEstateAppraisal',
          title: 'Gayrimenkul Değerleme',
          type: 'string',
          validation: (Rule) => Rule.required().min(30).max(60),
        },

        {
          name: 'incentiveConsultancy',
          title: 'Teşvik Danışmanlığı',
          type: 'string',
          validation: (Rule) => Rule.required().min(30).max(60),
        },
      ],
    },
  ],
})

export default hero
