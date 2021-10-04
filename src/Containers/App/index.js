import { memo } from "react";
import Stars from "../../Components/Stars/Stars";
import '../../Styles/App/App.css';

const App = () => {
    return (
      <div className="App">
        <Stars />
      </div>
    );
  }
  
  export default memo(App);