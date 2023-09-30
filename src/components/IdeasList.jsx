import React from 'react';

const IdeaList = ({ ideas }) => {
  return (
    <div className="row flex-center">
      <ul>
        {ideas.map((idea, index) => (
          <li key={index}>{idea}</li>
        ))}
      </ul>
    </div>
  );
};

export default IdeaList;

