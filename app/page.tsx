'use client'

import React, { useState } from "react"

export default function Page() {
const [weight,setWeight] = useState("")
const [height, setHeight] = useState("");
const [meters,setMeters] = useState("")
const [inches,setInches] = useState("")
const [bmi,setBmi] = useState <number|null >(null)
const [type,setType] = useState("")
const [error, setError] = useState('');



//over weight
const [WeighLossBooleanVal,setWeighLossBooleanVal] = useState(false)
const [WeighLossDietBooleanVal,setWeighLossDietBooleanVal] = useState(false)

//obesity
const [WeighLossBooleanValForObesity,setWeighLossBooleanValForObesity] = useState(false)
const [WeighLossDietBooleanValForObesity,setWeighLossDietBooleanValForObesity] = useState(false)

//underWeight
const [WeighGainBooleanVal,setWeighGainBooleanVal] = useState(false)
const [WeighGainDietBooleanVal,setWeighGainDietBooleanVal] = useState(false)

//normalweight
const [WeighGainBooleanValForNormal,setWeighGainBooleanValForNormal] = useState(false)
const [WeighGainDietBooleanValForNormal,setWeighGainDietBooleanValForNormal] = useState(false)


  const onCalculateBmi = () =>{

    if (weight === '') {
      setError('Weight required.')
    }
    else if (height === ''){
      setError('Height required.')
    }
     else {
      // Perform BMI calculation logic here
      setError('');
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
  


//overweight  
const weightLossExercisePlan =() =>{
  setWeighLossBooleanVal(!WeighLossBooleanVal)
  setWeighGainBooleanVal(false)
  setWeighLossBooleanValForObesity(false)
  setWeighGainBooleanValForNormal(false)
}
const weightLossDietPlan =() =>{
  setWeighLossDietBooleanVal(!WeighLossDietBooleanVal)
  setWeighGainDietBooleanVal(false)
  setWeighLossDietBooleanValForObesity(false)
  setWeighGainDietBooleanValForNormal(false)


}

// underweight
const weightGainExercisePlan =() =>{
  setWeighGainBooleanVal(!WeighGainBooleanVal)
  setWeighLossBooleanVal(false)
  setWeighLossBooleanValForObesity(false)
  setWeighGainBooleanValForNormal(false)
}
const weightGainDietPlan =() =>{
  setWeighGainDietBooleanVal(!WeighGainDietBooleanVal)
  setWeighLossDietBooleanValForObesity(false)
  setWeighGainDietBooleanValForNormal(false)
  setWeighLossDietBooleanVal(false)

}

// obesity
const weightLossDietPlanForObesity =() =>{
  setWeighLossDietBooleanValForObesity(!WeighLossDietBooleanValForObesity)
  setWeighGainDietBooleanVal(false)
  setWeighLossDietBooleanVal(false)
  setWeighGainDietBooleanValForNormal(false)

}
const weightLossExercisePlanForObesity =() =>{
  setWeighLossBooleanValForObesity(!WeighLossBooleanValForObesity)
  setWeighGainBooleanVal(false)
  setWeighGainBooleanValForNormal(false)
  setWeighLossBooleanVal(false)
}

//normal
const maintainWeightExercisePlan =() =>{
  setWeighGainBooleanValForNormal(!WeighGainBooleanValForNormal)
  setWeighLossBooleanValForObesity(false)
  setWeighGainBooleanVal(false)
  setWeighLossBooleanVal(false)
}
const maintainWeightDietPlan =() =>{
  setWeighGainDietBooleanValForNormal(!WeighGainDietBooleanValForNormal)
  setWeighLossDietBooleanValForObesity(false)
  setWeighGainDietBooleanVal(false)
  setWeighLossDietBooleanVal(false)

}


//over weight

const weightLossExercisenDayWisePlan = [
  { day: 'Day1', exercise: 'Brisk walk or jog (30 mins)' },
  { day: 'Day2', exercise: 'Yoga session (45 mins)' },
  { day: 'Day3', exercise: 'Strength training (40 mins)' },
  { day: 'Day4', exercise: 'Cycling (45 mins)' },
  { day: 'Day5', exercise: 'HIIT workout (30 mins)' },
  { day: 'Day6', exercise: 'Pilates (45 mins)' },
  { day: 'Day7', exercise: 'Rest day' },
  { day: 'Day8', exercise: 'Brisk walk or jog (30 mins)' },
  { day: 'Day9', exercise: 'Yoga session (45 mins)' },
  { day: 'Day10', exercise: 'Strength training (40 mins)' },
  { day: 'Day11', exercise: 'Cycling (45 mins)' },
  { day: 'Day12', exercise: 'HIIT workout (30 mins)' },
  { day: 'Day13', exercise: 'Pilates (45 mins)' },
  { day: 'Day14', exercise: 'Rest day' },
  { day: 'Day15', exercise: 'Brisk walk or jog (30 mins)' },
  { day: 'Day16', exercise: 'Yoga session (45 mins)' },
  { day: 'Day17', exercise: 'Strength training (40 mins)' },
  { day: 'Day18', exercise: 'Cycling (45 mins)' },
  { day: 'Day19', exercise: 'HIIT workout (30 mins)' },
  { day: 'Day20', exercise: 'Pilates (45 mins)' },
  { day: 'Day21', exercise: 'Rest day' },
  { day: 'Day22', exercise: 'Brisk walk or jog (30 mins)' },
  { day: 'Day23', exercise: 'Yoga session (45 mins)' },
  { day: 'Day24', exercise: 'Strength training (40 mins)' },
  { day: 'Day25', exercise: 'Cycling (45 mins)' },
  { day: 'Day26', exercise: 'HIIT workout (30 mins)' },
  { day: 'Day27', exercise: 'Pilates (45 mins)' },
  { day: 'Day28', exercise: 'Rest day' },
  { day: 'Day29', exercise: 'Brisk walk or jog (30 mins)' },
  { day: 'Day30', exercise: 'Yoga session (45 mins)' },
];
    
const  weightLossMealPlan  = [
  { day: 'Day-1', breakfast: 'Vegetable Upma(250kcal)', lunch: 'Brown Rice(270kcal), Cucumber Raita(100kcal)', snacks: 'Roasted Chickpeas(120kcal)', dinner: 'Moong Dal Khichdi(300kcal)', totalCalorieIntake: '1040kcal' },
  { day: 'Day-2', breakfast: 'Oats Idli(200kcal)', lunch: 'Quinoa Pulao(350kcal), Mixed Vegetable Curry(150kcal)', snacks: 'Greek Yogurt with Berries(120kcal)', dinner: 'Grilled Fish with Stir-fried Vegetables(300kcal)', totalCalorieIntake: '1120kcal' },
  { day: 'Day-3', breakfast: 'Ragi Dosa(180kcal)', lunch: 'Barley Salad(250kcal)', snacks: 'Almonds(100kcal)', dinner: 'Stuffed Bell Peppers with Quinoa(350kcal)', totalCalorieIntake: '1080kcal' },
  { day: 'Day-4', breakfast: 'Multigrain Pancakes with Honey(300kcal)', lunch: 'Chickpea Salad(280kcal)', snacks: 'Carrot Sticks with Hummus(150kcal)', dinner: 'Eggplant Curry with Brown Rice(350kcal)', totalCalorieIntake: '1080kcal' },
  { day: 'Day-5', breakfast: 'Semolina Upma(250kcal)', lunch: 'Lentil Soup with Whole Wheat Bread(300kcal)', snacks: 'Trail Mix(120kcal)', dinner: 'Tofu Stir-fry with Quinoa(350kcal)', totalCalorieIntake: '1020kcal' },
  { day: 'Day-6', breakfast: 'Millet Pongal(220kcal)', lunch: 'Spinach Dal with Roti(350kcal)', snacks: 'Greek Yogurt with Nuts(150kcal)', dinner: 'Vegetable Stir-fry with Brown Rice(300kcal)', totalCalorieIntake: '1020kcal' },
  { day: 'Day-7', breakfast: 'Amaranth Porridge with Berries(250kcal)', lunch: 'Masoor Dal with Whole Wheat Roti(350kcal)', snacks: 'Cherry Tomatoes with Cottage Cheese(120kcal)', dinner: 'Grilled Chicken Salad(300kcal)', totalCalorieIntake: '1020kcal' },
  { day: 'Day-8', breakfast: 'Quinoa Upma(280kcal)', lunch: 'Mixed Veg Curry with Brown Rice(350kcal)', snacks: 'Apple Slices with Peanut Butter(150kcal)', dinner: 'Grilled Fish with Steamed Vegetables(300kcal)', totalCalorieIntake: '1080kcal' },
  { day: 'Day-9', breakfast: 'Methi Thepla with Curd(250kcal)', lunch: 'Chickpea Spinach Salad(300kcal)', snacks: 'Roasted Pumpkin Seeds(100kcal)', dinner: 'Chana Masala with Quinoa(350kcal)', totalCalorieIntake: '1000kcal' },
  { day: 'Day-10', breakfast: 'Vegetable Poha(200kcal)', lunch: 'Grilled Tofu Salad(300kcal)', snacks: 'Orange Slices(80kcal)', dinner: 'Lentil Soup with Whole Wheat Bread(300kcal)', totalCalorieIntake: '880kcal' },
  { day: 'Day-11', breakfast: 'Ragi Idiyappam with Coconut Chutney(300kcal)', lunch: 'Paneer Bhurji with Roti(350kcal)', snacks: 'Cucumber Slices with Hummus(100kcal)', dinner: 'Stir-fried Tofu with Brown Rice(350kcal)', totalCalorieIntake: '1100kcal' },
  { day: 'Day-12', breakfast: 'Oats Porridge with Almonds(250kcal)', lunch: 'Brown Rice with Rajma Curry(400kcal)', snacks: 'Walnuts(100kcal)', dinner: 'Grilled Salmon with Quinoa(350kcal)', totalCalorieIntake: '1100kcal' },
  { day: 'Day-13', breakfast: 'Beetroot Uttapam(280kcal)', lunch: 'Mushroom Stir-fry with Brown Rice(350kcal)', snacks: 'Cherry Tomatoes with Cottage Cheese(120kcal)', dinner: 'Chickpea Salad(300kcal)', totalCalorieIntake: '1050kcal' },
  { day: 'Day-14', breakfast: 'Millet Dosa with Tomato Chutney(270kcal)', lunch: 'Cauliflower Curry with Roti(350kcal)', snacks: 'Greek Yogurt with Berries(120kcal)', dinner: 'Baked Vegetable Casserole(350kcal)', totalCalorieIntake: '1090kcal' },
  { day: 'Day-15', breakfast: 'Vegetable Upma(250kcal)', lunch: 'Brown Rice(270kcal), Cucumber Raita(100kcal)', snacks: 'Roasted Chickpeas(120kcal)', dinner: 'Moong Dal Khichdi(300kcal)', totalCalorieIntake: '1040kcal' },
  { day: 'Day-16', breakfast: 'Oats Idli(200kcal)', lunch: 'Quinoa Pulao(350kcal), Mixed Vegetable Curry(150kcal)', snacks: 'Greek Yogurt with Berries(120kcal)', dinner: 'Grilled Fish with Stir-fried Vegetables(300kcal)', totalCalorieIntake: '1120kcal' },
  { day: 'Day-17', breakfast: 'Ragi Dosa(180kcal)', lunch: 'Barley Salad(250kcal)', snacks: 'Almonds(100kcal)', dinner: 'Stuffed Bell Peppers with Quinoa(350kcal)', totalCalorieIntake: '1080kcal' },
  { day: 'Day-18', breakfast: 'Multigrain Pancakes with Honey(300kcal)', lunch: 'Chickpea Salad(280kcal)', snacks: 'Carrot Sticks with Hummus(150kcal)', dinner: 'Eggplant Curry with Brown Rice(350kcal)', totalCalorieIntake: '1080kcal' },
  { day: 'Day-19', breakfast: 'Semolina Upma(250kcal)', lunch: 'Lentil Soup with Whole Wheat Bread(300kcal)', snacks: 'Trail Mix(120kcal)', dinner: 'Tofu Stir-fry with Quinoa(350kcal)', totalCalorieIntake: '1020kcal' },
  { day: 'Day-20', breakfast: 'Millet Pongal(220kcal)', lunch: 'Spinach Dal with Roti(350kcal)', snacks: 'Greek Yogurt with Nuts(150kcal)', dinner: 'Vegetable Stir-fry with Brown Rice(300kcal)', totalCalorieIntake: '1020kcal' },
  { day: 'Day-21', breakfast: 'Amaranth Porridge with Berries(250kcal)', lunch: 'Masoor Dal with Whole Wheat Roti(350kcal)', snacks: 'Cherry Tomatoes with Cottage Cheese(120kcal)', dinner: 'Grilled Chicken Salad(300kcal)', totalCalorieIntake: '1020kcal' },
  { day: 'Day-22', breakfast: 'Quinoa Upma(280kcal)', lunch: 'Mixed Veg Curry with Brown Rice(350kcal)', snacks: 'Apple Slices with Peanut Butter(150kcal)', dinner: 'Grilled Fish with Steamed Vegetables(300kcal)', totalCalorieIntake: '1080kcal' },
  { day: 'Day-23', breakfast: 'Methi Thepla with Curd(250kcal)', lunch: 'Chickpea Spinach Salad(300kcal)', snacks: 'Roasted Pumpkin Seeds(100kcal)', dinner: 'Chana Masala with Quinoa(350kcal)', totalCalorieIntake: '1000kcal' },
  { day: 'Day-24', breakfast: 'Vegetable Poha(200kcal)', lunch: 'Grilled Tofu Salad(300kcal)', snacks: 'Orange Slices(80kcal)', dinner: 'Lentil Soup with Whole Wheat Bread(300kcal)', totalCalorieIntake: '880kcal' },
  { day: 'Day-25', breakfast: 'Ragi Idiyappam with Coconut Chutney(300kcal)', lunch: 'Paneer Bhurji with Roti(350kcal)', snacks: 'Cucumber Slices with Hummus(100kcal)', dinner: 'Stir-fried Tofu with Brown Rice(350kcal)', totalCalorieIntake: '1100kcal' },
  { day: 'Day-26', breakfast: 'Oats Porridge with Almonds(250kcal)', lunch: 'Brown Rice with Rajma Curry(400kcal)', snacks: 'Walnuts(100kcal)', dinner: 'Grilled Salmon with Quinoa(350kcal)', totalCalorieIntake: '1100kcal' },
  { day: 'Day-27', breakfast: 'Beetroot Uttapam(280kcal)', lunch: 'Mushroom Stir-fry with Brown Rice(350kcal)', snacks: 'Cherry Tomatoes with Cottage Cheese(120kcal)', dinner: 'Chickpea Salad(300kcal)', totalCalorieIntake: '1050kcal' },
  { day: 'Day-28', breakfast: 'Millet Dosa with Tomato Chutney(270kcal)', lunch: 'Cauliflower Curry with Roti(350kcal)', snacks: 'Greek Yogurt with Berries(120kcal)', dinner: 'Baked Vegetable Casserole(350kcal)', totalCalorieIntake: '1090kcal' },
  { day: 'Day-29', breakfast: 'Vegetable Upma(250kcal)', lunch: 'Brown Rice(270kcal), Cucumber Raita(100kcal)', snacks: 'Roasted Chickpeas(120kcal)', dinner: 'Moong Dal Khichdi(300kcal)', totalCalorieIntake: '1040kcal' },
  { day: 'Day-30', breakfast: 'Oats Idli(200kcal)', lunch: 'Quinoa Pulao(350kcal), Mixed Vegetable Curry(150kcal)', snacks: 'Greek Yogurt with Berries(120kcal)', dinner: 'Grilled Fish with Stir-fried Vegetables(300kcal)', totalCalorieIntake: '1120kcal' }
];

//under weight

const weightGainExerciseDayWisePlan = [
  { day: "Day1", exercise: "Weightlifting focusing on compound exercises (60 mins)" },
  { day: "Day2", exercise: "Yoga or stretching (30 mins)" },
  { day: "Day3", exercise: "Bodyweight exercises (45 mins)" },
  { day: "Day4", exercise: "Low-intensity cardio like walking or cycling (45 mins)" },
  { day: "Day5", exercise: "Rest day" },
  { day: "Day6", exercise: "Weightlifting focusing on compound exercises (60 mins)" },
  { day: "Day7", exercise: "Meditation (40 mins)" },
  { day: "Day8", exercise: "Yoga or stretching (30 mins)" },
  { day: "Day9", exercise: "Bodyweight exercises (45 mins)" },
  { day: "Day10", exercise: "Low-intensity cardio like walking or cycling (45 mins)" },
  { day: "Day11", exercise: "Rest day" },
  { day: "Day12", exercise: "Weightlifting focusing on compound exercises (60 mins)" },
  { day: "Day13", exercise: "Yoga or stretching (30 mins)" },
  { day: "Day14", exercise: "Bodyweight exercises (45 mins)" },
  { day: "Day15", exercise: "Low-intensity cardio like walking or cycling (45 mins)" },
  { day: "Day16", exercise: "Rest day" },
  { day: "Day17", exercise: "Weightlifting focusing on compound exercises (60 mins)" },
  { day: "Day18", exercise: "Meditation (40 mins)" },
  { day: "Day19", exercise: "Yoga or stretching (30 mins)" },
  { day: "Day20", exercise: "Bodyweight exercises (45 mins)" },
  { day: "Day21", exercise: "Low-intensity cardio like walking or cycling (45 mins)" },
  { day: "Day22", exercise: "Rest day" },
  { day: "Day23", exercise: "Weightlifting focusing on compound exercises (60 mins)" },
  { day: "Day24", exercise: "Yoga or stretching (30 mins)" },
  { day: "Day25", exercise: "Bodyweight exercises (45 mins)" },
  { day: "Day26", exercise: "Low-intensity cardio like walking or cycling (45 mins)" },
  { day: "Day27", exercise: "Rest day" },
  { day: "Day28", exercise: "Yoga or stretching (30 mins)" },
  { day: "Day29", exercise: "Bodyweight exercises (45 mins)" },
  { day: "Day30", exercise: "Low-intensity cardio like walking or cycling (45 mins)" }
];

const weightGainMealplan = [
  { day: 'Day-1', breakfast: 'Masala Dosa(275kcal), Coconut Chutney(80kcal)', lunch: 'Lemon Rice(300kcal), Cucumber Raita(100kcal)', snacks: 'Banana Smoothie(150kcal)', dinner: 'Chicken Biryani(400kcal)', totalCalorieIntake: '1305kcal' },
  { day: 'Day-2', breakfast: 'Upma(250kcal), Mint Chutney(70kcal)', lunch: 'Mixed Vegetable Curry(350kcal), Roti(100kcal)', snacks: 'Almonds(100kcal)', dinner: 'Vegetable Pulao(380kcal)', totalCalorieIntake: '1250kcal' },
  { day: 'Day-3', breakfast: 'Pongal(280kcal), Tomato Chutney(60kcal)', lunch: 'Paneer Tikka Masala(400kcal), Jeera Rice(200kcal)', snacks: 'Greek Yogurt with Honey(150kcal)', dinner: 'Fish Curry with Steamed Rice(450kcal)', totalCalorieIntake: '1740kcal' },
  { day: 'Day-4', breakfast: 'Adai(300kcal), Coconut Chutney(80kcal)', lunch: 'Egg Curry(350kcal), Mutter Pulao(250kcal)', snacks: 'Apple Slices with Peanut Butter(150kcal)', dinner: 'Mushroom Biryani(400kcal)', totalCalorieIntake: '1780kcal' },
  { day: 'Day-5', breakfast: 'Ragi Idiyappam(280kcal), Tomato Chutney(60kcal)', lunch: 'Vegetable Biryani(350kcal), Boondi Raita(100kcal)', snacks: 'Carrot Sticks with Hummus(150kcal)', dinner: 'Chicken Korma with Paratha(450kcal)', totalCalorieIntake: '1390kcal' },
  { day: 'Day-6', breakfast: 'Rava Upma(250kcal), Mint Chutney(70kcal)', lunch: 'Aloo Gobi Masala(300kcal), Roti(100kcal)', snacks: 'Mixed Berries Bowl(100kcal)', dinner: 'Palak Paneer with Jeera Rice(400kcal)', totalCalorieIntake: '1220kcal' },
  { day: 'Day-7', breakfast: 'Semiya Upma(270kcal), Coconut Chutney(80kcal)', lunch: 'Chicken Curry with Steamed Rice(400kcal)', snacks: 'Walnuts(100kcal)', dinner: 'Egg Fried Rice(380kcal)', totalCalorieIntake: '1230kcal' },
  { day: 'Day-8', breakfast: 'Pesarattu(300kcal), Ginger Chutney(70kcal)', lunch: 'Mixed Dal Tadka(350kcal), Quinoa Pulao(250kcal)', snacks: 'Cucumber Slices with Hummus(100kcal)', dinner: 'Fish Curry with Brown Rice(450kcal)', totalCalorieIntake: '1520kcal' },
  { day: 'Day-9', breakfast: 'Set Dosa(280kcal), Onion Tomato Chutney(60kcal)', lunch: 'Mushroom Masala(300kcal), Roti(100kcal)', snacks: 'Greek Yogurt with Almonds(150kcal)', dinner: 'Vegetable Fried Rice(400kcal)', totalCalorieIntake: '1290kcal' },
  { day: 'Day-10', breakfast: 'Aval Upma(250kcal), Coconut Chutney(80kcal)', lunch: 'Paneer Butter Masala(400kcal), Jeera Rice(200kcal)', snacks: 'Apple Slices with Peanut Butter(150kcal)', dinner: 'Chicken Pulao(380kcal)', totalCalorieIntake: '1460kcal' },
  { day: 'Day-11', breakfast: 'Idiyappam(270kcal), Tomato Kurma(100kcal)', lunch: 'Chana Masala(350kcal), Roti(100kcal)', snacks: 'Carrot Sticks with Hummus(150kcal)', dinner: 'Egg Curry with Steamed Rice(400kcal)', totalCalorieIntake: '1370kcal' },
  { day: 'Day-12', breakfast: 'Ven Pongal(300kcal), Coconut Chutney(80kcal)', lunch: 'Dal Makhani(350kcal), Tandoori Roti(150kcal)', snacks: 'Mixed Berries Bowl(100kcal)', dinner: 'Chicken Biryani(450kcal)', totalCalorieIntake: '1580kcal' },
  { day: 'Day-13', breakfast: 'Ragi Puttu(280kcal), Kadala Curry(150kcal)', lunch: 'Fish Curry with Steamed Rice(400kcal)', snacks: 'Walnuts(100kcal)', dinner: 'Vegetable Pulao(380kcal)', totalCalorieIntake: '1310kcal' },
  { day: 'Day-14', breakfast: 'Rava Kichadi(270kcal), Tomato Chutney(60kcal)', lunch: 'Aloo Gobi Masala(300kcal), Roti(100kcal)', snacks: 'Greek Yogurt with Almonds(150kcal)', dinner: 'Mushroom Fried Rice(400kcal)', totalCalorieIntake: '1280kcal' },
  { day: 'Day-15', breakfast: 'Adai Avial(300kcal), Coconut Chutney(80kcal)', lunch: 'Chicken Curry with Biriyani(400kcal)', snacks: 'Banana Smoothie(150kcal)', dinner: 'Vegetable Pulao(380kcal)', totalCalorieIntake: '1310kcal' },
  { day: 'Day-16', breakfast: 'Paniyaram(270kcal), Onion Chutney(70kcal)', lunch: 'Dal Fry(350kcal), Jeera Rice(200kcal)', snacks: 'Almonds(100kcal)', dinner: 'Fish Curry with Roti(400kcal)', totalCalorieIntake: '1400kcal' },
  { day: 'Day-17', breakfast: 'Egg Dosa(300kcal), Coconut Chutney(80kcal)', lunch: 'Mushroom Masala(300kcal), Roti(100kcal)', snacks: 'Carrot Sticks with Hummus(150kcal)', dinner: 'Paneer Pulao(380kcal)', totalCalorieIntake: '1310kcal' },
  { day: 'Day-18', breakfast: 'Ragi Rava Upma(280kcal), Tomato Chutney(60kcal)', lunch: 'Chana Masala(350kcal), Roti(100kcal)', snacks: 'Mixed Berries Bowl(100kcal)', dinner: 'Chicken Biryani(450kcal)', totalCalorieIntake: '1340kcal' },
  { day: 'Day-19', breakfast: 'Ven Pongal(300kcal), Coconut Chutney(80kcal)', lunch: 'Fish Curry with Roti(400kcal)', snacks: 'Greek Yogurt with Almonds(150kcal)', dinner: 'Vegetable Pulao(380kcal)', totalCalorieIntake: '1310kcal' },
  { day: 'Day-20', breakfast: 'Aval Upma(250kcal), Mint Chutney(70kcal)', lunch: 'Paneer Butter Masala(400kcal), Jeera Rice(200kcal)', snacks: 'Apple Slices with Peanut Butter(150kcal)', dinner: 'Chicken Pulao(380kcal)', totalCalorieIntake: '1380kcal' },
  { day: 'Day-21', breakfast: 'Idiyappam(270kcal), Vegetable Stew(150kcal)', lunch: 'Mixed Dal Tadka(350kcal), Quinoa Pulao(250kcal)', snacks: 'Carrot Sticks with Hummus(150kcal)', dinner: 'Fish Curry with Steamed Rice(450kcal)', totalCalorieIntake: '1420kcal' },
  { day: 'Day-22', breakfast: 'Rawa Kichadi(270kcal), Coconut Chutney(80kcal)', lunch: 'Aloo Gobi Masala(300kcal), Roti(100kcal)', snacks: 'Mixed Berries Bowl(100kcal)', dinner: 'Mushroom Fried Rice(400kcal)', totalCalorieIntake: '1250kcal'},
  { day: 'Day-23', breakfast: 'Adai Avial(300kcal), Onion Chutney(70kcal)', lunch: 'Chicken Curry with Biriyani(400kcal)', snacks: 'Banana Smoothie(150kcal)', dinner: 'Vegetable Pulao(380kcal)', totalCalorieIntake: '1310kcal' },
  { day: 'Day-24', breakfast: 'Paniyaram(270kcal), Tomato Chutney(60kcal)', lunch: 'Mixed Vegetable Curry(350kcal), Roti(100kcal)', snacks: 'Almonds(100kcal)', dinner: 'Fish Curry with Steamed Rice(450kcal)', totalCalorieIntake: '1380kcal' },
  { day: 'Day-25', breakfast: 'Egg Dosa(300kcal), Coconut Chutney(80kcal)', lunch: 'Paneer Butter Masala(400kcal), Jeera Rice(200kcal)', snacks: 'Apple Slices with Peanut Butter(150kcal)', dinner: 'Chicken Pulao(380kcal)', totalCalorieIntake: '1320kcal' },
  { day: 'Day-26', breakfast: 'Ven Pongal(300kcal), Mint Chutney(70kcal)', lunch: 'Chicken Curry with Roti(400kcal)', snacks: 'Greek Yogurt with Almonds(150kcal)', dinner: 'Veg Pulao(380kcal)', totalCalorieIntake: '1300kcal' },
  { day: 'Day-27', breakfast: 'Rawa Kichadi(270kcal), Coconut Chutney(80kcal)', lunch: 'Fish Curry with Steamed Rice(400kcal)', snacks: 'Walnuts(100kcal)', dinner: 'Mushroom Fried Rice(400kcal)', totalCalorieIntake: '1250kcal' },
  { day: 'Day-28', breakfast: 'Adai Avial(300kcal), Onion Chutney(70kcal)', lunch: 'Egg Curry with Biriyani(400kcal)', snacks: 'Banana Smoothie(150kcal)', dinner: 'Chana Masala with Roti(380kcal)', totalCalorieIntake: '1300kcal' },
  { day: 'Day-29', breakfast: 'Paniyaram(270kcal), Tomato Chutney(60kcal)', lunch: 'Paneer Butter Masala(400kcal), Jeera Rice(200kcal)', snacks: 'Almonds(100kcal)', dinner: 'Fish Curry with Steamed Rice(450kcal)', totalCalorieIntake: '1380kcal' },
  { day: 'Day-30', breakfast: 'Egg Dosa(300kcal), Coconut Chutney(80kcal)', lunch: 'Mushroom Masala with Roti(400kcal)', snacks: 'Greek Yogurt with Almonds(150kcal)', dinner: 'Chicken Biryani(450kcal)', totalCalorieIntake: '1380kcal' }
];

//obesity
const weightLossExercisenDayWisePlanforObesity = [
  { day: 'Day 1', exercise: 'Strength Training (60 mins)' },
  { day: 'Day 2', exercise: 'Cardio Workout (45 mins)' },
  { day: 'Day 3', exercise: 'Bodyweight Exercises (40 mins)' },
  { day: 'Day 4', exercise: 'Walking or Jogging (45 mins)' },
  { day: 'Day 5', exercise: 'HIIT Workout (30 mins)' },
  { day: 'Day 6', exercise: 'Yoga for Weight Loss (60 mins)' },
  { day: 'Day 7', exercise: 'Rest Day' },
  { day: 'Day 8', exercise: 'Strength Training (60 mins)' },
  { day: 'Day 9', exercise: 'Cardio Workout (45 mins)' },
  { day: 'Day 10', exercise: 'Bodyweight Exercises (40 mins)' },
  { day: 'Day 11', exercise: 'Walking or Jogging (45 mins)' },
  { day: 'Day 12', exercise: 'HIIT Workout (30 mins)' },
  { day: 'Day 13', exercise: 'Yoga for Weight Loss (60 mins)' },
  { day: 'Day 14', exercise: 'Rest Day' },
  { day: 'Day 15', exercise: 'Strength Training (60 mins)' },
  { day: 'Day 16', exercise: 'Cardio Workout (45 mins)' },
  { day: 'Day 17', exercise: 'Bodyweight Exercises (40 mins)' },
  { day: 'Day 18', exercise: 'Walking or Jogging (45 mins)' },
  { day: 'Day 19', exercise: 'HIIT Workout (30 mins)' },
  { day: 'Day 20', exercise: 'Yoga for Weight Loss (60 mins)' },
  { day: 'Day 21', exercise: 'Rest Day' },
  { day: 'Day 22', exercise: 'Strength Training (60 mins)' },
  { day: 'Day 23', exercise: 'Cardio Workout (45 mins)' },
  { day: 'Day 24', exercise: 'Bodyweight Exercises (40 mins)' },
  { day: 'Day 25', exercise: 'Walking or Jogging (45 mins)' },
  { day: 'Day 26', exercise: 'HIIT Workout (30 mins)' },
  { day: 'Day 27', exercise: 'Yoga for Weight Loss (60 mins)' },
  { day: 'Day 28', exercise: 'Rest Day' },
  { day: 'Day 29', exercise: 'Strength Training (60 mins)' },
  { day: 'Day 30', exercise: 'Cardio Workout (45 mins)' },
];

const weightLossMealPlanforObesity = [
  { day: 'Day-1', breakfast: 'Oats Upma(250kcal)', lunch: 'Quinoa Salad(350kcal)', snacks: 'Mixed Nuts(150kcal)', dinner: 'Grilled Fish with Steamed Vegetables(400kcal)', totalCalories: '1150kcal' },
  { day: 'Day-2', breakfast: 'Ragi Dosa(200kcal)', lunch: 'Grilled Chicken with Brown Rice(450kcal)', snacks: 'Greek Yogurt with Berries(200kcal)', dinner: 'Vegetable Stir Fry with Tofu(350kcal)', totalCalories: '1200kcal' },
  { day: 'Day-3', breakfast: 'Quinoa Upma(300kcal)', lunch: 'Spinach Dal with Chapati(350kcal)', snacks: 'Apple Slices with Almond Butter(150kcal)', dinner: 'Egg Curry with Cauliflower Rice(400kcal)', totalCalories: '1200kcal' },
  { day: 'Day-4', breakfast: 'Moong Dal Dosa(250kcal)', lunch: 'Chickpea Salad with Avocado(400kcal)', snacks: 'Carrot Sticks with Hummus(100kcal)', dinner: 'Grilled Salmon with Quinoa(450kcal)', totalCalories: '1200kcal' },
  { day: 'Day-5', breakfast: 'Pesarattu(200kcal)', lunch: 'Turkey Wrap with Whole Wheat Bread(350kcal)', snacks: 'Cottage Cheese with Pineapple(150kcal)', dinner: 'Vegetable Biryani(400kcal)', totalCalories: '1100kcal' },
  { day: 'Day-6', breakfast: 'Sprouts Salad(250kcal)', lunch: 'Mushroom Soup with Whole Grain Crackers(300kcal)', snacks: 'Rice Cake with Avocado(150kcal)', dinner: 'Tandoori Chicken with Quinoa(450kcal)', totalCalories: '1150kcal' },
  { day: 'Day-7', breakfast: 'Ragi Idli with Chutney(300kcal)', lunch: 'Vegetable Stir Fry with Brown Rice(400kcal)', snacks: 'Greek Yogurt with Granola(200kcal)', dinner: 'Grilled Shrimp with Steamed Broccoli(350kcal)', totalCalories: '1250kcal' },
  { day: 'Day-8', breakfast: 'Oats Uttapam(250kcal)', lunch: 'Lentil Soup with Whole Wheat Bread(350kcal)', snacks: 'Mixed Berries Smoothie(200kcal)', dinner: 'Tofu Curry with Quinoa(400kcal)', totalCalories: '1200kcal' },
  { day: 'Day-9', breakfast: 'Millet Porridge with Nuts(300kcal)', lunch: 'Grilled Tofu Salad(400kcal)', snacks: 'Boiled Egg with Green Tea(150kcal)', dinner: 'Stir-Fried Vegetables with Brown Rice(350kcal)', totalCalories: '1200kcal' },
  { day: 'Day-10', breakfast: 'Cauliflower Upma(250kcal)', lunch: 'Chickpea Curry with Whole Wheat Chapati(400kcal)', snacks: 'Strawberry Banana Smoothie(200kcal)', dinner: 'Grilled Fish with Asparagus(400kcal)', totalCalories: '1250kcal' },
  { day: 'Day-11', breakfast: 'Rajma Paratha(300kcal)', lunch: 'Vegetable Quinoa Bowl(450kcal)', snacks: 'Carrot Sticks with Hummus(100kcal)', dinner: 'Eggplant Curry with Brown Rice(400kcal)', totalCalories: '1250kcal' },
  { day: 'Day-12', breakfast: 'Beetroot Poha(250kcal)', lunch: 'Tofu Stir Fry with Quinoa(400kcal)', snacks: 'Greek Yogurt with Berries(200kcal)', dinner: 'Grilled Chicken with Sweet Potatoes(450kcal)', totalCalories: '1300kcal' },
  { day: 'Day-13', breakfast: 'Mixed Vegetable Paratha(300kcal)', lunch: 'Lentil Salad with Avocado(400kcal)', snacks: 'Almonds and Dates(150kcal)', dinner: 'Stir-Fried Tofu with Brown Rice(350kcal)', totalCalories: '1200kcal' },
  { day: 'Day-14', breakfast: 'Moong Dal Dosa(250kcal)', lunch: 'Spinach Tofu Curry with Quinoa(450kcal)', snacks: 'Cottage Cheese with Berries(200kcal)', dinner: 'Grilled Fish with Steamed Vegetables(400kcal)', totalCalories: '1300kcal' },
  { day: 'Day-15', breakfast: 'Oats Upma(250kcal)', lunch: 'Chickpea Wrap with Mixed Salad(350kcal)', snacks: 'Walnuts and Apple Slices(200kcal)', dinner: 'Tandoori Tofu with Quinoa(450kcal)', totalCalories: '1250kcal' },
  { day: 'Day-16', breakfast: 'Ragi Dosa with Chutney(300kcal)', lunch: 'Vegetable Stir Fry with Brown Rice(400kcal)', snacks: 'Greek Yogurt with Almonds(200kcal)', dinner: 'Grilled Chicken with Asparagus(450kcal)', totalCalories: '1350kcal' },
  { day: 'Day-17', breakfast: 'Quinoa Porridge with Berries(250kcal)', lunch: 'Dal Tadka with Whole Wheat Chapati(400kcal)', snacks: 'Carrot Sticks with Hummus(100kcal)', dinner: 'Grilled Salmon with Quinoa Salad(450kcal)', totalCalories: '1200kcal' },
  { day: 'Day-18', breakfast: 'Sprouts Salad(250kcal)', lunch: 'Tofu Curry with Brown Rice(400kcal)', snacks: 'Mixed Berries Smoothie(200kcal)', dinner: 'Vegetable Biryani(450kcal)', totalCalories: '1300kcal' },
  { day: 'Day-19', breakfast: 'Ragi Idli with Sambhar(300kcal)', lunch: 'Chickpea Salad with Avocado(400kcal)', snacks: 'Greek Yogurt with Granola(200kcal)', dinner: 'Egg Curry with Cauliflower Rice(450kcal)', totalCalories: '1350kcal' },
  { day: 'Day-20', breakfast: 'Moong Dal Chilla(250kcal)', lunch: 'Tofu Stir Fry with Quinoa(400kcal)', snacks: 'Boiled Egg with Green Tea(100kcal)', dinner: 'Stir-Fried Vegetables with Brown Rice(350kcal)', totalCalories: '1100kcal' },
  { day: 'Day-21', breakfast: 'Cauliflower Upma(250kcal)', lunch: 'Lentil Soup with Whole Wheat Bread(350kcal)', snacks: 'Walnuts and Apple Slices(200kcal)', dinner: 'Grilled Fish with Quinoa Salad(450kcal)', totalCalories: '1250kcal' },
  { day: 'Day-22', breakfast: 'Millet Porridge with Nuts(300kcal)', lunch: 'Mushroom Stir Fry with Brown Rice(400kcal)', snacks: 'Mixed Berries Smoothie(200kcal)', dinner: 'Grilled Tofu with Steamed Broccoli(450kcal)', totalCalories: '1350kcal' },
  { day: 'Day-23', breakfast: 'Rajma Paratha(300kcal)', lunch: 'Vegetable Quinoa Bowl(450kcal)', snacks: 'Almonds and Dates(150kcal)', dinner: 'Eggplant Curry with Brown Rice(400kcal)', totalCalories: '1300kcal' },
  { day: 'Day-24', breakfast: 'Beetroot Poha(250kcal)', lunch: 'Grilled Tofu Salad(400kcal)', snacks: 'Apple Slices with Almond Butter(150kcal)', dinner: 'Tandoori Chicken with Quinoa(450kcal)', totalCalories: '1250kcal' },
  { day: 'Day-25', breakfast: 'Mixed Vegetable Paratha(300kcal)', lunch: 'Chickpea Wrap with Mixed Salad(400kcal)', snacks: 'Greek Yogurt with Berries(200kcal)', dinner: 'Grilled Fish with Steamed Vegetables(450kcal)', totalCalories: '1350kcal' },
  { day: 'Day-26', breakfast: 'Oats Upma(250kcal)', lunch: 'Spinach Tofu Curry with Quinoa(450kcal)', snacks: 'Cottage Cheese with Pineapple(150kcal)', dinner: 'Vegetable Stir Fry with Brown Rice(400kcal)', totalCalories: '1250kcal' },
  {
    day: "Day-28",
    breakfast: "Quinoa Porridge with Berries (250kcal)",
    lunch: "Tofu Stir Fry with Brown Rice (400kcal)",
    snacks: "Greek Yogurt with Almonds (200kcal)",
    dinner: "Egg Curry with Cauliflower Rice (450kcal)",
    totalCalories: "1300kcal"
  },
  {
    day: "Day-29",
    breakfast: "Sprouts Salad (250kcal)",
    lunch: "Chickpea Salad with Avocado (400kcal)",
    snacks: "Boiled Egg with Green Tea (100kcal)",
    dinner: "Stir-Fried Tofu with Brown Rice (400kcal)",
    totalCalories: "1150kcal"
  },
  {
    day: "Day-30",
    breakfast: "Ragi Idli with Sambhar (300kcal)",
    lunch: "Vegetable Quinoa Bowl (450kcal)",
    snacks: "Cottage Cheese with Berries (200kcal)",
    dinner: "Grilled Salmon with Quinoa (450kcal)",
    totalCalories: "1400kcal"
  }
];

//normal weight
const ExercisePlanFornormalweight= [
  { day: 1, exercise: 'Strength training (60 mins)' },
  { day: 2, exercise: 'Yoga or Pilates (45 mins)' },
  { day: 3, exercise: 'Cardio workout - HIIT (30 mins)' },
  { day: 4, exercise: 'Bodyweight exercises (45 mins)' },
  { day: 5, exercise: 'Rest day' },
  { day: 6, exercise: 'Cycling or spinning class (60 mins)' },
  { day: 7, exercise: 'Outdoor hike (1-2 hours)' },
  { day: 8, exercise: 'Strength training (60 mins)' },
  { day: 9, exercise: 'Yoga or Pilates (45 mins)' },
  { day: 10, exercise: 'Cardio workout - Zumba or dance (30 mins)' },
  { day: 12, exercise: 'Bodyweight exercises (45 mins)' },
  { day: 12, exercise: 'Rest day' },
  { day: 13, exercise: 'Swimming or water aerobics (40 mins)' },
  { day: 14, exercise: 'Outdoor sports like tennis or basketball' },
  { day: 15, exercise: 'Strength training (60 mins)' },
  { day: 16, exercise: 'Yoga or Pilates (45 mins)' },
  { day: 17, exercise: 'Cardio workout - Running or jogging (30 mins)' },
  { day: 18, exercise: 'Bodyweight exercises (45 mins)' },
  { day: 19, exercise: 'Rest day' },
  { day: 20, exercise: 'Cycling or spinning class (60 mins)' },
  { day: 21, exercise: 'Hiking or nature walk (1-2 hours)' },
  { day: 22, exercise: 'Strength training (60 mins)' },
  { day: 23, exercise: 'Yoga or Pilates (45 mins)' },
  { day: 24, exercise: 'Cardio workout - Kickboxing or martial arts (30 mins)' },
  { day: 25, exercise: 'Bodyweight exercises (45 mins)' },
  { day: 26, exercise: 'Rest day' },
  { day: 27, exercise: 'Swimming or water aerobics (40 mins)' },
  { day: 28, exercise: 'Outdoor sports like frisbee or volleyball' },
  { day: 29, exercise: 'Strength training (60 mins)' },
  { day: 30, exercise: 'Yoga or meditation (45 mins)' },
];

const mealPlanForNormalWeight = [
  { day: 'Day-1', breakfast: 'Rava Idli (215 kcal)', lunch: 'Mixed Veg Rice (350 kcal), Cucumber Raita (70 kcal)', snacks: 'Masala Pori (100 kcal), Amaranth Ladoo (80 kcal)', dinner: 'Dosa with Chutney (300 kcal)', totalCalorieIntake: '1115 kcal' },
  { day: 'Day-2', breakfast: 'Oats Upma (250 kcal)', lunch: 'Quinoa Sambar Sadam (380 kcal)', snacks: 'Fruit Chaat (120 kcal)', dinner: 'Millet Dosa (275 kcal)', totalCalorieIntake: '1025 kcal' },
  { day: 'Day-3', breakfast: 'Pesarattu (200 kcal)', lunch: 'Cabbage Rice (320 kcal), Yogurt (100 kcal)', snacks: 'Sprout Salad (80 kcal)', dinner: 'Roti with Veg Curry (350 kcal)', totalCalorieIntake: '1050 kcal' },
  { day: 'Day-4', breakfast: 'Semiya Upma (220 kcal)', lunch: 'Beetroot Rice (350 kcal), Carrot Salad (70 kcal)', snacks: 'Roasted Makhana (90 kcal)', dinner: 'Ragi Dosa (280 kcal)', totalCalorieIntake: '1010 kcal' },
  { day: 'Day-5', breakfast: 'Moong Dal Dosa (245 kcal)', lunch: 'Brown Rice with Dal (380 kcal)', snacks: 'Coconut Chia Pudding (120 kcal)', dinner: 'Vegetable Quinoa Pulao (300 kcal)', totalCalorieIntake: '1045 kcal' },
  { day: 'Day-6', breakfast: 'Veggie Poha (230 kcal)', lunch: 'Palak Paneer with Quinoa (360 kcal)', snacks: 'Roasted Paneer Tikka (100 kcal)', dinner: 'Millet Upma (275 kcal)', totalCalorieIntake: '965 kcal' },
  { day: 'Day-7', breakfast: 'Brown Rice Dosa (280 kcal)', lunch: 'Masala Khichdi (350 kcal), Boondi Raita (80 kcal)', snacks: 'Fruit Salad (110 kcal)', dinner: 'Vegetable Oats Porridge (290 kcal)', totalCalorieIntake: '1110 kcal' },
  { day: 'Day-8', breakfast: 'Ragi Idli (220 kcal)', lunch: 'Soybean Pulao (360 kcal)', snacks: 'Almond Trail Mix (90 kcal)', dinner: 'Cauliflower Rice Biryani (320 kcal)', totalCalorieIntake: '990 kcal' },
  { day: 'Day-9', breakfast: 'Quinoa Pongal (240 kcal)', lunch: 'Vegetable Lentil Soup (350 kcal), Cucumber Salad (60 kcal)', snacks: 'Banana Walnut Smoothie (130 kcal)', dinner: 'Mushroom Brown Rice (290 kcal)', totalCalorieIntake: '1070 kcal' },
  { day: 'Day-10', breakfast: 'Broken Wheat Upma (230 kcal)', lunch: 'Chickpea Spinach Curry with Rice (380 kcal)', snacks: 'Chia Seed Pudding (100 kcal)', dinner: 'Tomato Quinoa (300 kcal)', totalCalorieIntake: '1010 kcal' },
  { day: 'Day-11', breakfast: 'Besan Chilla (250 kcal)', lunch: 'Veg Biryani (360 kcal), Mixed Veg Raita (100 kcal)', snacks: 'Makhana Salad (80 kcal)', dinner: 'Masoor Dal with Roti (320 kcal)', totalCalorieIntake: '1110 kcal' },
  { day: 'Day-12', breakfast: 'Amaranth Porridge (210 kcal)', lunch: 'Tofu Stir-Fry with Quinoa (350 kcal)', snacks: 'Herb Roasted Almonds (90 kcal)', dinner: 'Millet Khichdi (290 kcal)', totalCalorieIntake: '940 kcal' },
  { day: 'Day-13', breakfast: 'Moong Dal Chilla (240 kcal)', lunch: 'Fenugreek Rice with Dal (370 kcal)', snacks: 'Apple Slices with Peanut Butter (110 kcal)', dinner: 'Vegetable Barley Soup (280 kcal)', totalCalorieIntake: '1000 kcal' },
  { day: 'Day-14', breakfast: 'Sabudana Khichdi (260 kcal)', lunch: 'Spinach Lentil Curry with Rice (380 kcal)', snacks: 'Cucumber Coins with Hummus (80 kcal)', dinner: 'Cabbage Quinoa Pilaf (310 kcal)', totalCalorieIntake: '1030 kcal' },
  { day: 'Day-15', breakfast: 'Palak Paneer Dosa (270 kcal)', lunch: 'Carrot Rice (350 kcal), Boondi Raita (70 kcal)', snacks: 'Banana Oat Cookies (90 kcal)', dinner: 'Millet Veggie Upma (300 kcal)', totalCalorieIntake: '1080 kcal' },
  { day: 'Day-16', breakfast: 'Jowar Upma (220 kcal)', lunch: 'Black Chickpea Curry with Brown Rice (370 kcal)', snacks: 'Roasted Foxnuts (80 kcal)', dinner: 'Vegetable Buckwheat Pancakes (310 kcal)', totalCalorieIntake: '980 kcal' },
  { day: "Day-17", breakfast: "Ragi Rava Dosa (250 kcal)", lunch: "Masoor Dal with Quinoa (360 kcal)", snacks: "Cottage Cheese Stuffed Bell Peppers (100 kcal)", dinner: "Cauliflower Fried Rice (290 kcal)", totalCalorieIntake: "1000 kcal" },
  { day: "Day-18", breakfast: "Sprouts Salad (220 kcal)", lunch: "Vegetable Bisi Bele Bath (350 kcal), Curd Rice (100 kcal)", snacks: "Date Nut Balls (90 kcal)", dinner: "Spinach Millet Porridge (280 kcal)", totalCalorieIntake: "1040 kcal" },
  { day: "Day-19", breakfast: "Ragi Semiya Upma (240 kcal)", lunch: "Methi Rice with Dal (370 kcal)", snacks: "Cherry Tomato Mozzarella Skewers (80 kcal)", dinner: "Quinoa Veg Pulao (320 kcal)", totalCalorieIntake: "1010 kcal" },
  { day: "Day-20", breakfast: "Veggie Oats Pongal (260 kcal)", lunch: "Spicy Tofu Rice (380 kcal)", snacks: "Nuts and Seeds Trail Mix (110 kcal)", dinner: "Broccoli Moong Dal Curry with Roti (290 kcal)", totalCalorieIntake: "1040 kcal" },
  { day: "Day-21", breakfast: "Mixed Sprouts Dosa (270 kcal)", lunch: "Green Beans Masala Rice (360 kcal), Cucumber Salad (70 kcal)", snacks: "Grilled Paneer Cubes (100 kcal)", dinner: "Millet Vegetable Biryani (320 kcal)", totalCalorieIntake: "1120 kcal" },
  { day: "Day-22", breakfast: "Tomato Uttapam (240 kcal)", lunch: "Vegetable Pulao (370 kcal)", snacks: "Fruity Yogurt Parfait (90 kcal)", dinner: "Palak Dal with Roti (300 kcal)", totalCalorieIntake: "1000 kcal" },
  { day: "Day-23", breakfast: "Avocado Toast (250 kcal)", lunch: "Lemon Rice with Roasted Peanuts (380 kcal)", snacks: "Kale Chips (80 kcal)", dinner: "Spicy Tofu Stir-Fry with Quinoa (310 kcal)", totalCalorieIntake: "1020 kcal" },
  { day: "Day-24", breakfast: "Beetroot Poha (230 kcal)", lunch: "Mix Veg Khichdi (370 kcal), Mint Raita (70 kcal)", snacks: "Apple Slices with Almond Butter (100 kcal)", dinner: "Cabbage Capsicum Sabzi with Roti (290 kcal)", totalCalorieIntake: "1060 kcal" },
  { day: "Day-25", breakfast: "Curd Oats (260 kcal)", lunch: "Sweet Potato Curry with Brown Rice (380 kcal)", snacks: "Chia Stuffed Dates (90 kcal)", dinner: "Broccoli Paneer Tikka Masala (310 kcal)", totalCalorieIntake: "1040 kcal" },
  { day: "Day-26", breakfast: "Semolina Pancakes (270 kcal)", lunch: "Bitter Gourd Rice (350 kcal), Boiled Egg (70 kcal)", snacks: "Carrot Cucumber Sticks with Hummus (80 kcal)", dinner: "Lentil Spinach Soup with Quinoa (290 kcal)", totalCalorieIntake: "1060 kcal" },
  { day: "Day-27", breakfast: "Capsicum Omelette (240 kcal)", lunch: "Masala Rice with Yogurt (370 kcal)", snacks: "Trail Mix Popcorn (100 kcal)", dinner: "Spaghetti Squash Pad Thai (320 kcal)", totalCalorieIntake: "1030 kcal" },
  { day: "Day-28", breakfast: "Buckwheat Porridge (250 kcal)", lunch: "Spinach Dal with Brown Rice (380 kcal), Cucumber Raita (70 kcal)", snacks: "Greek Yogurt with Honey (90 kcal)", dinner: "Masala Oats (300 kcal)", totalCalorieIntake: "1090 kcal" },
  { day: "Day-29", breakfast: "Quinoa Pancakes (260 kcal)", lunch: "Rajma Chawal (370 kcal)", snacks: "Guacamole with Veggie Sticks (100 kcal)", dinner: "Sesame Cauliflower Rice (310 kcal)", totalCalorieIntake: "1040 kcal" },
  { day: "Day-30", breakfast: "Egg White Scramble (270 kcal)", lunch: "Chana Masala with Roti (380 kcal)", snacks: "Cottage Cheese Rice Cakes (90 kcal)", dinner: "Mixed Vegetable Quinoa Upma (320 kcal)", totalCalorieIntake: "1060 kcal" },
];
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24  bg-slate-50 ">
        <div className="flex-row justify-center   shadow-md  bg-white rounded-xl" >
        <div className="container mx-auto p-8 flex-col  text-center ">
              <h1 className="text-3xl font-bold mb-4">BMI Calculator for South Indian Body Type</h1>
              <label htmlFor="weight">Weight (kg): </label>
              <input type="number" id="weight" name="weight" min="1"  className="border-2 border-gray-200 rounded-md h-9"  onChange={(e)=>setWeight((e.target.value))}/>
              {/* {weight ==="" && <p className="text-red-500 ">{require}</p>} */}
            <br/><br/>
              <label htmlFor="height">Height: </label>
              <input type="number" id="height" name="height" min="1"   className="border-2  border-gray-200 rounded-md h-9"   onChange={(e)=>setHeight((e.target.value))} />
              {/* {height==="" && <p className="text-red-500">{require}</p>} */}
              <br/><br/>
              <label htmlFor="age">Age: </label>
              <input type="number" id="age" name="age" min="1" max="120"  className="border-2   border-gray-200 rounded-md h-9"  />
              <br />
              <div className="flex gap-5 mt-4 justify-center">
              <label><input type="radio" name="units" value="meters"  onChange={(e)=>setMeters((e.target.value))}/> Meters</label>
              <label><input type="radio" name="units" value="inches" onChange={(e)=>setInches((e.target.value))}/> Inches</label>
              </div>

              {error && <p className="text-red-500 mt-3">{error}</p>}
              <div className="text-center mt-4">
              <button  className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded" onClick={onCalculateBmi}>Calculate BMI</button>
              {bmi === null ? 
    <p></p> : 
    <p className="mt-4">Your BMI is: {bmi.toFixed(2)} ({type}) </p>
}
              
              <div className="flex flex-row justify-between">
                  {(type === "Over Weight") && <button className="bg-blue-500 hover:bg-blue-700 text-white p-3 mt-10 rounded "  onClick={weightLossExercisePlan}>Get Weight Loss Exercise Plan</button>}
                  {(type === "Over Weight") && <button className="bg-blue-500 hover:bg-blue-700 text-white p-3 mt-10 rounded" onClick={weightLossDietPlan}>Get Weight Loss Diet Plan</button>}
                  
                  {(type === "Obesity")  && <button className="bg-blue-500 hover:bg-blue-700 text-white p-3 mt-10 rounded" onClick={weightLossExercisePlanForObesity} >Get Weight Loss Exercise Plan</button>}
                  {(type === "Obesity")  && <button className="bg-blue-500 hover:bg-blue-700 text-white p-3 mt-10 rounded" onClick={weightLossDietPlanForObesity}>Get Weight Loss Diet Plan</button>}
                  {(type === "Under weight") && <button className="bg-blue-500 hover:bg-blue-700 text-white p-3 mt-10 rounded" onClick={weightGainExercisePlan}>Get Weight Gain Exercise Plan</button>}
                  {(type === "Under weight")  && <button className="bg-blue-500 hover:bg-blue-700 text-white p-3 mt-10 rounded" onClick={weightGainDietPlan}>Get Weight Gain Diet Plan</button>}
                  {(type === "Normal Weight") && <button className="bg-blue-500 hover:bg-blue-700 text-white p-3 mt-10 rounded" onClick={maintainWeightExercisePlan}>Exercise Plan To Maintain Weight</button>}
                  {(type === "Normal Weight")  && <button className="bg-blue-500 hover:bg-blue-700 text-white p-3 mt-10 rounded" onClick={maintainWeightDietPlan}>Diet Plan To Maintain Weight</button>}
              </div>
              <div className="flex flex-row justify-center gap-7">
                {/* Over weight */}
              {WeighLossBooleanVal &&<table  className="border-separate border border-slate-400 mt-8">
        <thead>
          <tr>
            <th className="border border-slate-300 p-3">Day</th>
            <th className="border border-slate-300 p-3">Exercise Plan</th>
          </tr>
        </thead>
        <tbody>
          {weightLossExercisenDayWisePlan.map((item, index) => (
            <tr key={index}>
              <td className="border border-slate-300 p-3">{item.day}</td>
              <td className="border border-slate-300 p-3">{item.exercise}</td>
            </tr>
          ))}
        </tbody>
              </table>}
              {WeighLossDietBooleanVal && <table className="border-separate border border-slate-400 mt-8">  
  <thead>
    <tr>
      <th className="border border-slate-300 p-3">Days</th>
      <th className="border border-slate-300 p-3">Breakfast</th>
      <th className="border border-slate-300 p-3">Lunch</th>
      <th className="border border-slate-300 p-3">Snacks</th>
      <th className="border border-slate-300 p-3">Dinner</th>
      <th className="border border-slate-300 p-3">TotalCalorieIntake</th>
    </tr>
  </thead>
  <tbody>
          {weightLossMealPlan.map((item, index) => (
            <tr key={index}>
              <td className="border border-slate-300 p-3">{item.day}</td>
              <td className="border border-slate-300 p-3">{item.breakfast}</td>
              <td className="border border-slate-300 p-3">{item.lunch}</td>
              <td className="border border-slate-300 p-3">{item.snacks}</td>
              <td className="border border-slate-300 p-3">{item.dinner}</td>
              <td className="border border-slate-300 p-3">{item.totalCalorieIntake}</td>
            </tr>
          ))}
        </tbody>
              </table>}


              {/* Obesity */}
              {WeighLossBooleanValForObesity &&<table  className="border-separate border border-slate-400 mt-8">
        <thead>
          <tr>
            <th className="border border-slate-300 p-3">Day</th>
            <th className="border border-slate-300 p-3">Exercise Plan</th>
          </tr>
        </thead>
        <tbody>
          {weightLossExercisenDayWisePlanforObesity.map((item, index) => (
            <tr key={index}>
              <td className="border border-slate-300 p-3">{item.day}</td>
              <td className="border border-slate-300 p-3">{item.exercise}</td>
            </tr>
          ))}
        </tbody>
              </table>}
              {WeighLossDietBooleanValForObesity && <table className="border-separate border border-slate-400 mt-8">  
  <thead>
    <tr>
      <th className="border border-slate-300 p-3">Days</th>
      <th className="border border-slate-300 p-3">Breakfast</th>
      <th className="border border-slate-300 p-3">Lunch</th>
      <th className="border border-slate-300 p-3">Snacks</th>
      <th className="border border-slate-300 p-3">Dinner</th>
      <th className="border border-slate-300 p-3">TotalCalorieIntake</th>
    </tr>
  </thead>
  <tbody>
          {weightLossMealPlanforObesity.map((item, index) => (
            <tr key={index}>
              <td className="border border-slate-300 p-3">{item.day}</td>
              <td className="border border-slate-300 p-3">{item.breakfast}</td>
              <td className="border border-slate-300 p-3">{item.lunch}</td>
              <td className="border border-slate-300 p-3">{item.snacks}</td>
              <td className="border border-slate-300 p-3">{item.dinner}</td>
              <td className="border border-slate-300 p-3">{item.totalCalories}</td>
            </tr>
          ))}
        </tbody>
              </table>}


              {/* Under Weight */}
              {WeighGainBooleanVal &&<table  className="border-separate border border-slate-400 mt-8">
        <thead>
          <tr>
            <th className="border border-slate-300 p-3">Day</th>
            <th className="border border-slate-300 p-3">Exercise Plan</th>
          </tr>
        </thead>
        <tbody>
          {weightGainExerciseDayWisePlan.map((item, index) => (
            <tr key={index}>
              <td className="border border-slate-300 p-3">{item.day}</td>
              <td className="border border-slate-300 p-3">{item.exercise}</td>
            </tr>
          ))}
        </tbody>
              </table>}
              {WeighGainDietBooleanVal && <table className="border-separate border border-slate-400 mt-8">  
  <thead>
    <tr>
      <th className="border border-slate-300 p-3">Days</th>
      <th className="border border-slate-300 p-3">Breakfast</th>
      <th className="border border-slate-300 p-3">Lunch</th>
      <th className="border border-slate-300 p-3">Snacks</th>
      <th className="border border-slate-300 p-3">Dinner</th>
      <th className="border border-slate-300 p-3">TotalCalorieIntake</th>
    </tr>
  </thead>
  <tbody>
          {weightGainMealplan.map((item, index) => (
            <tr key={index}>
              <td className="border border-slate-300 p-3">{item.day}</td>
              <td className="border border-slate-300 p-3">{item.breakfast}</td>
              <td className="border border-slate-300 p-3">{item.lunch}</td>
              <td className="border border-slate-300 p-3">{item.snacks}</td>
              <td className="border border-slate-300 p-3">{item.dinner}</td>
              <td className="border border-slate-300 p-3">{item.totalCalorieIntake}</td>
            </tr>
          ))}
        </tbody>
              </table>}


              {/* Normal Weight */}
              {WeighGainBooleanValForNormal &&<table  className="border-separate border border-slate-400 mt-8">
        <thead>
          <tr>
            <th className="border border-slate-300 p-3">Day</th>
            <th className="border border-slate-300 p-3">Exercise Plan</th>
          </tr>
        </thead>
        <tbody>
          {ExercisePlanFornormalweight.map((item, index) => (
            <tr key={index}>
              <td className="border border-slate-300 p-3">Day {item.day}</td>
              <td className="border border-slate-300 p-3">{item.exercise}</td>
            </tr>
          ))}
        </tbody>
              </table>}
              {WeighGainDietBooleanValForNormal && <table className="border-separate border border-slate-400 mt-8">  
  <thead>
    <tr>
      <th className="border border-slate-300 p-3">Days</th>
      <th className="border border-slate-300 p-3">Breakfast</th>
      <th className="border border-slate-300 p-3">Lunch</th>
      <th className="border border-slate-300 p-3">Snacks</th>
      <th className="border border-slate-300 p-3">Dinner</th>
      <th className="border border-slate-300 p-3">TotalCalorieIntake</th>
    </tr>
  </thead>
  <tbody>
          {mealPlanForNormalWeight.map((item, index) => (
            <tr key={index}>
              <td className="border border-slate-300 p-3">{item.day}</td>
              <td className="border border-slate-300 p-3">{item.breakfast}</td>
              <td className="border border-slate-300 p-3">{item.lunch}</td>
              <td className="border border-slate-300 p-3">{item.snacks}</td>
              <td className="border border-slate-300 p-3">{item.dinner}</td>
              <td className="border border-slate-300 p-3">{item.totalCalorieIntake}</td>
            </tr>
          ))}
        </tbody>
              </table>}
              </div>
              </div>
              </div>
              </div>
      </main>
    );
  }
  




