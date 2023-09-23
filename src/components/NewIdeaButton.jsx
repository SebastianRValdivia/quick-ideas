import React from 'react';

const Button = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="row flex-center">
      <div className="col">
        <button className="btn-block" onClick={handleClick}> + New idea</button>
      </div>
    </div>
  );
};

export default Button;

