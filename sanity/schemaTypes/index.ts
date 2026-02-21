import { type SchemaTypeDefinition } from 'sanity'
import album from './album'
import genre from './genre'
import song from './song'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [album, genre, song],
}
