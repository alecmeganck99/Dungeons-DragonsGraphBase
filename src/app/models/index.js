// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Treasures, Monsters, Rooms } = initSchema(schema);

export {
  Treasures,
  Monsters,
  Rooms
};