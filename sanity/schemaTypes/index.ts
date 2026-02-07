import { type SchemaTypeDefinition } from 'sanity'
import album from './album'
import genre from './genre'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [album, genre],
}
