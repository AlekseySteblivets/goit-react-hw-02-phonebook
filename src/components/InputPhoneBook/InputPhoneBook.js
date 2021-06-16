import React, { Component } from 'react';
import styles from './InputPhoneBook.module.css';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import ContactList from '../ContactList'
import Filter from '../Filter';


class InputPhoneBook extends Component{
    inputId = uuidv4();
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
          ],
        filter: '',
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
        this.addContact(this.state.name, this.state.number);
        this.setState({ name: "", number: ""});
    };
    addContact = (name, number) => {
        // console.log(text);
        let nameFromInput = {name: name, number: number}
        this.setState(prevState => ({ contacts: [nameFromInput, ...prevState.contacts],
         }));
    };

    changeFilter = e => this.setState({filter: e.currentTarget.value});

    getVisibleContacts = () => {
        const normalizedFilter = this.state.filter.toLowerCase();
        return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    render() {
        const visibleContacts = this.getVisibleContacts();
        return (
            <div className="Container">
                <h2>Phonebook</h2>
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

                        <Filter value = {this.state.filter} оnChange = {this.changeFilter} />
                        
                      <button type="submit" className="Container-form__btn">Add Contact</button>  
                </form>
                </div>
                <ContactList contacts={visibleContacts}/>
            </div>
        )
    };
};

export default InputPhoneBook;






// class InputPhoneBook extends Component {
//     state = {contact: '',};
// }
// handleChange = e => {
//     this.setState({message: e.currentTarget.value});
// }








// const InputPhoneBook = ({name, onChange}) => (
//     <div>
//         <h1>
//         Phonebook
//         </h1>

//         <div className = {styles.form}>
//             <form>
//                 <label>
//                     Name             
//                 <input
//                 type="text"
//                 name={name}
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//                 required
//                 onChange = {onChange}

//                 /> 
//                 </label>
//                 <button> Add contact</button>
//             </form>
 
//         </div>   
//         <div>
//             <h2>Contacts</h2>
//             {/* <ul>
//                 <li>Мистрер Джон
//                 </li>
//                 <li>Сер Найк
//                 </li>
//                 <li>Леди Гага
//                 </li>
//             </ul> */}
//         </div>
//     </div>

// )

// // let asasa = '';
// // asasa = uuidv4();

// // console.log(asasa);

// export default InputPhoneBook;