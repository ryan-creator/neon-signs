import './App.css';
import { Button } from './components/Button'

function App() {
  return (
    <div className="page">
      <div className="button-list-container">
        <div className="button-container">
          <Button/>
        </div>
        <div className="button-container">
          <Button/>
        </div>
        <div className="button-container">
          <Button/>
        </div>
      </div>
      <div className="sign-container">
        <div className="sign-wrapper">

        </div>
        <div className="logo-wrapper">

        </div>
      </div>
    </div>
  );
}

export default App;
