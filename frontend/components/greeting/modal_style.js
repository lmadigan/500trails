export const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(123, 123, 123, 0.85)',
    zIndex: 2000,
  },
  content : {
    position        : 'absolute',
     top             : '100px',
     left            : '100px',
     right           : '100px',
     bottom          : '100px',
     border          : '1px solid #ccc',
     padding         : '20px',
     zIndex          : 2001,
     opacity         : '0',
     transition      : "opacity 0.5s",
     overflow        : 'hidden'
  }
};

// top                   : '20%',
// left                  : '10%',
// right                 : 'auto',
// bottom                : 'auto',
// marginRight           : '-50%',
// transform             : 'translate(-50%, -50%)'
