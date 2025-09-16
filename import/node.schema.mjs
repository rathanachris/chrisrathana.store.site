// file: schema.mjs
import schema from "web-features/data.schema.json" with { type: "json" };

const { browsers, features, groups, snapshots } = schema;

console.log("Schema keys:", Object.keys(schema));
