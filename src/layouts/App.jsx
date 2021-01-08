import React, {useState} from 'react';
import GlobalTheme from '../config/GlobalTheme';
import theme from '../config/theme';
import Header from "../components/Header";
import {ThemeProvider} from "styled-components";
import Burger from "../components/Burger";
import Navigation from "../layouts/Navigation";
import Router from "../layouts/Router";
import {BrowserRouter} from "react-router-dom";

function App() {
    const [open, setOpen] = useState(false);

    return (
      <ThemeProvider theme={theme}>
          <BrowserRouter>
              <>
                <GlobalTheme />
                <div className="App">
                    <Header></Header>
                    <Navigation open={open}></Navigation>
                    <Burger open={open} setOpen={setOpen}></Burger>
                    <Router></Router>
                </div>
              </>
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
