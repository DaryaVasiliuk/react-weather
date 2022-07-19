import React from 'react';
import { Route, Switch } from 'react-router';
import { Home } from './pages/Home/Home';
import { MonchStatistics } from './pages/MonchStaticticks/MonchStatistics';
import { Header} from './shared/Header/Header';

function App() {
  return ( 
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/month-statistics' exact component={MonchStatistics} />
      </Switch>
    </div>
  );
}

export default App;
