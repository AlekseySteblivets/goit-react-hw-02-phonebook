import React from "react";
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => {
    return (
        <div className="Contact-container">
                <h2 className="Contact-container__title">Contacts</h2>
                <ul className="Contact-container__list">
                {contacts.map(contact => (
                    <li className="Contact-container__item">{contact}</li>))
                   }
                </ul>
            </div>
    )
};
export default ContactList;