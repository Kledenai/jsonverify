export type PrimitiveType = 'string' | 'number' | 'boolean' | 'null';

export interface SchemaObject {
  [key: string]: PrimitiveType | SchemaObject | SchemaObject[];
}

export type Schema = PrimitiveType | SchemaObject | SchemaObject[];
export type Data = Record<string, any>;