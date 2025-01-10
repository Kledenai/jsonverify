export type PrimitiveType = 'string' | 'number' | 'boolean' | 'null';

export interface SchemaObject {
  type?: PrimitiveType | 'object' | 'array';
  properties?: Record<
    string,
    Schema & {
      optional?: boolean;
    }
  >;
  items?: Schema | Schema[];
  required?: string[];
  additionalProperties?: boolean;
  [key: string]: any;
}

export type JsonSchemaType = 'string' | 'number' | 'boolean' | 'null' | 'object' | 'array';

export type Schema = PrimitiveType | SchemaObject | SchemaObject[];
export type Data = Record<string, any>;
