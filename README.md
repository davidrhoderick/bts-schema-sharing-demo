1.  Run `npm install`
2.  Update your schema in the `types/src/schema.graphql` file.
3.  Add your operations/queries/mutations in the `types/src/queries` folder as `.graphql` files (follow the example there).
4.  Run `npm run build --workspace=types`
5.  Start the GraphQL server using `npm run start --workspace=server`
6.  Start the React server with `npm run dev --workspace=frontend`

If you have any problems with dependencies not updating, you can re-install the types package with `npm install @bts-schema-sharing-demo/types --workspace=server` or `npm install @bts-schema-sharing-demo/types --workspace=frontend`
