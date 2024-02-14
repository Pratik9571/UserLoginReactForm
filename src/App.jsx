import React from "react";
import "./App.css";
import RegisterForm from "./component/RegisterForm.jsx";
import LoginForm from "./component/LoginForm.jsx";

const App = () => {
  return (
    <div>
      <RegisterForm />
      <LoginForm />
    </div>
  );
};

export default App;
