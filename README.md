# veritone-sdk-types

This repo contains TypeScript type definitions for the `veritone-sdk` packages.

## DO NOT USE: Work in progress

## Generating GraphQL TypeScript Declaration File

We use `graphql-code-generator` to convert `schema.json` into TypeScript declaration files. [Github Repo.](https://github.com/dotansimha/graphql-code-generator)

1. Run `yarn run gen-gql-ts`
2. Wrap the generated contents in `/@types/veritone-types/index.d.ts` as a module.

```ts
declare module 'veritone-types' {
  ...FILE CONTENTS...
}
```

# License

Copyright 2017, Veritone Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
