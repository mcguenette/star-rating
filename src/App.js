import React, { useState } from 'react';
import Dialog from './components/Dialog';
import StarRating from './components/StarRating';

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
      <div className="App">
          <StarRating />
          <Dialog isOpen={isDialogOpen} closeDialog={closeDialog} />
          <div className='button-toggle'>
              <button 
                  className='open-dialog primary'
                  onClick={openDialog}>
                  Open Dialog
              </button>
          </div>
      </div>
  );
}

export default App;
