const SaveButton = ({ ideasList, brainstormName }) => {
  const handleSaveClick = () => {
    if (brainstormName != '') {
      localStorage.setItem(brainstormName, ideasList);
    }
  };

  return (
    <button 
      className={`btn ${brainstormName ? '' : 'btn-danger'}`}
      onClick={handleSaveClick}
    >
      Save
    </button>
  );
};

export default SaveButton;
