import * as React from "react";

import CreateContact from "./CreateContact";
import * as apiClient from "./apiClient";

const Contacts = () => {
  const [contacts, setContacts] = React.useState([]);

  const loadContacts = async () => setContacts(await apiClient.getContacts());
  const createContact = (name, email, phone_number, note) => {
    apiClient
      .createContact(name, email, phone_number, email, note)
      .then(loadContacts);
  };

  React.useEffect(() => {
    loadContacts();
  }, []);

  return (
    <section>
      <ContactList {...{ contacts }} />
      <CreateContact createContact={createContact} />
    </section>
  );
};

//lists all data from contact list db
const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, name, email, phone_number, notes }) => (
      <li key={id}>
        {name}, {email}, {phone_number}, {notes}
      </li>
    ))}
  </ul>
);

// const AddContact = ({ addContact }) => {
//   const onSubmit = (e) => {
//     const form = e.currentTarget;
//     const {
//       name: { value: name },
//       email: { value: email },
//       phone_number: { value: phone_number },
//       notes: { value: notes },
//     } = form.elements;

//     e.preventDefault();
//     addContact({ name, email, phone_number, notes });
//     form.reset();
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <label>
//         Name: <input name="name" required />
//       </label>
//       <label>
//         Email: <input name="email" type="email" required />
//       </label>
//       <label>
//         Phone Number: <input name="phone_number" type="integer" required />
//       </label>
//       <label>
//         Notes: <input name="notes" type="text" required />
//       </label>
//       <button>Add user</button>
//     </form>
//   );
// };

export default Contacts;
