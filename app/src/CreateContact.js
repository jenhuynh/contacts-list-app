import * as React from "react";

// eslint-disable-next-line no-unused-vars
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
      <button>Add user</button>
    </form>
  );
};

export default CreateContact;
