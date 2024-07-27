import React, { useState } from 'react';
import AddLetter from '../components/AddLetter';
import LetterList from '../components/LetterList';
import { Link } from 'react-router-dom';


function LettersPage() {

    const [activeComponent, setActiveComponent] = useState(null);

    const renderComponent = () =>{

        switch (activeComponent) {

          case 'LetterList':
              return <LetterList />;
          case 'AddLetter':
              return <AddLetter />;
          default:
              return <div>Select an option to proceed</div>;
      }
    
      };

    return (
        <div className="letters-page">
            <h2>Letters Page</h2>


            <button className="op-button" onClick={() => setActiveComponent('LetterList')}>Show Letter List</button>
            <button className="op-button" onClick={() => setActiveComponent('AddLetter')}>Add Letter</button>

            <Link to="/"><button className="link-button">Back to Main</button></Link>

            <div className="component-container">
                {renderComponent()}
            </div>
            
        </div>
    );
}

export default LettersPage;