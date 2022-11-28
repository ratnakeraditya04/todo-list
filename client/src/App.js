// import logo from './logo.svg';
import './App.css';

// Components 
import Header from './components/Header'
import ToDoForm from './components/ToDoForm'
function App() {
  return (
    <div>
      {/* <p>Hello</p> */}
      {/* // Self losing Tag */}
      <Header />
      <ToDoForm />
    </div>
  );
}

export default App;
