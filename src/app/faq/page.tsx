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
                    An open-source Epic Games Launcher alternative and normal game launcher for macOS written in Swift. We started this project to create a GUI frontend for Legendary and to play Windows games using Apple's game porting toolkit.
                </details><hr />

                <details>
                    <summary id="2">How does Mythic run windows games on macOS</summary>
                    Mythic uses our proprietary engine, which is a blend of Apple's game porting toolkit and Wine, functioning as a sort of emulator for Windows games on macOS. Our performance should be better than just wine or crossover because Apple's game porting toolkit ensures that Windows games become more native.
                </details><hr />

                <details>
                    <summary id="3">How is this different from launchers like Heroic?</summary>
                    Even though Heroic is a very good option, Mythic distinguishes itself through our unique engine, a blend of Apple's game porting toolkit and Wine, essentially an emulator for running Windows games on macOS. Our performance is expected to outshine Heroic's due to the superior native integration facilitated by Apple's game porting toolkit, resulting in a significantly enhanced gaming experience. On the other hand, Heroic relies primarily on Wine, crossover, and other tools.
                    Additionally, Mythic's foundation in Swift, Apple's proprietary programming language, sets it apart. This not only contributes to a more native appearance but also ensures significantly higher performance on macOS. In contrast, Heroic utilizes Electron, which consumes more RAM.
                </details><hr />

                <details>
                    <summary id="4">Are you planning to add x launcher or x feature?</summary>
                    Currently we are working very hard to make our launcher as complete as we can to see what we are working on check out the <a href="https://github.com/orgs/MythicApp/projects/2">roadmap</a>. Missing something from there? Feel free to <a href="https://github.com/MythicApp/Mythic/issues">open an issue</a> or <a href="https://discord.gg/qbc32gtZDt">join our Discord</a> and let us know!
                </details><hr />

                <details>
                    <summary id="5">What are the system requirements for Mythic?</summary>
                    <li>Due to Apple's game porting toolkit, Mythic is only available for macOS 14+.</li>
                    <li>≈550mb ram, keep in mind you need as much as x game needs to play x game.</li>
                    <li>≈2.2gb of storage (Apple's GPTK is 1.8GB uncompressed and 600MB when compressed), keep in mind you need as much as x game needs to download x game.</li>
                    <br />
                    Please bear in mind that this information is from an unoptimized test, so improvements are likely.
                </details><hr />

                <details>
                    <summary id="6">How do i download and install Mythic?</summary>
                    We currently do not have a stable release ready, but you can download the latest build from our <a href="https://github.com/MythicApp/Mythic">GitHub</a> page if you wish to get an early build, keep in mind we do not give support and are not liable for big game files on your system, if not join the <a href="https://getmythic.app/waitlist">waitlist</a> for now. For a more detailed guide on how to install Mythic, check out the <a href="/docs">docs</a>.
                </details><hr />

                <details>
                    <summary id="7">Can i add my own games (non-launcher)?</summary>
                    Yes, you can add your own games to Mythic manually.
                </details><hr />

                <details>
                    <summary id="8">What games run using Mythic?</summary>
                    Almost any game that runs on Windows can run on Mythic, but we are still working on improving compatibility with anti-cheats, for example you can get into a Fornite lobby not a match. For a very limited list of games that we have tested, check out the <a href="/docs">docs</a>.
                </details><hr />

                <details>
                    <summary id="9">Is Mythic free?</summary>
                    Yes, Mythic is free and completely open-source software meaning the community can contribute and help shape the future of Mythic!
                </details>
            </div>
            <br /><br />
            <Footer />
        </div>
    )
};
