// import * as React from "react";

// import ContactCard from "./ContactCard";
// import CreateContact from "./CreateContact";
// import * as apiClient from "./apiClient";

// const Contacts = () => {
//   const [contacts, setContacts] = React.useState([]);
//   const loadContacts = async () => setContacts(await apiClient.getContacts());
//   const createContact = (name, email, phone_number, note) => {
//     apiClient
//       .createContact(name, email, phone_number, email, note)
//       .then(loadContacts);
//   };

//   React.useEffect(() => {
//     loadContacts();
//   }, []);

//   return (
//     <section>
//       <ContactList {...{ contacts }} />
//       <CreateContact createContact={createContact} />
//     </section>
//   );
// };

// //lists all data from contact list db
// const ContactList = ({ contacts }) => {
//   const [selectedContact, setSelectedContact] = React.useState("");
//   const [contactDetails, setContactDetails] = React.useState({});

//   const loadContact = React.useCallback(
//     () => apiClient.getContacts(selectedContact).then(setContactDetails),
//     [selectedContact],
//   );

//   React.useEffect(() => {
//     selectedContact !== undefined && loadContact();
//   }, [selectedContact, loadContact]);

//   return (
//     <div>
//       <ContactCard {...{ selectedContact, contactDetails }} />
//       <section>
//         <h1>List of Contacts</h1>
//         <ul key={contacts.contact_id}>
//           {contacts.map(({ id, name, email, phone_number, notes }) => (
//             <li key={id}>
//               {name}, {email}, {phone_number}, {notes}
//             </li>
//           ))}
//           <button onClick={() => setSelectedContact(contacts.contact_id)}>
//             Details
//           </button>
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Contacts;

//*******************Working contact list mapping **************************** */
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

export default Contacts;
