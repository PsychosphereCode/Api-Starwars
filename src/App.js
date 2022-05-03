import ApiSWAPI from './componentes/ApiSWAPI/ApiSWAPI';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import PersonaSWAPI from './componentes/PersonaSWAPI/PersonaSWAPI';


const App =() => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/"  exact render={() => <ApiSWAPI/>}/>
          <Route path="/:id" render={(routerProps) => <PersonaSWAPI {...routerProps}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
