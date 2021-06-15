import './App.css';
import '../node_modules/popper.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Current_weather from './component/Current_weather';

function App() {
  return (
    <div className="App">
            <Current_weather/>
    </div>
  );
}

export default App;
