import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Alerts from "./components/Alerts/Alerts";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Container maxWidth="xl">
        <Alerts title="List of alerts" />
      </Container>
    </div>
  );
}

export default App;
