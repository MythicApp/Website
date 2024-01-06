import Image from "next/image";
import Navbar from "../_components/navigation/navbar";
import Alert from "../_components/layout/indev-alert";
import Footer from "../_components/layout/footer";
import Card from "../_components/ui/feature-card";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Alert />

      <div className="CTA">
        <h1>
          <span className="mythic-gradient-text">Mythic</span> is the game launcher that bridges the gap between Windows and Mac.
        </h1>
        <p>
          An open-source macOS game launcher written in Swift that has the ability to play Windows games through an enhanced implementation of Apple's Game Porting Toolkit.
          Mythic supports various gaming platforms, currently including Epic Games.
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
          priority={true}
          alt="Mythic app screenshot"
        />
      </div>

      <section className="features">

        <h1>What does Mythic offer?</h1>
        <p className="macos-version" style={{ marginTop: "-10px" }}>We have even more to come, see <span><a href="https://github.com/orgs/MythicApp/projects/2/views/2">roadmap</a></span>.</p>

        <div className="feature_wrap">
          <Card title="Windows Games Natively on Mac" desc="Mythic Engine makes it possible to run and play Windows games the closest to native performance than ever before." img="/app.png" />
          <Card title="Multiple launchers, one place" desc="Mythic makes it simple to install and play your Epic games from Mythic itself with more launcher support to come. (Including Steam!)" img="/app.png" />
          <Card title="Import your own games" desc="Mythic gives you the freedom to add and run your own games/software, Mac and Windows alike." img="/app.png" />
          <Card title="Finetune the engine" desc="Mythic's versatile implementation of GPTK allows the end-user to configure its flags and various settings seamlessly and simply." img="/app.png" />
        </div><br />

      </section>

      <Footer />
    </div>
  );
}