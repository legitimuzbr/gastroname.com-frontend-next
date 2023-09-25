import { sql } from "@vercel/postgres";

export default async function Cart({ params }) {
  const { rows } = await sql`CREATE TABLE "public.users" (
    "id" serial NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "ref" TEXT NOT NULL,
    "itens" integer NOT NULL,
    CONSTRAINT "users_pk" PRIMARY KEY ("id")
  ) WITH (
    OIDS=FALSE
  );`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.quantity}
        </div>
      ))}
    </div>
  );
}