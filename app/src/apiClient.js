export const getTasks = () => _get("/api/tasks");

export const addTask = (name) => _post("/api/tasks", { name });
// //click option feature
// export const getContact = (contact_id) => _get(`/api/contacts/${contact_id}`);
//get and addContact function
// export const getContacts = () => {
//   _get("/api/contacts");
// };

// export const createContact = (name) => _post("/api/contacts", { contact });

//get and addContact function
export const getContacts = async () => {
  const response = await fetch("/api/contacts");
  return response.json();
};

export const createContact = async (contact) => {
  const response = await fetch("/api/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });
  return response.json();
};

const _get = async (url) => (await fetch(url)).json();

const _post = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let result;
  try {
    result = await response.json();
  } catch {}

  return result;
};
