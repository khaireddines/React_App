import { memo } from "react";
import MainApp from "./MainApp";
import '../../Styles/App/App.css';
import {Redirect, Route, Switch, useHistory, useLocation, useRouteMatch} from "react-router-dom";
const RestrictedRoute = ({component: Component, location, tokens, ...rest}) =>
  <Route
    {...rest}
    render={props =>
      tokens
        ? <Component {...props} />
        : <Redirect
          to={{
            pathname: '/signin',
            state: {from: location}
          }}
        />}
  />;
const App = () => {
    let match = useRouteMatch();
    let tokens = localStorage.getItem('tokens');
    let location = useLocation();
    return (
      <div className="App" style={{height:'100%'}}>
        <Switch>
          <Route exact path='/signin'/>
          <Route exact path='/signup'/>
          <RestrictedRoute path={`${match.url}`} tokens={tokens} location={location}
                           component={MainApp}/> 
        </Switch>
      </div>
    );
  }
  
  export default memo(App);