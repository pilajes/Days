import React, { useState } from 'react';
import buttonStyles from '../../../styles/scss/blocks/button.module.scss'; // Importing button styles

export default function EmailModal({ isOpen, closeModal, handleSubmit }) {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsValidEmail(validateEmail(newEmail));
    };

    return (
        <div className={isOpen ? 'modal-overlay' : 'hidden'}>
            <div className="modal">
                <button className="close-btn" onClick={closeModal}>X</button> {/* Changed close button */}
                <h2>Join the Waitlist</h2>
                <div className="input-container">
                    <input
                        type="email"
                        placeholder="Please enter a valid email"
                        value={email}
                        onChange={handleEmailChange}
                        style={{ width: '70%' }}
                    />
                    {isValidEmail ? (
                        <button
                            type="button"
                            className={`button ${buttonStyles.primary}`}
                            style={{ backgroundColor: '#1890ff', borderColor: '#1890ff' }}
                            onClick={() => handleSubmit(email)}
                        >
                            Submit
                        </button>
                    ) : (
                        <button
                            type="button"
                            className={`button ${buttonStyles.primary}`}
                            style={{ backgroundColor: '#ccc', borderColor: '#ccc', cursor: 'not-allowed' }}
                            disabled
                        >
                            Submit
                        </button>
                    )}
                </div>
            </div>
            <style jsx>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .modal {
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    position: relative;
                }
                .close-btn {
                    position: absolute;
                    top: 8px;
                    right: 10px;
                    background: none;
                    border: none;
                    cursor: pointer;
                }
                .input-container {
                    display: flex;
                    align-items: center;
                    margin-top: 10px;
                    flex-direction: row;
                    justify-content: space-between;
                }
                .input-container > * {
                    margin-right: 10px;
                }
                .hidden {
                    display: none;
                }
                @media only screen and (max-width: 600px) {
                    /* Media query for screens up to 600px wide (typical mobile devices) */
                    .modal {
                        width: 90%; /* Adjusted width for smaller screens */
                    }
                    .close-btn {
                        top: -10px; /* Adjusted top position for smaller screens */
                        right: -25px; /* Adjusted right position for smaller screens */
                    }
                    .input-container {
                        flex-direction: row; /* Changed flex-direction for mobile */
                        margin-top: 10px; /* Increased margin for better spacing on mobile */
                    }
                    .input-container > * {
                        margin-right: -10px; /* Removed margin-right for mobile */
                        margin-top: 10px; /* Added margin-bottom for better spacing on mobile */
                    }
                }
            `}</style>
        </div>
    );
}
