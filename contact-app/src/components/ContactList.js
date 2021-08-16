import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import Appbar from "./Appbar";

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="main">
      <Appbar/>
      <h2>
        CONTACT LIST
        <Link to="/add">
          <button className="ui button blue right">ADD CONTACT</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
