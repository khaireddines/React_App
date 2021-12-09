import { memo } from "react";
import MainApp from "./MainApp";
import '../../Styles/App/App.css';
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
      <div className="App" style={{height:'100%'}}>
        <Routes>
          <Route exact path={'/*'} element={<MainApp />} />
        </Routes>
      </div>
    );
  }
  
  export default memo(App);