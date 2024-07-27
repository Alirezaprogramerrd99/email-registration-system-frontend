import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LettersPage from './pages/LettersPage';
import UsersPage from './pages/UsersPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/letters" element={<LettersPage />} />
                    <Route path="/users" element={<UsersPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
