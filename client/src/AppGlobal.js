import { Provider } from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import CreateUser from './Components/Users/UserAdd/CreateUser';
import store from "./Redux/store.js"

function App() {
  return (
    <Provider store= {store}>
      <BrowserRouter>
        <Route exact path='/login' component= {CreateUser}/>
      </BrowserRouter>
    </Provider>

      );
}

export default App;
