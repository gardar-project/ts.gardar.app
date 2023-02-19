# Build system
- esbuild for optimized production builds
- tsc for type checking
- typescript-eslint for linting and formatting
- esbuild WASM for dev builds in browser (no native toolchain)
- ts-jest for unit tests
- TypeDoc for generated code docs
- JS bundle and source map is written to /.build/, and GitHub action pushes that to branch 'gh_pages'

# Runtime
- import map makes everything resolve to JS files in /.build/
- in dev mode, service worker hijacks all requests to /.build/ and runs esbuild WASM on-demand
