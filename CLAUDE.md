# CodeMirror 6 Handlebars Language Development Guide

## Commands
- Build: `npm run prepare` (runs lezer-generator and rollup)
- Test: `npm test` (runs all tests)
- Test with debug: `LOG=parse mocha test/test.js`
- Test single file: `LOG=parse mocha test/test.js -g "<test-name>"`
- Publish: `npm publish --access public`

## Code Style Guidelines
- Use ES modules (import/export)
- TypeScript with strict mode enabled
- LF line endings
- Follow existing naming conventions (camelCase for variables/functions)
- Use double quotes for strings in grammar files
- Use appropriate tags from @lezer/highlight for syntax highlighting
- Organize imports: standard library first, then external dependencies
- Error handling: use appropriate context trackers for parsing errors
- Grammar definitions: follow lezer grammar conventions with clear token precedence

## Architecture
- Grammar defined in src/syntax.grammar
- Highlighting defined in src/highlight.js
- Custom token handling in src/tokens.js
- Language configuration in src/index.ts