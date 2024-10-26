import { defineConfigWithTheme } from 'vitepress'
import { ThemeConfig } from './theme/types'

// https://vitepress.dev/reference/site-config

export default defineConfigWithTheme<ThemeConfig>({
    base: '/src/',
    title: "Bo-Yu Yang",
    description: "Site description or title description",
    sitemap: {
        hostname: 'https://yourhosteddomain.com',
    },
    lastUpdated: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Resume', link: '/resume.md' },
            { text: 'Publications', link: '/publications/index.md' },            
            { text: 'Projects', link: '/projects/index.md' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/BrianYang71/BrianYang71.github.io' }
        ],
        search: {
            provider: 'local'
        },

        // https://github.com/iann838/vitefolio
        sidebar: [{ text: '' }], // DO NOT DELETE force an empty sidebar
        profile: {
            title: 'Bo-Yu Yang', // hidden if empty
            bio: "There is a crack in everything, and that's how the light gets in.",
            avatar: 'https://www.github.com/BrianYang71.png',
            links: [
                { icon: 'github', link: 'https://github.com/BrianYang71' },
                //{ icon: 'twitter', link: 'https://x.com/brianyang_71' },
                // { icon: {
                //     svg: `
                //       <svg>
                //         <path d="src/assets/icon/google-scholar.svg"/>
                //       </svg>`
                //   },
                //   link: 'https://scholar.google.com/citations?user=eEKcjywAAAAJ&hl=en'},
                // or { icon: { svg: '<svg>...</svg>' }, link: '...' }
            ]
        },

    },
})
