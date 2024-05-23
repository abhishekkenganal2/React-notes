import { useState } from "react";
import Input from "./Input";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');

  const [enteredValue, setenteredValue] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailValid = didEdit.email && !enteredValue.email.includes("@");
  const passwordValid = didEdit.password && !enteredValue.password.trim().length <6;

  function handleSubmit(event) {
    event.preventDefault();
    //console.log("Submitted");
    console.log(enteredValue);
    setenteredValue({
      email: "",
      password: "",
    }); //reseting input values....
  }

  function handleInputChange(identfier, value) {
    setenteredValue((prevValues) => ({
      ...prevValues,
      [identfier]: value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identfier]:false
    }))
  }

  function handleInputBlur(identfier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identfier]: true,
    }));
  }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="Email"
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValue.email}
            error= {emailValid && 'Please enter valid Email'}
          />
        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            //onChange={handleEmailChange}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValue.email}
          />
          <div className="control-error">
            {emailValid && <p>Please enter a valid email address</p>}
          </div>
        </div> */}

        <Input label="Password"
            id="password"
            type="password"
            name="password"
            onBlur={() => handleInputBlur("password")}
            onChange={(event) => handleInputChange("password", event.target.value)}
            value={enteredValue.password}
            error= {passwordValid && 'Please enter valid Password'}
          />

        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            //onChange={handlePasswordChange}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={enteredValue.password}
          />
        </div> */}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
