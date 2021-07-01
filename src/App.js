import './App.css'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
        <Route component={HomePage} exact={true} path={'/'} />
        <Route component={ShopPage} exact={true} path={'/shop'} />
      </Switch>
    </div>
  );
}

export default App;
