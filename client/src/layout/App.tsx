import React from 'react';
import { Route, Switch } from 'react-router';
import CharacterList from '../pages/CharacterListPage/CharacterList';
import CharacterRender from '../pages/CharacterRenderPage/CharacterRender';
import '../styles/App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route strict exact path='/'>
          <CharacterList />
        </Route>
        <Route strict exact path='/pokemon/:id'>
          <CharacterRender />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
