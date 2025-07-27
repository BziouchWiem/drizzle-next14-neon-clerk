import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema"

config(); // charge le .env

const sql = neon(process.env.DATABASE_URL!); // ici on passe la string au client
export const db = drizzle(sql, {schema}); // ici on passe le client à drizzle
