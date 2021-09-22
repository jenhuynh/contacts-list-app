import * as React from "react";

//contactCard
const ContactCard = ({ contact }) => {
  return (
    <section>
      <div>
        <h1>Contact Details</h1>
        <p>Name: {contact.name}</p>
        <p>Email: {contact.email}</p>
        <p>Phone Number: {contact.phone_number}</p>
        <p>Note: {contact.notes}</p>
      </div>
    </section>
  );
};

export default ContactCard;
