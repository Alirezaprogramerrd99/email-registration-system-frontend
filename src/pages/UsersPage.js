import React, { useState } from 'react';
import AddUser from '../components/AddUser';
import UserList from '../components/UserList';
import { Link } from 'react-router-dom';

function UsersPage() {
    const [activeComponent, setActiveComponent] = useState(null);

    const renderComponent = () =>{

        switch (activeComponent) {

          case 'UserList':
              return <UserList />;
          case 'AddUser':
              return <AddUser />;
          default:
              return <div>Select an option to proceed</div>;
      }
    
      };

    return (
        <div className="users-page">
            <h2>Users Page</h2>


            <button className="op-button" onClick={() => setActiveComponent('UserList')}>Show User List</button>
            <button className="op-button" onClick={() => setActiveComponent('AddUser')}>Add User</button>

            <Link to="/"><button className="link-button">Back to Main</button></Link>
            
            <div className="component-container">
            {renderComponent()}
            </div>

        </div>
    );

};

export default UsersPage;