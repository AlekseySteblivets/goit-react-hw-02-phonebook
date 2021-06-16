import React, { Component } from 'react'
import styles from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';


class ContactForm extends Component{
    inputId = uuidv4();
    state = {
        name: '',
        number: '',
    
    };
    handleInputChange = evt => {
        console.log(evt.currentTarget.value);
       const { name, value } = evt.currentTarget;
       this.setState({[name]: value});

    };
    handleSubmit = evt => {
        evt.preventDefault();
        this.props.addContact(this.state.name, this.state.number);
        this.setState({ name: "", number: ""});
    };
    // addContact = (name, number) => {
    //     // console.log(text);
    //     let nameFromInput = {name: name, number: number}
    //     this.setState(prevState => ({ contacts: [nameFromInput, ...prevState.contacts],
    //      }));
    // };

    render() {
        // const visibleContacts = this.getVisibleContacts();
        return (
         
                <div className={styles.container}>
                    <form onSubmit={this.handleSubmit} className={styles.form}>
                        <label  htmlFor={this.inputId}>
                         
                            Name:
                           
                            <input
                                className="Container-form__input"
                                type="text"
                                name="name"
                                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                                required
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                id={this.inputId}
                            />
                        </label>
                        <label>
                            Number:
                            <input
                                type="tel"
                                name="number"
                                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                                value = {this.state.number}
                                onChange = {this.handleInputChange}
                                id={this.inputId}
                                required
                            />
                        </label>

                        {/* <Filter value = {this.state.filter} оnChange = {this.changeFilter} /> */}
                        
                      <button type="submit" className="Container-form__btn">Add Contact</button>  
                    </form>
                
                {/* <ContactList contacts={visibleContacts}/> */}
            </div>
        )
    };
};



export default ContactForm;