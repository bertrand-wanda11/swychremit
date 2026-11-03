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
      name: 'categories',
      title: 'Categories',
      type: 'array',
      group: 'publishing',
      of: [{ type: 'reference', to: { type: 'category' } }],
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
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      group: 'seo',
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