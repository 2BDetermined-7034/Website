import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CodePage from './Pages/CodeRedirect';
import Images from './Pages/Images';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <CodePage setIsAuthenticated={setIsAuthenticated} />
                    }
                />
                <Route
                    path="/images"
                    element={
                        isAuthenticated ? (
                            <Images />
                        ) : (
                            <div>
                                <h1 >Error: You must enter the correct code to access this page</h1>
                            </div>
                        )
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;