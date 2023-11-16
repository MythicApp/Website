export default function Navbar() {
  return (
    <nav>
      <h1 className="logo">Mythic</h1>
      <div className="right-items">
        <a className="nav-a" href="https://github.com/mythicapp" target="_blank">Github</a>
        <a className="nav-a" href="https://discord.gg/58NZ7fFqPy" target="_blank">Discord</a>
        <a className="nav-a" href="https://github.com/MythicApp/Mythic/wiki/Introduction" target="_blank">Wiki</a>
        <a className="button navwaitlist" href="/waitlist">
          Join Waitlist
        </a>
      </div>
    </nav>
  );
}
