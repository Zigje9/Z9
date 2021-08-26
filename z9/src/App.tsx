import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import GlobalStyle from './assets/styles/globalStyle';
import { theme, lightTheme } from './assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import MainView from './pages/mainView';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainView} />
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
