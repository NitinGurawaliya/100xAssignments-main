import React, { useState } from 'react';

const Timercard = () => {
  const [sumTill, setSumTill] = useState(0);
  const [result, setResult] = useState(0);
  const [sum, setSum] = useState(0);

  function calculateTime(sumTill) {
    const startTime = performance.now();
    console.log(`Start time: ${startTime}`);

    // Use the formula to calculate sum
    const sum = (sumTill * (sumTill + 1)) / 2;
    console.log(`Sum: ${sum}`);

    // Simulate some delay to ensure measurable time
    let dummySum = 0;
    for (let i = 0; i < 1000; i++) {
      dummySum += i; // Introduce workload
    }
    console.log(`DummySum: ${dummySum}`); // Prevent optimization

    const endTime = performance.now();
    console.log(`End time: ${endTime}`);

    const timeTaken = (endTime - startTime) / 1000;
    console.log(`Time taken: ${timeTaken.toFixed(6)} seconds`);

    // Update states only after all calculations
    setSum(sum);
    setResult(timeTaken.toFixed(6));

    return timeTaken.toFixed(6); // Display result with 6 decimal places
  }

  const handleClick = () => {
    // Convert sumTill to a number
    const number = parseInt(sumTill, 10);
    console.log(`Input number: ${number}`);

    // Calculate time and update the result state
    calculateTime(number);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg mt-2">
      <h5 className="text-3xl font-extrabold text-center text-blue-600 mb-4">
        Time to find sum till
      </h5>
      <hr className="border-t-2 border-gray-300 mb-6" />

      <div>
        <label htmlFor="input" className="block mb-2 text-md font-medium text-gray-700">
          Enter Number
        </label>
        <input
          id="input"
          type="number" // Ensure input is numeric
          className="bg-gray-50 border-none border-b-2 border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-2.5"
          placeholder='No to find sum from 1 to n'
          onChange={(e) => {
            setSumTill(e.target.value);
          }}
        />

        <button
          type="button"
          className="w-full text-white bg-gradient-to-r mb-2 from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-3 mt-6"
          onClick={handleClick} // Trigger calculation on button click
        >
          Calculate Time
        </button>
      </div>

      <label htmlFor="result" className="block mb-2 text-md font-medium text-gray-700">
        Result:
      </label>

      <div
        id="result"
        className="bg-gray-50 border-none border-b-2 h-10 border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-2.5"
      >
        {result} seconds
      </div>

      <label htmlFor="sum" className="block mb-2 text-md font-medium text-gray-700">
        Sum:
      </label>

      <div
        id="sum"
        className="bg-gray-50 border-none border-b-2 h-10 border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-2.5"
      >
        {sum}
      </div>
    </div>
  );
};

export default Timercard;
