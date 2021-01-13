import React from 'react';
import THEME from '../config/theme';
import { Header, Footer, Container } from "../components/index";
import { ThemeProvider} from "styled-components";
import Router from "../layouts/Router";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
      <ThemeProvider theme={THEME}>
          <BrowserRouter>
            <Container className="App">
                <Header />
                <Router />
            </Container>
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
