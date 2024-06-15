import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: vercel({
        webAnalytics: {
            enabled: true
        }
    }),
    redirects: {
        '/download': 'https://github.com/MythicApp/Mythic/releases',
        '/roadmap': 'https://github.com/orgs/MythicApp/projects/2/views/2',
        '/discord': 'https://discord.gg/58NZ7fFqPy',
        '/github' : 'https://github.com/mythicapp',
        // '/docs' : 'https://docs.getmythic.app'
    },
    integrations: [icon()]
});