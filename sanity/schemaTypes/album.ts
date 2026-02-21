import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'album',
  title: 'Album Review',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Album Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'artist',
      title: 'Artist',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    // --- NEW RATING SYSTEM ---
    defineField({
      name: 'rating',
      title: 'Numerical Rating',
      description: 'Scale from -5 (worst) to 5 (best)',
      type: 'number',
      validation: (rule) => rule.required().min(-5).max(5).precision(2),
    }),
    defineField({
      name: 'verdict', // The written scale
      title: 'Written Verdict',
      type: 'string',
      options: {
        list: [
          { title: 'Terrible', value: 'Terrible' },
          { title: 'Bad', value: 'Bad' },
          { title: 'Eh', value: 'Eh' },
          { title: 'Good But Forgettable', value: 'Good But Forgettable' },
          { title: 'Maybe Banger', value: 'Maybe Banger' },
          { title: 'Banger', value: 'Banger' },
        ],
      },
      validation: (rule) => rule.required(),
    }),

    // --- SONG PICKS ---
    defineField({
      name: 'favoriteSong',
      title: 'Favorite Song',
      type: 'string',
    }),
    defineField({
      name: 'worstSong',
      title: 'Worst Song',
      type: 'string',
    }),

    // --- METADATA ---
    defineField({
      name: 'genres',
      title: 'Genres',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'genre' } }],
    }),
    defineField({
      name: 'duration',
      title: 'Duration (Minutes)',
      type: 'number',
    }),
    defineField({
      name: 'videoId',
      title: 'YouTube Video ID',
      description: 'The string after v= in the URL',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'tracks',
      title: 'Track List',
      description: 'Add the songs and rate them individually.',
      type: 'array',
      of: [{ type: 'song' }], // Reference the object we just created
    }),
  ],
  preview: {
    select: {
      title: 'title',
      artist: 'artist',
      verdict: 'verdict',
      media: 'coverImage',
    },
    prepare(selection) {
      const { title, artist, verdict, media } = selection
      return {
        title: title,
        subtitle: `${artist} • ${verdict}`, // Shows verdict in the list view
        media: media,
      }
    },
  },
})
