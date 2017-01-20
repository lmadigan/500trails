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
    padding         : '0',
    margin          : '0 auto',
     zIndex          : 2001,
     opacity         : '0',
     transition      : "opacity 0.5s",
     maxWidth        : '1250px',
     maxHeight       : '830px',
     border          : 'none',
     overflow        : 'hidden'

  }
};
