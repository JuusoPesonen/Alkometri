import './App.css';
import React, { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState('male');
  const [numBeers, setNumBeers] = useState(0);
  const [time, setTime] = useState(0);
  const [bloodAlcoholLevel, setBloodAlcoholLevel] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let litres = numBeers * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - (burning * time);
    let result;
    if (gender === 'male') {
      result = gramsLeft / (weight * 0.7);
    } else if (gender === 'female') {
      result = gramsLeft / (weight * 0.6);
    }
    if (result < 0) {
      result = 0;
    }

    setBloodAlcoholLevel(result.toFixed(2));
  }
  return (
    <>
     <form onSubmit={handleSubmit}>
      <label>Calculating alcohol blood level</label>
      <label>
        Weight (kg):
        <input type="text" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
      </label>
      <br/>
      <label>
        Male:
        <input type="radio" name="gender" value="male" checked={gender==='male'} onChange={(e)=> setGender(e.target.value)}/>
      </label>
      <label>
        Female:
        <input type="radio" name="gender" value="female" checked={gender==='female'} onChange={(e)=> setGender(e.target.value)}/>
      </label>
      <br/>
      <label>
        Bottles:
        <select value={numBeers} onChange={(e)=> setNumBeers(e.target.value)}>
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </label>
      <br/>
      <label>
        Time since last beer(hours):
        <select value={time} onChange={(e)=> setTime(e.target.value)}>
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </label>
      <br/>
        <button type="submit">Calculate</button>
      <br/>
        <p>{bloodAlcoholLevel}</p>
     </form>
      
    </>
  );
}

export default App;
