import { Schema, Data, JsonSchemaType } from './types';

export const validate = (schema: Schema, data: Data): boolean => {
  if (typeof schema === 'string') {
    return (
      (schema === 'null' && data === null) ||
      (schema === 'string' && typeof data === 'string') ||
      (schema === 'number' && typeof data === 'number') ||
      (schema === 'boolean' && typeof data === 'boolean')
    );
  }

  if (Array.isArray(schema)) {
    if (!Array.isArray(data)) {
      return false;
    }
    return data.every((item) => validate(schema[0], item));
  }

  if (typeof schema === 'object' && schema !== null) {
    if ('type' in schema || 'properties' in schema) {
      return validateJsonSchema(schema, data);
    }

    for (const key in schema) {
      if (!(key in data) || !validate(schema[key], data[key])) {
        return false;
      }
    }
    return true;
  }

  return false;
};

const validateJsonSchema = (schema: any, data: any): boolean => {
  if (schema.type) {
    const types: JsonSchemaType[] = Array.isArray(schema.type) ? schema.type : [schema.type];
    if (!types.some((type: JsonSchemaType) => validateType(type, data))) {
      return false;
    }
  }

  if (schema.enum) {
    if (!schema.enum.includes(data)) {
      return false; // Valor não corresponde a nenhum item do enum
    }
  }

  if (schema.type === 'string') {
    if (schema.minLength !== undefined && data.length < schema.minLength) {
      return false;
    }

    if (schema.maxLength !== undefined && data.length > schema.maxLength) {
      return false;
    }
  }

  if (schema.type === 'number' || schema.type === 'integer') {
    if (schema.minimum !== undefined && data < schema.minimum) {
      return false;
    }

    if (schema.maximum !== undefined && data > schema.maximum) {
      return false;
    }
  }

  if (schema.properties) {
    if (typeof data !== 'object' || data === null) {
      return false;
    }

    for (const key in schema.properties) {
      const propertySchema = schema.properties[key];

      // Verifica se a propriedade é opcional
      const isOptional = propertySchema?.optional || false;

      // Se a propriedade for obrigatória e estiver ausente
      if (!(key in data) && schema.required?.includes(key)) {
        return false;
      }

      // Se a propriedade for opcional e estiver ausente
      if (!(key in data) && isOptional) {
        continue; // Ignorar validação
      }

      // Se a propriedade estiver presente, validar
      if (key in data && !validate(propertySchema, data[key])) {
        return false;
      }
    }

    if (!schema.additionalProperties && typeof data === 'object') {
      const allowedKeys = Object.keys(schema.properties || {});
      for (const key in data) {
        if (!allowedKeys.includes(key)) {
          return false; // Propriedade extra não permitida
        }
      }
    }
  }

  if (schema.items) {
    if (!Array.isArray(data)) {
      return false;
    }

    if (Array.isArray(schema.items)) {
      if (data.length !== schema.items.length) {
        return false;
      }

      return schema.items.every((itemSchema: Schema, index: number) =>
        validate(itemSchema, data[index])
      );
    } else {
      return data.every((item) => validate(schema.items, item));
    }
  }

  return true;
};

const validateType = (type: JsonSchemaType, data: any): boolean => {
  switch (type) {
    case 'string':
      return typeof data === 'string';
    case 'number':
      return typeof data === 'number';
    case 'boolean':
      return typeof data === 'boolean';
    case 'null':
      return data === null;
    case 'object':
      return typeof data === 'object' && data !== null && !Array.isArray(data);
    case 'array':
      return Array.isArray(data);
    default:
      return false;
  }
};
