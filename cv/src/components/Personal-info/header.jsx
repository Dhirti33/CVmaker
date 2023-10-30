import "../styles/header.css"

export default function Header(props) {
  const {firstName,lastName} = props;
  return (
    <nav className="navBar">
      <h1 className="navBarName">CVmaker</h1>
      <p className="navUserName">{firstName +" "+ lastName}</p>
    </nav>
  );
}
