# Changelog

All notable changes to this project will be documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [1.0.2] - 2025-04-19

### Added

- Updated the TypeScript compiler settings to output ES Modules ("module": "ES2022", "target": "ES2022"), ensuring compatibility with "type": "module" in package.json.
- Adjusted the build output to support named ESM imports such as import { validate } from 'jsonverify' without runtime errors.

### Fixed

- Resolved an issue where the package could not be used in projects configured as ES Modules due to CommonJS build output, despite being published as an ESM package.

## [1.0.1] - 2025-01-10

### Added

- Support for optional properties using the `optional: true` keyword.
- Validation for string constraints like `minLength` and `maxLength`.
- Validation for number constraints like `minimum` and `maximum`.
- Support for the `enum` keyword to restrict values to a predefined set.
- Improved TypeScript type definitions to include explicit support for `optional`.
- Expanded test coverage for optional properties, string and number constraints, and `enum` validation.

### Fixed

- Improved compatibility with TypeScript for schemas defined with `as const`.
- Enhanced error messages and validation flow for better debugging.

## [1.0.0] - 2025-01-03

### Added

- Initial release of JsonVerify, a lightweight JSON schema and data validator written in TypeScript.
- Core functionality to validate primitive types (string, number, boolean, null).
- Support for nested schemas and array validations.
- TypeScript type definitions for Schema and Data.
- Example usage and API documentation in the README.
- ESLint configuration for TypeScript code quality.
- Jest setup for unit testing.
- License (MIT).
- Scripts for building, linting, and testing in package.json.

### Fixed

- Resolved TypeScript issues with schema circular references.
- Addressed ESLint configuration compatibility with Flat Config.

### Notes

- Initial release includes core functionality and basic examples.
- Future updates will focus on performance optimization and extended validation rules.
