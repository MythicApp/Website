import Image from "next/image";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Alert />

      <div className="CTA">
        <Image
          className="CTALogo"
          src="/Mythic.png"
          width={500}
          height={500}
          alt="Mythic logo"
        />
        <h1 className="h3">Gaming on macOS</h1>
        <h1 className="h1-title">
          Mythic is a game launcher that bridges the gap between windows and
          mac.
        </h1>
        <p className="description">
          An open-source Epic Games Launcher alternative and normal game
          launcher for macOS written in Swift. We started this project
          to create a GUI frontend for Legendary and to play
          Windows games using Apple's game porting toolkit.
        </p>
        <a className="button-md" href="https://discord.gg/58NZ7fFqPy">
          Join Waitlist
        </a>
        <p className="macos-version">for macOS 14+</p>
        <Image
          className="CTAApp"
          src="/app.png"
          width={1012}
          height={562}
          alt="Mythic app screenshot"
        />
      </div>
    </div>
  );
}
