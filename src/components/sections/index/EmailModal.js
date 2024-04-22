import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

export default function EmailModal({ isOpen, closeModal, handleSubmit }) {
    const [email, setEmail] = useState('');

    return (
        <div className={isOpen ? 'modal-overlay' : 'hidden'}>
            <div className="modal">
                <button className="close-btn" onClick={closeModal}><CloseOutlined /></button>
                <h2>Join the Waitlist</h2>
                <div className="input-container">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button type="primary" style={{ backgroundColor: '#1890ff', borderColor: '#1890ff' }} onClick={() => handleSubmit(email)}>Submit</Button>
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
                    position: relative; /* Ensure the absolute positioning of the close button */
                }
                .close-btn {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: none;
                    border: none;
                    cursor: pointer;
                }
                .input-container {
                    display: flex;
                    align-items: center;
                    margin-top: 10px;
                }
                .input-container > * {
                    margin-right: 10px;
                }
                .hidden {
                    display: none;
                }
            `}</style>
        </div>
    );
}
