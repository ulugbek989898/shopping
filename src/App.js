import './App.css'
import HomePage from './pages/homepage/homepage.component'
import { Route, Switch } from 'react-router-dom'
const HatsPage = ()=>{
  return (
      <h1>Hats Page</h1>
  )
}
function App() {
  return (
    <div>
      <Switch>
        <Route component={HomePage} exact={true} path={'/'} />
        <Route component={HatsPage} exact={true} path={'/hats'} />
      </Switch>
    </div>
  );
}

export default App;
