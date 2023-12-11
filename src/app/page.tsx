import Image from "next/image";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Alert />

      <div className="CTA">
        <h1>
          <span className="mythic-gradient-text">Mythic</span> is the game launcher that bridges the gap between windows and
          mac.
        </h1>
        <p>
          An open-source Epic Games Launcher alternative and normal game
          launcher for macOS written in Swift. We started this project
          to create a GUI frontend for Legendary and to play
          Windows games using Apple's game porting toolkit.
        </p>
        <a className="button-md" href="/waitlist">
          Join Waitlist
        </a>
        <p className="macos-version">for macOS 14+</p>
        <Image
          className="CTA-Screenshot"
          src="/app.png"
          width={1012}
          height={562}
          alt="Mythic app screenshot"
        />
      </div>
      <Footer />
    </div>
  );
}