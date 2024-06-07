import React, { useRef, useEffect } from 'react';
import logo from '../logo.svg';
import Button from './Button';

function Dialog({ isOpen, closeDialog }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (isOpen) {
            dialog.showModal(); 
        } else {
            dialog.close(); 
        }
    }, [isOpen]);

    return (
        <dialog ref={dialogRef} className='dialog-container'>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Button 
                        className='secondary close-dialog' 
                        onClick={closeDialog} 
                        children='Close'
                    />
                </header>
            </div>
        </dialog>
    );
}

export default Dialog;
