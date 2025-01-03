import { Schema, Data } from './types';

export const validate = (schema: Schema, data: Data): boolean => {
  if (typeof schema === 'string') {
    // Validação para tipos primitivos
    return (
      (schema === 'null' && data === null) ||
      (schema === 'string' && typeof data === 'string') ||
      (schema === 'number' && typeof data === 'number') ||
      (schema === 'boolean' && typeof data === 'boolean')
    );
  }

  if (Array.isArray(schema)) {
    // Validação para arrays de esquemas
    if (!Array.isArray(data)) {
      return false;
    }
    return data.every((item) => validate(schema[0], item));
  }

  if (typeof schema === 'object' && schema !== null) {
    // Validação para objetos aninhados
    for (const key in schema) {
      if (!(key in data) || !validate(schema[key], data[key])) {
        return false;
      }
    }
    return true;
  }

  // Caso o esquema não corresponda a nenhum caso válido
  return false;
};