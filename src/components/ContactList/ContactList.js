import React from "react";
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <div className="Contact-container">
                {/* <h2 className="Contact-container__title">Contacts</h2> */}
                <ul >
                {contacts.map(contact => (
                    <li className={styles.contactList} key = {uuidv4()}>{contact.name} : {contact.number}
                    <button onClick={() => onDeleteContact(contact.id)} >Delete</button>
                    </li>))
                   }
                </ul>
            </div>
    )
};
export default ContactList;