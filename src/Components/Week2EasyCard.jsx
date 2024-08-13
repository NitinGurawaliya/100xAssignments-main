import React, { useState } from 'react';
import anagramImage from '../assets/anagram.png';
import PalindromeChecker from './Week1Cards/PalindromeCard'; // Import the new component

const Week2EasyCard = () => {
    const [view, setView] = useState('anagram'); // State to manage the view
    const [firstString, setFirstString] = useState('');
    const [secondString, setSecondString] = useState('');
    const [result, setResult] = useState('');
    const [isImageVisible, setIsImageVisible] = useState(false);


    // Define handleSubmit if needed for the anagram form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Example validation logic for anagram
        if (areAnagrams(firstString, secondString)) {
            setResult("The strings are anagrams!");
        } else {
            setResult("The strings are not anagrams.");
        }
    };

    // Function to check if two strings are anagrams
    function areAnagrams(str1, str2) {
        const sortString = (str) => str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
        return sortString(str1) === sortString(str2);
    }

    const handleViewChange = (newView) => {
        setView(newView);
        setResult(''); 
        setIsImageVisible(false)
    };

    return (
        <div className="w-full max-w-md mx-auto mb-20 p-6 bg-white rounded-xl shadow-lg mt-5">
            <div className="text-center mb-6">
                <button
                    onClick={() => handleViewChange('anagram')}
                    className={`px-4 py-2 mx-2 ${view === 'anagram' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                >
                    Check Anagram
                </button>
                <button
                    onClick={() => handleViewChange('palindrome')}
                    className={`px-4 py-2 mx-2 ${view === 'palindrome' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                >
                    Check Palindrome
                </button>
            </div>

            {view === 'anagram' && (
                <form className="space-y-8" onSubmit={handleSubmit}>
                    <h5 className="text-3xl font-extrabold text-center text-blue-600 mb-4">
                        Checking Anagram
                    </h5>
                    <hr className="border-t-2 border-gray-300 mb-6"/>

                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <label htmlFor="firstString" className="block mb-2 text-sm font-medium text-gray-700">
                                Enter First String
                            </label>
                            <input
                                id="firstString"
                                value={firstString}
                                onChange={(e) => setFirstString(e.target.value)}
                                className="bg-gray-50 border-none border-b-2 border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-2.5"
                                placeholder="e.g., listen"
                                required
                            />
                        </div>

                        <div className="flex-1">
                            <label htmlFor="secondString" className="block mb-2 text-sm font-medium text-gray-700">
                                Enter Second String
                            </label>
                            <input
                                id="secondString"
                                value={secondString}
                                onChange={(e) => setSecondString(e.target.value)}
                                className="bg-gray-50 border-none border-b-2 border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-2.5"
                                placeholder="e.g., silent"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-3 mt-6"
                    >
                        Check Anagram
                    </button>


                    {result && <div className="mt-4 text-center text-blue-600">{result}</div>}
                   
                    <button type='button'
                     onClick={()=>{
                        setIsImageVisible(!isImageVisible)
                     }}
                      className="w-full text-white bg-gray-700 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold rounded-lg text-sm px-5 py-3 mt-6"
                     >
                        {!isImageVisible ? "See Solution" :"Hide solution"}
                    </button>
                    {isImageVisible &&(
                            <img
                            src={anagramImage}
                            alt="Anagram Image"
                            className="w-full h-auto  mt-10 mb-20"/>
                       
                    )}
                </form>
            )}

            {view === 'palindrome' && <PalindromeChecker />}
        </div>
    );
};

export default Week2EasyCard;
