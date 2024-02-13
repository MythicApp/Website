import Image from "next/image";
import Navbar from "../_components/navigation/navbar";
import Alert from "../_components/layout/indev-alert";
import Footer from "../_components/layout/footer";
import Card from "../_components/ui/card";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Alert />

      <div className="CTA">
        <h1 className="mythic-gradient-text">
          Meet Mythic. The best way to play Windows games on the Mac.
        </h1>
        <p style={{ marginTop: "-1px" }}>
          An open-source macOS game launcher to play Windows games through our implementation of Apple's Game Porting Toolkit and many game platforms, currently including Epic Games.
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
          <Card
            title="Windows Games Natively on Mac"
            desc="Our engine makes it possible to run and play Windows games the closer to native performance than ever before. Our launcher is written in Swift to make the feel as close to native as it can be."
          />

          <Card
            title="Multiple launchers, one place"
            desc="Mythic makes it simple to install and play your Epic games from Mythic itself with more launcher support to come. (Including Steam!)"
          />

          <Card
            title="Import your own games"
            desc="Mythic gives you the freedom to add and run your own games/software, Mac and Windows alike."
          />

          <Card
            title="Finetune the engine"
            desc="Mythic's versatile implementation of GPTK allows the end-user to configure its flags and various settings seamlessly and simply."
          />
        </div><br />

      </section>

      <section>
        <div className="feature_wrap">
          <Card
            icon="github"
            title="Join the community"
            desc="Mythic is completely open-sourced, which means you can provide your own skill and help shape the app through a pull request, if there is a bug or you have an idea for a new feature, you can also create an issue there."
            href="https://github.com/mythicapp"
            button="To Github"
            target="_blank"
          /><br />

          <Card
            icon="discord"
            title="You can help shape Mythic"
            desc="We have an awesome community on Discord, it comes with alot of perks like being the first to know when there is a new update, leaks, and discussion about the product overall. We'd love to see you soon!"
            href="https://discord.gg/58NZ7fFqPy"
            button="Join Discord"
            target="_blank"
          />
        </div><br /><br />
      </section>

      <Footer />
    </div>
  );
}