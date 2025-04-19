# Changelog

All notable changes to this project will be documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [1.0.3] - 2025-04-19

### Added

- Introduced tsup as the new build system, enabling simultaneous generation of ES Modules (.js) and CommonJS (.cjs) outputs for broader compatibility.
- Updated the TypeScript compiler configuration to target modern ECMAScript ("module": "ES2022", "target": "ES2022"), aligning with the "type": "module" declaration in package.json.
- Enabled native support for named ESM imports, allowing seamless usage like import { validate } from 'jsonverify' in modern environments.

### Fixed

- Resolved compatibility issues in ES Module-based projects caused by previous CommonJS-only output, which led to runtime import errors.
- Standardized internal module resolution and import paths for consistent behavior across both Node.js ESM and CJS runtimes.

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
