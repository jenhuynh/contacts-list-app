// *****************Editing Contact******************** */
// import * as React from "react";

// import Contacts from "./Contacts";
// import * as apiClient from "./apiClient";

// // const addTask = (task) => apiClient.addTask(task).then(loadTasks);

// const CreateContact = ({ createContact }) => {
//   const [contacts, setContacts] = React.useState([]);
//   //hook for contact editing, intial contactEditing is an id
//   const [contactEditing, setContactEditing] = React.useState(null);
//   //hook to keep track of text
//   const [editingText, setEditingText] = React.useState("");
//   const onSubmit = (e) => {
//     const form = e.currentTarget;
//     const {
//       contact_id: { value: contact_id },
//       name: { value: name },
//       email: { value: email },
//       phone_number: { value: phone_number },
//       notes: { value: notes },
//     } = form.elements;

//     e.preventDefault();
//     createContact({ contact_id, name, email, phone_number, notes });
//     form.reset();
//   };

//   function editContact(id) {
//     const updatedContact = { ...contacts }((contact) => {
//       if (contacts.contact_id === id) {
//         contact.text = editingText;
//       }
//       return contacts;
//     });
//     setContacts(updatedContact);
//     setContactEditing(null);
//     setEditingText("");
//   }
//   return (
//     <form onSubmit={onSubmit}>
//       {/* whatever contact we are editing, if it is equal to contact.id, show the input otherwise just show the text */}
//       {contactEditing === contacts.contact_id ? (
//         <label>
//           Contact_Id:
//           <input
//             type="text"
//             onChange={(e) => setEditingText(e.target.value)}
//             value={editingText}
//           />
//         </label>
//       ) : (
//         <div>{contacts.contact_id}</div>
//       )}
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
//         Notes: <input name="notes" type="text" />
//       </label>
//       <button>Add Contact</button>
//       {contactEditing === contacts.contact_id ? (
//         <button onClick={() => editContact(contacts.contact_id)}>
//           Submit Edit
//         </button>
//       ) : (
//         <button onClick={() => setContactEditing(contacts.contact_id)}>
//           Edit Contact
//         </button>
//       )}
//     </form>
//   );
// };

// export default CreateContact;

//****************Working Add Contact Component ************************ */
import * as React from "react";

import Contacts from "./Contacts";
import * as apiClient from "./apiClient";

// const addTask = (task) => apiClient.addTask(task).then(loadTasks);

const CreateContact = ({ createContact }) => {
  const onSubmit = (e) => {
    const form = e.currentTarget;
    const {
      name: { value: name },
      email: { value: email },
      phone_number: { value: phone_number },
      notes: { value: notes },
    } = form.elements;

    e.preventDefault();
    createContact({ name, email, phone_number, notes });
    form.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name: <input name="name" required />
      </label>
      <label>
        Email: <input name="email" type="email" required />
      </label>
      <label>
        Phone Number: <input name="phone_number" type="integer" required />
      </label>
      <label>
        Notes: <input name="notes" type="text" />
      </label>
      <button>Add Contact</button>
    </form>
  );
};

export default CreateContact;
