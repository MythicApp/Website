import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Faq() {
  return (
    <div>
      <Navbar />
      <div className="CTA">
        <h1 className="h1-faq">Frequently Asked Questions</h1>
        
        <details>
          <summary id="1">What is Mythic?</summary>
          Mythic is an open-source Epic Games Launcher alternative and a normal game launcher for macOS, written in Swift. This project was created to provide a GUI frontend for <a href="https://github.com/derrod/legendary">Legendary</a> and to play Windows games using Apple's game porting toolkit.
        </details><hr />

        <details>
          <summary id="2">How does Mythic run Windows games on macOS?</summary>
          Mythic uses the Mythic Engine, which is a derivative of Apple's Game Porting Toolkit (commonly referred to as GPTK), functioning as an API translator for Windows code. Performance is variable but closer to native performance than ever before.
        </details><hr />

        <details>
          <summary id="3">How is this different from launchers like Heroic?</summary>
          Mythic distinguishes itself through our unique engine, a blend of Apple's game porting toolkit and other enhancements, including <a href="https://github.com/doitsujin/dxvk">DXVK</a> and <a href="https://github.com/Winetricks/winetricks">Winetricks</a>. Our performance is expected to outshine Heroic's due to the superior native integration facilitated by Apple's game porting toolkit, resulting in a significantly enhanced gaming experience. On the other hand, Heroic relies primarily on externally-sourced tools, such as <a href="https://www.codeweavers.com/crossover">CrossOver</a>.
          Additionally, Mythic is written in Swift, Apple's proprietary programming language. This not only contributes to a more native appearance but also ensures significantly higher performance on macOS. In contrast, Heroic utilizes Electron, which consumes more RAM and can overall be clunky to use from time to time.
        </details><hr />

        <details>
          <summary id="4">Will ___ feature or ___ game platform come to Mythic?</summary>
          Currently, we're working our hardest to complete Mythic. To see what we're working on, check out the <a href="https://github.com/orgs/MythicApp/projects/2">roadmap</a>.
          Missing something from there? Feel free to <a href="https://github.com/MythicApp/Mythic/issues">open an issue</a> or <a href="https://discord.gg/qbc32gtZDt">join our Discord</a> and let us know!
        </details><hr />

        <details>
          <summary id="5">What are the system requirements for Mythic?</summary>
          <ul>
            <li>Mythic is only available for macOS 14+.</li>
            <li>~550 MB RAM at the most, but Mythic is always being optimized with every update.</li>
            <li>~2 GB of storage (the Mythic Engine is ~1.8 GB in size, and the Mythic app is roughly 30 MB in size.)</li>
          </ul>
          Please bear in mind that this information is from an unoptimized prerelease, so these statistics will improve.
        </details><hr />

        <details>
          <summary id="6">How do I download and install Mythic?</summary>
          A stable release is not yet ready, but the source code can be downloaded from our <a href="https://github.com/MythicApp/Mythic">GitHub</a> if you wish to get an early build. Please keep in mind that we do not yet offer support, as the app's functionality is not yet complete. For a more detailed guide on how to install Mythic, check out the <a href="/docs">docs</a>.
        </details><hr />

        <details>
          <summary id="7">Can I import my own games (non-launcher)?</summary>
          Yes, you can import your own games to Mythic.
        </details><hr />

        <details>
          <summary id="8">What games run using Mythic?</summary>
          Almost any game or app that runs on Windows can run on Mythic (via GPTK), with the exception of games that use the Windows UWP platform and games that use Anti-cheat. Whether support for this will come is unknown and will come at the discretion of those working on wine. For a (currently limited) list of games that have been tested, visit the <a href="/docs">docs</a>.
        </details><hr />

        <details>
          <summary id="9">Is Mythic free?</summary>
          Yes, Mythic is free and completely open-source software, meaning the community can contribute and help shape the future of Mythic!
        </details>
      </div>
      <br /><br />
      <Footer />
    </div>
  );
};
