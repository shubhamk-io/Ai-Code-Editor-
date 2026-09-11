import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { client } from "@/db";

const client = new mongoClient(process.env.MONGODB_URI)
const db =client.db();

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client
    }),
});