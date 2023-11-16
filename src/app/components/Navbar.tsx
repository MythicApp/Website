export default function Navbar() {
  return (
    <nav>
      <h1 className="logo">Mythic</h1>
      <div className="right-items">
        <a className="nav-a" href="https://github.com/mythicapp">Github</a>
        <a className="nav-a" href="https://discord.gg/58NZ7fFqPy">Discord</a>
        <a className="nav-a" href="https://github.com/MythicApp/Mythic/wiki/Introduction">Wiki</a>
        <a className="button" href="https://discord.gg/58NZ7fFqPy">
          Join Waitlist
        </a>
      </div>
    </nav>
  );
}
