import { defineConfigWithTheme } from 'vitepress'
import { ThemeConfig } from './theme/types'

// https://vitepress.dev/reference/site-config

export default defineConfigWithTheme<ThemeConfig>({
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    title: "Bo-Yu Yang",
    description: "Site description or title description",
    sitemap: {
        hostname: 'https://brianyang71.github.io/',
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
            avatar: '/icon/m87.jpg',
            links: [
                { icon: 'github', link: 'https://github.com/BrianYang71' },
                //{ icon: 'twitter', link: 'https://x.com/brianyang_71' },
                {
                    icon: {
                        svg: `
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" role="img">
                                <path d="M5.242 13.769 0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                            </svg>
                        `
                    },
                    link: 'https://scholar.google.com/citations?user=eEKcjywAAAAJ&hl=en',
                    text: 'Google Scholar'
                }
                // or { icon: { svg: '<svg>...</svg>' }, link: '...' }
            ]
        },

    },
})
