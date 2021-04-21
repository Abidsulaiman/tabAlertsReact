import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Code from "./Code";
import AddNewForm from "./components/AddNewForm";

function App() {
  const [code, setCode] = useState(false);
  const [form, setForm] = useState({
    firstTitle: "",
    secondTitle: "",
    firstEmoji: "",
    secondEmoji: "",
    timeInterval: "",
    timeDelay: "",
  });

  const handleScript = (e) => {
    if (
      form.firstTitle !== "" &&
      form.secondTitle !== "" &&
      form.timeDelay !== "" &&
      form.timeInterval !== ""
    ) {
      setCode(true);
    } else {
      alert("All fields are required");
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setForm({
      firstTitle: "",
      secondTitle: "",
      firstEmoji: "",
      secondEmoji: "",
      timeInterval: "",
      timeDelay: "",
    });
    setCode(false);
  }

  const addFirstEmoji = (emoji, event) => {
    setForm((prevState) => ({
      ...prevState,
      firstTitle: prevState.firstTitle + emoji.native,
    }));
  };

  const addSecondEmoji = (emoji, event) => {
    setForm((prevState) => ({
      ...prevState,
      secondTitle: prevState.secondTitle + emoji.native,
    }));
  };

  return (
    <div className="App">
      <Header />
      <Container maxWidth="lg" style={{ marginTop: "3rem" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <AddNewForm
              handleChange={handleChange}
              form={form}
              handleSubmit={handleSubmit}
              handleScript={handleScript}
              addFirstEmoji={addFirstEmoji}
              addSecondEmoji={addSecondEmoji}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Code form={form} code={code} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
