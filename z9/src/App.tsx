import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import GlobalStyle from './assets/styles/globalStyle';
import MainView from './pages/mainView';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainView} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
