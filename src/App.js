import './App.css';
import Todo from './Compoents/Todo';

function App() {
  return (
    <div style={{
      position: 'absolute', left: '50%',
      transform: 'translateX(-50%)'
    }}>
      <br />
      <br />
      <Todo />
    </div>
  );
}

export default App;
