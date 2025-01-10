[![npm version](https://img.shields.io/npm/v/jsonverify)](https://www.npmjs.com/package/jsonverify)

# JsonVerify

**JsonVerify** is a lightweight library for validating JSON schemas and data, written in TypeScript. It ensures that the provided data complies with defined schemas, making it ideal for JSON-based applications like APIs, configuration systems, or validation layers in modern applications.

## ✨ Why Use JsonVerify?

- 🚀 **Lightweight and Fast**: Optimized for performance in real-world applications.
- 🛠️ **TypeScript First**: Fully typed for better developer experience and type safety.
- 🔍 **Flexible**: Supports primitive types, nested schemas, arrays, and advanced constraints.
- ✅ **Easy to Use**: Intuitive API that gets you started quickly.

## 📦 Installation

You can install jsonverify using npm or yarn:

```bash
npm install jsonverify
```

or

```bash
yarn add jsonverify
```

## 🛠️ Usage

### Importing

```typescript
import { validate } from "jsonverify";
```

### Validating Basic Data

```typescript
const schema = {
  name: "string",
  age: "number",
};

const data = {
  name: "John",
  age: 30,
};

console.log(validate(schema, data)); // true
```

### Validating Nested Data

```typescript
const schema = {
  user: {
    name: "string",
    age: "number",
  },
};

const data = {
  user: {
    name: "Alice",
    age: 25,
  },
};

console.log(validate(schema, data)); // true
```

### Validating Arrays

```typescript
const schema = {
  users: [
    {
      name: "string",
      age: "number",
    },
  ],
};

const data = {
  users: [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
  ],
};

console.log(validate(schema, data)); // true
```

### Using Optional Properties

```typescript
const schema = {
  type: "object",
  properties: {
    name: { type: "string" },
    age: { type: "number" },
    address: { type: "string", optional: true },
  },
};

const data = {
  name: "John",
  age: 30,
};

console.log(validate(schema, data)); // true
```

### Using Constraints (minLength, maxLength, enum)

```typescript
const schema = {
  type: "string",
  enum: ["red", "green", "blue"],
  minLength: 3,
  maxLength: 5,
};

console.log(validate(schema, "red")); // true
console.log(validate(schema, "yellow")); // false
```

## 📜 API

```typescript
validate(schema: Schema, data: Data): boolean
```

Validates the provided data against the schema.

- `schema`: The schema defining the expected types and structure of the data.
- `data`: The data to be validated.

Returns: `true` if the data is valid, or `false` otherwise.

## 🔒️ Requirements

- Node.js version 14.0.0 or higher.

## 🛡️ License

This project is licensed under the MIT License. See the LICENSE file for more information.

## 👨‍💻 Contribution

Feel free to open issues or submit pull requests to improve jsonweaver. All contributions are welcome! 🌟

1. Fork the repository.
2. Create a branch for your feature: git checkout -b my-feature.
3. Make your changes and commit: git commit -m 'My awesome feature'.
4. Push to the repository: git push origin my-feature.
5. Open a pull request on GitHub.

## 💡 Author

Created by Kledenai. Contact me at bruno@khaneland.com.
