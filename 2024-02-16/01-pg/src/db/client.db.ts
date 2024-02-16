import { Client } from "pg";

const client = new Client({
  user: "postgres.xnljbcphfhsuzclrlylq",
  host: "aws-0-ap-northeast-2.pooler.supabase.com",
  database: "postgres",
  password: "dbepal123!@#",
  port: 5432,
});

client.connect();

// client.connect().then(async () => {
//   console.log((await client.query("SELECT * FROM posts")).rows);
// });

// await client.end();

export default client;
