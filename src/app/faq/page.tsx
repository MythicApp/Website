import Navbar from "../../_components/navigation/navbar";
import Footer from "../../_components/layout/footer";
import Question from "../../_components/ui/faq-question";
import Divider from "../../_components/ui/divider";


export default function Faq() {
  return (
    <div>
      <Navbar />
      <div className="CTA">
        <h1 className="h1-faq">Frequently Asked Questions</h1>

        <Question
          question="What is Mythic?"
          answer="Mythic is an open-source Epic Games Launcher alternative and a normal game launcher for macOS, written in Swift. This project was created to provide a GUI frontend for Legendary and to play Windows games using Apple's game porting toolkit."
          id="1"
        /><Divider />

        <Question
          question="How does Mythic run Windows games on macOS?"
          answer="Mythic uses the Mythic Engine, which is a derivative of Apple's Game Porting Toolkit (commonly referred to as GPTK), functioning as an API translator for Windows code. Performance is variable but closer to native performance than ever before."
          id="2"
        /><Divider />

        <Question
          question="How is this different from launchers like Heroic?"
          answer="Mythic distinguishes itself through our unique engine, a blend of Apple's game porting toolkit and other enhancements, including DXVK and Winetricks. Our performance is expected to outshine Heroic's due to the superior native integration facilitated by Apple's game porting toolkit, resulting in a significantly enhanced gaming experience. On the other hand, Heroic relies primarily on externally-sourced tools, such as CrossOver. Additionally, Mythic is written in Swift, Apple's proprietary programming language. This not only contributes to a more native appearance but also ensures significantly higher performance on macOS. In contrast, Heroic utilizes Electron, which consumes more RAM and can overall be clunky to use from time to time."
          id="3"
        /><Divider />

        <Question
          question="Will ___ feature or ___ game platform come to Mythic?"
          answer="Currently, we're working our hardest to complete Mythic. To see what we're working on, check out the roadmap. Missing something from there? Feel free to open an issue or join our Discord and let us know!"
          id="4"
        /><Divider />

        <Question
          question="What are the system requirements for Mythic?"
          answer="Mythic is only available for macOS 14+. ~550 MB RAM at the most, but Mythic is always being optimized with every update. ~2 GB of storage (the Mythic Engine is ~1.8 GB in size, and the Mythic app is roughly 30 MB in size.) Please bear in mind that this information is from an unoptimized prerelease, so these statistics will improve."
          id="5"
        /><Divider />

        <Question
          question="How do I download and install Mythic?"
          answer="A stable release is not yet ready, but the source code can be downloaded from our GitHub if you wish to get an early build. Please keep in mind that we do not yet offer support, as the app's functionality is not yet complete. For a more detailed guide on how to install Mythic, check out the docs."
          id="6"
        /><Divider />

        <Question
          question="Can I import my own games (non-launcher)?"
          answer="Yes, you can import your own games to Mythic."
          id="7"
        /><Divider />

        <Question
          question="What games run using Mythic?"
          answer="Almost any game or app that runs on Windows can run on Mythic (via GPTK), with the exception of games that use the Windows UWP platform and games that use Anti-cheat. Whether support for this will come is unknown and will come at the discretion of those working on wine. For a (currently limited) list of games that have been tested, visit the docs."
          id="8"
        /><Divider />

        <Question
          question="Is Mythic free?"
          answer="Yes, Mythic is free and completely open-source software, meaning the community can contribute and help shape the future of Mythic!"
          id="9"
        />

        <Question
          question="How does the launcher itself perform?"
          answer="My current benchmarks indicate around 150MB of RAM usage in the library, while home hovers at approximately 100MB of RAM during onboarding. Everything else remains at a maximum of around 55MB of RAM. As for size, the launcher itself is relatively small, while GPTK is only 1.8GB uncompressed and 600MB when compressed."
          id="10"
        /><Divider />
      </div>

      <br /><br />
      <Footer />
    </div>
  );
};