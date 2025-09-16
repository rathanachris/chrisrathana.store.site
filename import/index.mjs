// file: index.mjs
import { browsers, features, groups, snapshots } from "web-features";

console.log("Browsers:", Object.keys(browsers));
console.log("Feature count:", Object.keys(features).length);
console.log("Groups:", Object.keys(groups));
console.log("Snapshots:", Object.keys(snapshots));
