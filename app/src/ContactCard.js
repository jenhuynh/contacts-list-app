import * as React from "react";

//contactCard
const ContactCard = ({ selectedContact, contactDetails }) => {
  return (
    <section>
      {selectedContact ? (
        <div>
          <h1>Contact Details</h1>
          <p>Name: {contactDetails.name}</p>
          <p>Email: {contactDetails.email}</p>
          <p>Phone Number: {contactDetails.phone_number}</p>
          <p>Note: {contactDetails.notes}</p>
        </div>
      ) : null}
    </section>
  );
};

export default ContactCard;
