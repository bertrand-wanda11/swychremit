import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'publishing', title: 'Publishing & Target' },
    { name: 'seo', title: 'SEO & Social' },
  ],
  fields: [

    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Permalink / Slug',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'callout',
      title: 'Top Highlight / Callout Box',
      description: 'E.g., "Ready to move forward? Speak to our sales team..."',
      type: 'object',
      group: 'content',
      fields: [
        { name: 'text', type: 'string', title: 'Text' },
        { name: 'linkText', type: 'string', title: 'Link Text' },
        { name: 'linkUrl', type: 'url', title: 'Link URL' }
      ]
    }),
    defineField({
      name: 'mainImage',
      title: 'Featured Image',
      type: 'image',
      group: 'content',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    }),
    defineField({
      name: 'body',
      title: 'Article Body',
      type: 'blockContent',
      group: 'content',
    }),


    defineField({
      name: 'site',
      title: 'Target Product / Website',
      type: 'string',
      group: 'publishing',
      options: {
        list: [
          { title: 'Swychremit', value: 'swychremit' },
          { title: 'SwychPe', value: 'swychpe' },
          { title: 'SwychRamp', value: 'swychramp' },
          { title: 'Swychr', value: 'swychr' },
          { title: 'SwychConnect', value: 'swychconnect' },
        ],
        layout: 'radio',
      },
      initialValue: 'swychremit',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'publishing',
      options: {
        list: [
          { title: 'Business', value: 'Business' },
          { title: 'Payments', value: 'Payments' },
          { title: 'Virtual Cards', value: 'Virtual Cards' },
          { title: 'Company News', value: 'Company News' },
          { title: 'Guides', value: 'Guides' },
          { title: 'Compliance', value: 'Compliance' },
        ],
      },
      initialValue: 'Business',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      group: 'publishing',
      to: { type: 'author' },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      group: 'publishing',
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
      validation: (Rule) =>
        Rule.max(60).warning('Titles longer than 60 characters get cut off on Google search results.'),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      group: 'seo',
      validation: (Rule) => [
        Rule.min(120).warning('Descriptions under 120 characters are usually too short for rich search previews.'),
        Rule.max(160).warning('Descriptions over 160 characters will be truncated on Google.'),
      ],
    }),
    defineField({
      name: 'focusKeywords',
      title: 'Focus Keywords',
      type: 'array',
      group: 'seo',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      site: 'site'
    },
    prepare(selection) {
      const { author, site } = selection
      return {
        ...selection,
        subtitle: `[${(site || 'all').toUpperCase()}] ${author ? `by ${author}` : ''}`,
      }
    },
  },
})