// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://lazygabrielksl.github.io/',
    integrations: [
        sitemap(), 
        starlight({
            title: '軟橘資訊站（暫）',
            favicon: './kurumi_icon_16.png',
            logo: {
                src: './src/assets/tangerine_logo.png',
            },
            social: {
                github: 'https://github.com/lazygabrielKSL',
            },
        }),
        mdx()
    ],
});