import { FC } from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import "../../assets/main.css";
import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <SignUpForm />
      <div id="credentials">
        <a href="https://www.linkedin.com/in/matias-kumpulainen-27b4421b9/">
          Author
        </a>
      </div>
    </div>
  );
};

export default App;
