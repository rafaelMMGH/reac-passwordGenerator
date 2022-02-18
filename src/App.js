import { useState } from 'react';

// Custom Dependancies
import SelectComponent from './components/Select/Select';
import SwitchComponent from './components/Switch/Switch';

import './App.css'

function createPassword() {
  let size  = document.getElementById('length').value;
  let hasNumbers = document.getElementById('hasNumbers').checked;
  let typeLetters = document.getElementById('letters').value;
  let hasSpecial = document.getElementById('hasSpecial').checked;

  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var chars = "";
  var text = "";

  if (hasNumbers)
    chars += numbers;
  if (hasSpecial)
    chars += special;

  chars += typeLetters === 1 ? letters : typeLetters === 2 ? letters.toLowerCase() : letters + letters.toLowerCase();

  for (var i = 0; i < size; i++)
    text += chars.charAt(Math.floor(Math.random() * chars.length));

  return text;
}

function showValueRange() {
  return document.getElementById('OutputLength').value = document.getElementById('length').value
}

function App() {
  
  const options = [
    {
      id: "1",
      label: "capital letters",
      value: 1
    },
    {
      id: "2",
      label: "lowercase",
      value: 2
    },
    {
      id: "3",
      label: "Both",
      value: 3
    }
  ];

  const temp = options.find((option => option.value));

  const [checkedState, setCheckedState] = useState (new Array(document.querySelectorAll('input[type=checkbox]').length
  ).fill(false));

  const [currentOption, setCurrentOption] = useState(temp);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <div className="App">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-900">Password Generator</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0 items-center justify-center container">

            <div>
              <label htmlFor="length" className="block text-sm font-medium text-gray-700">
                Length: 
              </label>
              <input type="range" id="length" name="length" min="6" max="20" defaultValue="8" onInput={showValueRange} />
              <output id="OutputLength">8</output>
            </div>

            <div className='w-full max-w-xs mx-auto'>

              <SwitchComponent label={ 'Accept Number' }/>

              <SwitchComponent label={ 'Accept special characters: ' } />

              <div>
                <SelectComponent
                  label={ 'Letters Options' }
                  //className="flex-1"
                  options={options}
                  selectedOption={currentOption}
                  handelChange={ (event) => {setCurrentOption(event)} }
                />
              </div>

            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

