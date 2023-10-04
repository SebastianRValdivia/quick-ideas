const SaveButton = ({ ideasList, brainstormName }) => {
  const handleSaveClick = () => {

    localStorage.setItem(brainstormName, ideasList);
  };

  return (
    <button onClick={handleSaveClick}>Save</button>
  );
};

export default SaveButton;
