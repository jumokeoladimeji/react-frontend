import * as dotenv from "dotenv";

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
    case "test":
        path = `${__dirname}/../../.env.test`;
        break;
    case "production":
        path = `${__dirname}/../../.env.production`;
        break;
    default:
        path = `${__dirname}/../../.env.development`;
}
dotenv.config({ path: path });

// console.log(process.env.API_URL, 'process.env.API_URL', path)
export const API_URL = process.env.API_URL;
export const LOG_LEVEL = process.env.LOG_LEVEL;
