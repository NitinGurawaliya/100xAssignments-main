import React, { useState } from 'react';
import anagramImage from '../assets/anagram.png';
import Timercard from '../Components/Week1Cards/Timercard'; // Import the Timercard component

const Week2MediumCard = () => {
  const [string, setString] = useState("");
  const [result, setResult] = useState("");
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [view, setView] = useState('vowel'); // State to manage the view

  function handleCheck() {
    const vowelCount = countVowel(string);
    setResult(`This string has ${vowelCount} vowels`);
  }

  function countVowel(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const toLowerCaseStr = string.toLowerCase();
    const vowelCount = toLowerCaseStr.split('').filter(char => vowels.includes(char)).length;

    return vowelCount;
  }

  const handleViewChange = (newView) => {
    setView(newView);
    setResult('');
    setIsImageVisible(false);
  };

  return (
    <div className="w-full max-w-md mx-auto mb-20 p-6 bg-white rounded-xl shadow-lg mt-5">
      <div className="text-center mb-6">
        <button
          onClick={() => handleViewChange('vowel')}
          className={`px-4 py-2 mx-2 ${view === 'vowel' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          Counting Vowels
        </button>
        <button
          onClick={() => handleViewChange('timer')}
          className={`px-4 py-2 mx-2 ${view === 'timer' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          Timer Card
        </button>
      </div>

      {view === 'vowel' && (
        <div>
          <h5 className="text-3xl font-extrabold text-center text-blue-600 mb-4">
            Counting Vowels
          </h5>
          <hr className="border-t-2 border-gray-300 mb-6" />

          <div>
            <label htmlFor="input" className="block mb-2 text-sm font-medium text-gray-700">
              Enter String
            </label>
            <input
              id="input"
              onChange={(e) => setString(e.target.value)}
              className="bg-gray-50 border-none border-b-2 border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-2.5"
              placeholder="e.g., madam"
              required
            />
          </div>

          <button
            type="button"
            onClick={handleCheck}
            className="w-full text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-3 mt-6"
          >
            Count Vowels
          </button>

          {result && <div className="mt-4 text-center border-black font-semibold text-red-600">{result}</div>}

          <button
            type="button"
            onClick={() => setIsImageVisible(!isImageVisible)}
            className="w-full text-white bg-gray-700 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold rounded-lg text-sm px-5 py-3 mt-6"
          >
            {isImageVisible ? "Hide solution" : "See Solution"}
          </button>

          {isImageVisible && (
            
              <img
                src={anagramImage}
                alt="Anagram Image"
                className="w-full h-auto mt-4 mb-4"
              />
    
          )}
        </div>
      )}

      {view === 'timer' && <Timercard />}
    </div>
  );
};

export default Week2MediumCard;
