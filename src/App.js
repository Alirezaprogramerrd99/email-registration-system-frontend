import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import AddLetter from './components/AddLetter';
import LetterList from './components/LetterList';

import React, { useState } from 'react'; 


function App() {

  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () =>{

    switch (activeComponent) {
      case 'UserList':
          return <UserList />;
      case 'AddUser':
          return <AddUser />;
      case 'LetterList':
          return <LetterList />;
      case 'AddLetter':
          return <AddLetter />;
      default:
          return <div>Select an option to proceed</div>;
  }

  };

  return (
    <div className="App">
      <h1>Email sending application</h1>

            <button onClick={() => setActiveComponent('UserList')}>Show User List</button>
            <button onClick={() => setActiveComponent('AddUser')}>Add User</button>
            <button onClick={() => setActiveComponent('LetterList')}>Show Letter List</button>
            <button onClick={() => setActiveComponent('AddLetter')}>Add Letter</button>
            
            <div className="component-container">
                {renderComponent()}
            </div>
      
    </div>
  );
}

export default App;
