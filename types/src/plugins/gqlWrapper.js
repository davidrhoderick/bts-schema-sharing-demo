const { printSchema } = require('graphql');

module.exports = {
  plugin: (schema, documents, config) => {
    const schemaSDL = printSchema(schema);

    return `
import { gql } from 'graphql-tag';

export const typeDefs = gql\`
${schemaSDL}
\`;
`;
  },
};