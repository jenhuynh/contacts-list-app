import express from "express";

import * as db from "./db.mjs";

const contactsRouter = express.Router();

contactsRouter.get("/", async (request, response) => {
  const contacts = await db.getContacts();
  response.json(contacts);
});

//click option feature
// contactsRouter.get("/:contact_id", async (request, response) =>
//   response.json(await db.getContact(request.params.contact_id)),
// );

contactsRouter.use(express.json());
contactsRouter.post("/", async (request, response) => {
  console.log(request.body);
  const contact = await db.createContact(request.body);
  response.status(201).json(contact);
});

export default contactsRouter;
