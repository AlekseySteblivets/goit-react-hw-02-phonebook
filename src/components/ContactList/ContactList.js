import React from "react";
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const ContactList = ({ contacts }) => {
    return (
        <div className="Contact-container">
                <h2 className="Contact-container__title">Contacts</h2>
                <ul className="Contact-container__list">
                {contacts.map(contact => (
                    <li className="Contact-container__item" key = {uuidv4()}>{contact.name} : {contact.number}</li>))
                   }
                </ul>
            </div>
    )
};
export default ContactList;