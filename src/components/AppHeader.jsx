import reactlogo from "../assets/img/react.svg";

export default function AppHeader() {
  return (
    <header>
      <img className="reactLogo" src={reactlogo} alt="" />
      <h1>React Use State</h1>
    </header>
  );
}
