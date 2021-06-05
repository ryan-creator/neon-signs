import './App.css';
import { Button } from './components/Button'
import { 
  buttonText1, 
  buttonText2, 
  buttonText3, 
  buttonColour1, 
  buttonColour2, 
  buttonColour3 
} from './Variables'

function App() {
  return (
    <div className="page">
      <div className="button-list-container">
        <div className="button-container">
          <Button label={buttonText1} colour={buttonColour1}/>
        </div>
        <div className="button-container">
          <Button label={buttonText2} colour={buttonColour2}/>
        </div>
        <div className="button-container">
          <Button label={buttonText3} colour={buttonColour3}/>
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
