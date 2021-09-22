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

import ContactCard from "./ContactCard";
import CreateContact from "./CreateContact";
import * as apiClient from "./apiClient";

const Contacts = () => {
  //the first time the component renders because reactdom works, the contacts is an empty array and useEfffect executes. Then when loadcontacts gets the response from the api, calling setcontacts, contacts will become the array with objects and the components will rerender
  const [contacts, setContacts] = React.useState([]);

  //this component will be calling the apiClient method (apiClient.getContacts())
  //when we call loadcontacts, we are waiting for the response of the api and then we are calling setContacts with that result
  const loadContacts = async () => setContacts(await apiClient.getContacts());
  //this function is equivalent to this way of writing the function
  // const loadContacts = async () => {
  //   const contactsFromApi = await apiClient.getContacts();
  //   setContacts(contactsFromApi)
  // }
  const createContact = (name, email, phone_number, note) => {
    apiClient
      .createContact(name, email, phone_number, email, note)
      .then(loadContacts);
  };
  //useEffect lets you execute a side effect which something that happens that has an effect in the permanent work, ex. in this case we want it to call an api and load that once when the page is loaded. Use use effect when you want something to happen but there is no user action for it (ex. onsubmit, onchange)
  React.useEffect(() => {
    loadContacts();
  }, []);

  return (
    <section>
      {/* //passing as a prop in the contacts list */}
      <ContactList contacts={contacts} />
      <CreateContact createContact={createContact} />
    </section>
  );
};

//lists all data from contact list db, contacts is the array with objects
const ContactList = ({ contacts }) => {
  const [selectedContact, setSelectedContact] = React.useState(null);

  const onClick = (e) => {
    e.preventDefault();
    const contactId = e.target.dataset.id;
    for (let i = 0; i < contacts.length; i++) {
      // debugger;
      if (parseInt(contactId) === contacts[i].contact_id) {
        setSelectedContact(contacts[i]);
      }
    }
  };

  return (
    <>
      <h1>Contact List App</h1>
      <ul>
        {contacts.map(({ contact_id, name }) => (
          <li key={contact_id}>
            <a href="" data-id={contact_id} onClick={onClick} role="button">
              {name}
            </a>
          </li>
        ))}
      </ul>
      {/* if selectedContact is not null, render contactCard. If it is null, do not render contactCard */}
      {selectedContact !== null ? (
        <ContactCard contact={selectedContact} />
      ) : null}
    </>
  );
};
export default Contacts;
