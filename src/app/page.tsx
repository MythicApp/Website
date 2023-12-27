import Image from "next/image";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";
import Footer from "../components/Footer";
import Card from "../components/Card";

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

        <h1>Mythic's Features</h1>
        <p className="macos-version" style={{ marginTop: "-10px" }}>We have even more to come, see <span><a href="https://github.com/orgs/MythicApp/projects/2/views/2">roadmap</a></span>.</p>
      </div>

      <div className="feature_wrap">
        <Card title="Windows Games Natively on Mac" desc="Mythic Engine makes it possible to run and play Windows games on MacOS close as if it were ran natively performance-wise." img="/app.png" />
        <Card title="Multiple launchers, one place" desc="Mythic makes it very easy to install and play your steam and epic games from Mythic itself with more support to come." img="/app.png" />
        <Card title="Import your own games" desc="On Mythic you get the freedom to add your own windows games and/or software to run with the Mythic engine." img="/app.png" />
        <Card title="Finetune the engine" desc="We give interface to GPTK and Whisky (Wine) and allow you to modify everything to your wish and requirements." img="/app.png" />
      </div><br />

      <Footer />
    </div>
  );
}