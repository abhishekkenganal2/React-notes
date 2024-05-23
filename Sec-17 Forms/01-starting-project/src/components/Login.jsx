import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInValid,setEmailIsInValid] = useState()

  const email = useRef()
  const password = useRef()

  function handleSubmit(event) {
    event.preventDefault();
    //console.log("Submitted");
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    console.log(enteredEmail,enteredPassword);
    //email.current.value = '';  //resetting values
    const emailVaild = !enteredEmail.includes('@');

    if(!emailVaild) {
      setEmailIsInValid(true);
      return;
    }
    setEmailIsInValid(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            ref={email}
          />
          <div className="control-error">{emailVaild && <p>Please Enter valid Email.</p> }</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
