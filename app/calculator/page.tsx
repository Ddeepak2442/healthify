import React from "react";

export default function Page() {
  const handleCalculateBMI = () => {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    console.log("Weight:", weight);
    console.log("Height:", height);
    // Here you can perform further BMI calculation logic
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-50">
      <div className="flex-row justify-center shadow-md bg-white rounded-xl">
        <div className="container mx-auto p-8 flex-col text-center">
          <h1 className="text-3xl font-bold mb-4">BMI Calculator for South Indian Body Type</h1>
          <label htmlFor="weight">Weight (kg): </label>
          <input
            type="number"
            id="weight"
            name="weight"
            min="1"
            className="border-2 border-gray-200 rounded-md h-9"
          />
          <br/><br />
          <label htmlFor="height">Height: </label>
          <input
            type="number"
            id="height"
            name="height"
            min="1"
            required
            className="border-2 border-gray-200 rounded-md h-9"
          />
          <br/><br />
          <label htmlFor="age">Age: </label>
          <input type="number" id="age" name="age" min="1" max="120" className="border-2 border-gray-200 rounded-md h-9" />
          <br />
          <div className="flex gap-5 mt-4 justify-center">
            <label><input type="radio" name="units" value="meters" /> Meters</label>
            <label><input type="radio" name="units" value="inches" /> Inches</label>
          </div>
          <div className="text-center mt-4">
            <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={handleCalculateBMI}>Calculate BMI</button>
          </div>
        </div>
      </div>
    </main>
  );
}
