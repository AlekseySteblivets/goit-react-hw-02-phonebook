import React, { Component } from "react";
// import InputPhoneBook from './components/InputPhoneBook';
import ContactForm from './components/ContactForm';
// import { v4 as uuidv4 } from 'uuid';
import Filter from './components/Filter';
import ContactList from './components/ContactList';


class App extends Component {
  // inputId = uuidv4();
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  changeFilter = e => this.setState({filter: e.currentTarget.value});

  getVisibleContacts = () => {
      const normalizedFilter = this.state.filter.toLowerCase();
      return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),
      );
  };

      addContact = (name, number) => {
        // console.log(text);
        let nameFromInput = {name: name, number: number}
        this.setState(prevState => ({ contacts: [nameFromInput, ...prevState.contacts],
         }));
    };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
          <div>
      <h1>Phonebook</h1>
      <ContactForm addContact = {this.addContact} />

      <h2>Contacts</h2>
      <Filter value = {this.state.filter} оnChange = {this.changeFilter} />
      <ContactList contacts={visibleContacts} />
    </div> 
    )
  }

}


//   handleNameInput = event => {
//     this.setState({name: event.currentTarget.value});
//     console.log(event.currentTarget.value);
// };

//   handleSubmit = text => {
//     const addOneName = {
//       id: uuidv4(),
//       text: text,
//     } 
//     this.setState(prevState => ({
//       contacts: [addOneName, ...prevState.contacts]
//     }))
//   } 
// const App = () =>{
//     return (
//       <div className="App">
//         <InputPhoneBook/>
//         {/* name = {this.state.name}  onChange = {this.handleNameInput} */}
//       </div>
//     );
//   }



export default App;
