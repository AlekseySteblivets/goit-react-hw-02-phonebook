import React from "react";
import InputPhoneBook from './components/InputPhoneBook';
import { v4 as uuidv4 } from 'uuid';


// class App extends Component {
//   // inputId = uuidv4();
//   state = {
//     contacts: [],
//     name: ''
//   }


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
const App = () =>{
    return (
      <div className="App">
        <InputPhoneBook/>
        {/* name = {this.state.name}  onChange = {this.handleNameInput} */}
      </div>
    );
  }



export default App;
