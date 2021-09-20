import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getTasks = () => db.any("SELECT * FROM tasks");

export const addTask = (name) =>
  db.one("INSERT INTO tasks(name) VALUES(${name}) RETURNING *", { name });

export const getContacts = () => db.any("SELECT * FROM contacts");

export const createContact = (contact) =>
  db.one(
    "INSERT INTO contacts(name, email, phone_number, notes ) VALUES(${name}, ${email}, ${phone_number}, ${notes} ) RETURNING *",
    {
      name: contact.name,
      email: contact.email,
      phone_number: contact.phone_number,
      notes: contact.notes,
    },
  );

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: "../.env" });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
