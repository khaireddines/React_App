import { memo } from "react";
import Stars from "../../Components/Stars/Stars";
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
    return (
      <div className="App">
        <Switch>
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signup' component={SignUp}/>
          <RestrictedRoute path={`${match.url}`} tokens={tokens} location={location}
                           component={MainApp}/> 
        </Switch>
      </div>
    );
  }
  
  export default memo(App);