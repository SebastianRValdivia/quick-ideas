import { useState } from 'react';

const NewIdeaInput = ({ onPressEnter }) => {
  const [inputText, setInputText] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputText.trim() !== '') {
      onPressEnter(inputText);
    }
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type something and press Enter"
        value={inputText}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default NewIdeaInput;
