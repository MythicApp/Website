import Image from "next/image";
import Navbar from "../_components/navigation/navbar";
import Alert from "../_components/layout/indev-alert";
import Card from "../_components/ui/card";
import Footer from "../_components/layout/footer";

export default function Home() {
  const cards = [
    {
      title: "Windows Games Natively on Mac",
      desc: "Run and play Windows games with native performance.",
    },
    {
      title: "Multiple launchers, one place",
      desc: "Install and play Epic games from Mythic itself.",
    },
    {
      title: "Import your own games",
      desc: "Add and run your own games/software, Mac and Windows alike.",
    },
    {
      title: "Finetune the engine",
      desc: "Configure engine flags and settings seamlessly.",
    },
  ];

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
        <p className="macos-version" style={{ marginTop: "-10px" }}>
          We have even more to come, see{" "}
          <span>
            <a href="https://github.com/orgs/MythicApp/projects/2/views/2">
              roadmap
            </a>
          </span>
          .
        </p>

        <div className="feature_wrap">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} desc={card.desc} />
          ))}
        </div>
        <br />
      </section>

      <section>
        <div className="feature_wrap">
          <Card
            icon="github"
            title="Join the community"
            desc="Contribute to Mythic through pull requests and issues on GitHub."
            href="https://github.com/mythicapp"
            button="To Github"
            target="_blank"
          />

          <Card
            icon="discord"
            title="You can help shape Mythic"
            desc="Join our Discord community for updates and discussions."
            href="https://discord.gg/58NZ7fFqPy"
            button="Join Discord"
            target="_blank"
          />
        </div>
        <br />
        <br />
      </section>
      <Footer />
    </div>
  );
}