import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Treasures {
  readonly id: string;
  readonly name?: string;
  readonly value?: string;
  constructor(init: ModelInit<Treasures>);
  static copyOf(source: Treasures, mutator: (draft: MutableModel<Treasures>) => MutableModel<Treasures> | void): Treasures;
}

export declare class Monsters {
  readonly id: string;
  readonly cr?: string;
  readonly name?: string;
  readonly type?: string;
  readonly size?: string;
  constructor(init: ModelInit<Monsters>);
  static copyOf(source: Monsters, mutator: (draft: MutableModel<Monsters>) => MutableModel<Monsters> | void): Monsters;
}

export declare class Rooms {
  readonly id: string;
  readonly name?: string;
  constructor(init: ModelInit<Rooms>);
  static copyOf(source: Rooms, mutator: (draft: MutableModel<Rooms>) => MutableModel<Rooms> | void): Rooms;
}