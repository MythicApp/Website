let metaTitle = "Mythic";
let metaDescription = "An open-source Epic Games Launcher alternative and normal game launcher for macOS written in Swift. We started this project to create a GUI frontend for Legendary and to play Windows games using game porting toolkit by Apple.";
let metaUrl = "https://getmythic.app";
let metaImage = "https://getmythic.app/ogimage.png";

const meta = {
  title: metaTitle,
  description: metaDescription,
  image: metaImage,
  url: metaUrl,
  canonical: metaUrl,
  themeColor: "#a046ff",
  og: {
    title: metaTitle,
    description: metaDescription,
    url: metaUrl,
    type: "website",
    site_name: metaTitle,
    image: metaImage,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    site: "@mythicapp",
    image: metaImage,
  },
  author: "Mythic, Jeremy, Jecta, blackxfiied",
  keywords: "mythic, macos, gaming, mac, apple",
  referrer: "no-referrer-when-downgrade",
  httpEquiv: {
    "content-language": "en-US",
    "X-UA-Compatible": "IE=edge",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
};

export default meta;
