import reactimg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDesc = ['Fundamental','Crucial', 'Core'];

function genRandom(max) {
  return Math.floor(Math.random() * (max+1));
}

export default function Header() {
  const desc = reactDesc[genRandom(2)];

  return (
    <header>
        <img src={reactimg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}
