import express from "express";

import * as db from "./db.mjs";
//creating an express router
const contactsRouter = express.Router();
//middleware - you need when you are communicating with a router with json data
contactsRouter.use(express.json());

//adding a get handler to the router and calling the getContacts function
//if the request is a get request and the path is / then, this is the proper handler(aka function) to use, express will execute the function and a pass a request and response and then the function will look at requests make some decision and call a method in the response object to return data back to the client

// the / means the root from where it was mounted
contactsRouter.get("/", async (request, response) => {
  const contacts = await db.getContacts();
  response.json(contacts);
});

//click option feature
// contactsRouter.get("/:contact_id", async (request, response) =>
//   response.json(await db.getContact(request.params.contact_id)),
// );

contactsRouter.post("/", async (request, response) => {
  console.log(request.body);
  const contact = await db.createContact(request.body);
  response.status(201).json(contact);
});

export default contactsRouter;
