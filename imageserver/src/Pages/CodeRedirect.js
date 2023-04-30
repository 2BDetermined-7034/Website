import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Static/css/CodeRedirectPage.css"

const CodePage = ({ setIsAuthenticated }) => {
    const [code, setCode] = useState('');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        switch(code.toLowerCase()) {
            case "2023-end-year-party":
                setIsAuthenticated(true);
                navigate('/images');
                break;

            default:
                alert('Incorrect code, make sure you are typing it in correctly.');
        }
    };

    return (
            <form className="form-signin" onSubmit={handleSubmit}>
                <h2 className="form-signin-heading">Login</h2>
                <h3 className="form-signin-subheading">
                    If you are having trouble, find a team member and we'll be
                    happy to help you
                </h3>
                <div className="form-group required">
                    <label className="control-label form-labels" htmlFor="username">
                        Gallery code you were given
                    </label>
                    <input
                        className="form-input"
                        id="username"
                        name="username"
                        required
                        type="text"
                        placeholder="Enter code"
                        value={code}
                        onChange={e => setCode(e.target.value)}
                    />
                </div>
                <center>
                    <button className="form-button" type="submit">Submit</button>
                </center>
            </form>
    );
};

export default CodePage;