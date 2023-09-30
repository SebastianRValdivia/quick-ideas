const NewIdeaButton = ({ newIdeaButtonClick }) => {
  return (
    <div className="row flex-center">
      <div className="col">
        <button className="btn-block" onClick={newIdeaButtonClick}>+ New idea</button>
      </div>
    </div>
  );
};

export default NewIdeaButton;
