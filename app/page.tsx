'use client'

import React, { useState } from "react"

export default function Page() {
const [weight,setWeight] = useState("")
const [height, setHeight] = useState("");
const [meters,setMeters] = useState("")
const [inches,setInches] = useState("")
const [bmi,setBmi] = useState <number|null >(null)
const [type,setType] = useState("")
const [require,setRequire] = useState("")



  const onCalculateBmi = () =>{

    if ((weight || height)===""){
      setRequire("*Required")
      setBmi(null)
    }
  let  heightIntoInt = parseFloat(height)
  let weightIntoInt = parseFloat(weight)


  if (inches){
    heightIntoInt = heightIntoInt / 39.3700787402 
    let bmiValue = weightIntoInt/(heightIntoInt ** 2);
   setBmi(bmiValue)
   if ((weight || height)===""){
    setBmi(null)
    }
    else if(meters){
      let bmiValue = weightIntoInt/(heightIntoInt** 2);
    setBmi(bmiValue)
    }
   else if (bmiValue < 18.5 ){
    setType("Under weight")
   }else if((bmiValue>18.5) && (bmiValue<24.9) ){
    setType("Normal Weight")
   }else if ((bmiValue>25) && (bmiValue<29.9)){
    setType("Over Weight")
   }else if (bmiValue>30){
    setType("Obesity")
   }
  }
  
  else if(meters){
    let bmiValue = weightIntoInt/(heightIntoInt** 2);
  setBmi(bmiValue)
  if ((weight || height)===""){
    setBmi(null)
    }
    else if (inches){
      heightIntoInt = heightIntoInt / 39.3700787402 
       bmiValue = weightIntoInt/(heightIntoInt ** 2);
       setBmi(bmiValue)
    }
   else if (bmiValue < 18.5 ){
    setType("Under weight")
   }else if((bmiValue>18.5) && (bmiValue<24.9) ){
    setType("Normal Weight")
   }else if ((bmiValue>25) && (bmiValue<29.9)){
    setType("Over Weight")
   }else if (bmiValue>30){
    setType("Obesity")
   }
  }
    }
    

    
  
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24  bg-slate-50 ">
        <div className="flex-row justify-center   shadow-md  bg-white rounded-xl" >
        <div className="container mx-auto p-8 flex-col  text-center ">
              <h1 className="text-3xl font-bold mb-4">BMI Calculator for South Indian Body Type</h1>
              <label htmlFor="weight">Weight (kg): </label>
              <input type="number" id="weight" name="weight" min="1"   className="border-2 border-gray-200 rounded-md h-9" required onChange={(e)=>setWeight((e.target.value))}/>
              {weight ==="" && <p className="text-red-500 ">{require}</p>}
            <br/><br/>
              <label htmlFor="height">Height: </label>
              <input type="number" id="height" name="height" min="1"  required className="border-2  border-gray-200 rounded-md h-9"   onChange={(e)=>setHeight((e.target.value))} />
              {height==="" && <p className="text-red-500">{require}</p>}
              <br/><br/>
              <label htmlFor="age">Age: </label>
              <input type="number" id="age" name="age" min="1" max="120"  className="border-2   border-gray-200 rounded-md h-9"  />
              <br />
              <div className="flex gap-5 mt-4 justify-center">
              <label><input type="radio" name="units" value="meters"  onChange={(e)=>setMeters((e.target.value))}/> Meters</label>
              <label><input type="radio" name="units" value="inches" onChange={(e)=>setInches((e.target.value))}/> Inches</label>
              </div>
              <div className="text-center mt-4">
              <button  className="bg-green-500 text-white py-2 px-4 rounded" onClick={onCalculateBmi}>Calculate BMI</button>
              {bmi === null ? 
    <p></p> : 
    <p className="mt-4">Your BMI is: {bmi.toFixed(2)} ({type}) </p>
}
              
              <div className="flex flex-row justify-between">
                  {(type === "Over Weight") && <button className="bg-blue-500 text-white p-3 mt-10 rounded">Get Weight Loss Plan</button>}
                  {(type === "Over Weight") && <button className="bg-blue-500 text-white p-3 mt-10 rounded">Get Weight Loss Diet Plan</button>}
                  {(type === "Obesity")  && <button className="bg-blue-500 text-white p-3 mt-10 rounded">Get Weight Loss Plan</button>}
                  {(type === "Obesity")  && <button className="bg-blue-500 text-white p-3 mt-10 rounded">Get Weight Loss Diet Plan</button>}
                  {(type === "Under weight") && <button className="bg-blue-500 text-white p-3 mt-10 rounded">Get Weight Gain Plan</button>}
                  {(type === "Under weight")  && <button className="bg-blue-500 text-white p-3 mt-10 rounded">Get Weight Gain Diet Plan</button>}
              </div>
              </div>
              </div>
              </div>
      </main>
    );
  }
  
  