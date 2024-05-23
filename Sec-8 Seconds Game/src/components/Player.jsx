import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  //const [submited, setSubmited] = useState(false);

  // function handleChange(event) {
  //   setSubmited(false);
  //   setEnteredPlayerName(event.target.value);
  // }

  function HandleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={HandleClick}>Set Name</button>
      </p>
    </section>
  );
}
