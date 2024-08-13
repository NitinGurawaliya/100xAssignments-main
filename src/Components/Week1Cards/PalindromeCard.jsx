// PalindromeChecker.jsx
import React, { useState } from 'react';
import anagramImage from '../../assets/anagram.png';


const PalindromeChecker = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const [isImageVisible,setIsImageVisible]  = useState(false)

    function isPalindrome(str) {
        const formatStr = (str) => str.replace(/[^\w]/g, '').toLowerCase();
        const cleanedStr = formatStr(str);
        return cleanedStr === cleanedStr.split('').reverse().join('');
    }

    const handleCheck = () => {
        if (isPalindrome(input)) {
            setResult("The string is a palindrome!");
        } else {
            setResult("The string is not a palindrome.");
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
            <h5 className="text-3xl font-extrabold text-center text-blue-600 mb-4">
                Checking Palindrome
            </h5>
            <hr className="border-t-2 border-gray-300 mb-6"/>

            <div>
                <label htmlFor="input" className="block mb-2 text-sm font-medium text-gray-700">
                    Enter String
                </label>
                <input
                    id="input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
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
                Check Palindrome
            </button>

            {result && <div className="mt-4 text-center text-red-600">{result}</div>}
           
            <button type='button'
             onClick={()=>{
                setIsImageVisible(!isImageVisible)
            }}
            className='w-full text-white bg-gray-700 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold rounded-lg text-sm px-5 py-3 mt-6'
            >
                {!isImageVisible?"See solution":"Hide solution"}
            </button>
            {isImageVisible&&(
                <div>
                <img
                    src={anagramImage}
                    alt="Anagram Image"
                    className="w-full h-auto  mt-10 mb-20   "
                />
                </div>
            )}
        </div>

    );
};

export default PalindromeChecker;
