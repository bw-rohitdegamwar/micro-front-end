import logo from './logo.svg';
import './App.css';

const name = 'Rohit'
const age = 40;
const fruits = ['apples', 'oranges'];

function App() {
  console.log(`my name is ${name} and my age is ${age}`)
  console.log(name.length)
  var test = name.toLocaleUpperCase();
  console.log(test)
  console.log(fruits)
  fruits.push('testfruit')
  console.log(fruits.slice(0, 2));

  const person = {
    firstName: 'Rohit',
    lastName: 'Degamwar',
    age: 47,
    hobbies: ['music', 'programming', 'sports'],
    address: {
      street: '50 main street',
      city: 'pune',
      location: 'kharadi'
    }
  }

  const { firstName, lastName } = person

  console.log(person)


  console.log(firstName + ' latsname ' + lastName)

  person.email = 'a@b.c';

  const todos = [
    {
      id: 1,
      test: 'meeting with boss',
      isCompleted: true
    },
    {
      id: 2,
      test: 'meeting with boss',
      isCompleted: false
    },
    {
      id: 3,
      test: 'meeting with boss',
      isCompleted: true
    }
  ]

  //console.log(todos)

  //console.log('JSON:' + JSON.stringify(todos))

  for (let i = 0; i < 5; i++) {
    //console.log(i)
  }

  const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true
  });

  console.log(todoCompleted);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React1
        </a>
      </header>
    </div>
  );
}

export default App;
