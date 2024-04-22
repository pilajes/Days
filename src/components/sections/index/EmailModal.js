// EmailModal.js

import React, { useState } from 'react';

export default function EmailModal({ isOpen, closeModal, handleSubmit }) {
    const [email, setEmail] = useState('');

    return (
        <div className={isOpen ? 'modal-overlay' : 'hidden'}>
            <div className="modal">
                <button className="close-btn" onClick={closeModal}>X</button>
                <h2>Join Waitlist</h2>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={() => handleSubmit(email)}>Submit</button>
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
                }
                .close-btn {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: none;
                    border: none;
                    cursor: pointer;
                }
                .hidden {
                    display: none;
                }
            `}</style>
        </div>
    );
}
