# JsonVerify

**JsonVerify** is a lightweight library for validating JSON schemas and data, written in TypeScript. It ensures that the provided data complies with defined schemas, making it ideal for JSON-based applications like APIs or configuration systems.

## 🚀 Features

- Validation of primitive types (`string`, `number`, `boolean`, `null`).
- Support for nested schemas (objects within objects).
- Validation of arrays with schemas.
- Fully written in TypeScript for maximum type safety.

## 📦 Installation

You can install JsonVerify using npm or yarn:

```bash
npm install JsonVerify
```

or

```bash
yarn add JsonVerify
```

## 🛠️ Usage

### Importing

```typescript
import { validate } from "jsonverify";
```

### Basic Example

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

### Example with Nested Schema

```typescript
const schema = {
  user: {
    name: "string",
    age: "number",
  },
};

const data = {
  user: {
    name: "John",
    age: 30,
  },
};

console.log(validate(schema, data)); // true
```

### Example with Arrays

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

## 📜 API

```typescript
validate(schema: Schema, data: Data): boolean
```

Validates the provided data against the schema.

- `schema`: The schema defining the expected types and structure of the data.
- `data`: The data to be validated.

Returns: `true` if the data is valid, or `false` otherwise.

## 🧪 Tests

The project uses Jest for testing. To run the tests:

```bash
npm run test
```

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
