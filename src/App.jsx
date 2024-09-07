import React from 'react'

let name = 'Marjia';
const x = 10;
const y = 20;

let people = ['John', 'Robert', 'George'];

let loggedIn = false;
const styles = {
  color: 'blue',
  backgroundColor: 'yellow',
  fontFamily: 'Arial, sans-serif',
  fontSize: '24px',
  padding: '10px',
  borderRadius: '5px',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
  margin: '10px',
};

const App = () => {
  return (
    <div>
      <div className='text-5xl'>App</div>
      <p style = {styles}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error perferendis fugit quis quos at id vitae quas officia quibusdam earum.
      </p>
      <p>Hello! {name}.</p>
      <p>the sum of {x} and {y} is {x+y}.</p>
      <ul>
        {people.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
      {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
    </div>
  )
}

export default App;