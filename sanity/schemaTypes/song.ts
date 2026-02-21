import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'song',
  title: 'Song',
  type: 'object', // <--- This makes it embeddable
  fields: [
    defineField({
      name: 'title',
      title: 'Song Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'string',
      options: {
        list: [
          { title: 'Banger', value: 'Banger' },
          { title: 'Maybe Banger', value: 'Maybe Banger' },
          { title: 'Good But Forgettable', value: 'Good But Forgettable' },
          { title: 'Eh', value: 'Eh' },
          { title: 'Bad', value: 'Bad' },
          { title: 'Terrible', value: 'Terrible' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      rating: 'rating',
    },
    prepare({ title, rating }) {
      // Color code emojis for the studio preview
      const emojis: Record<string, string> = {
        'Banger': '🔥',
        'Maybe Banger': '🤔',
        'Good But Forgettable': '🤷',
        'Eh': '😐',
        'Bad': '👎',
        'Terrible': '🗑️'
      }
      return {
        title: title,
        subtitle: rating,
        media: () => emojis[rating] || '🎵'
      }
    }
  }
})
