# Quintessence a Hugo Boilerplate With Substance

The [Hugo](https://gohugo.io/) boilerplate we use for our projects.

**Disclaimer** - This boilerplate has been heavily integrated with [Netlify](https://www.netlify.com/), and therefore many features are specific to the Netlify platform and may not work with other hosting providers.

**Disclaimer** - Quintessence is a boilerplate (starter kit) for Hugo projects. It's not a Hugo theme. Check the [theme](#themes) docs for more information.

## Getting Started

To get started, you can either clone the repository, or deploy straight to [Netlify](#deploy-to-netlify). Then run the following from the project root:

```
npm install
hugo server

```

## File Structure

```
│   │
|   └──── /assets            - Source files for assets (SASS, JS, Images, Fonts etc)
│
└──── /layouts               - Template files
│   │ 404.html               - 404 Template
│   │ index.headers          - Custom Netlify HTTP headers
│   │ index.redirects        - Custom Netlify redirect rules
│   │ robots.txt             - Template for robots.txt
│   │
│   └──── /_default          - Base templates for list & singular pages
│   │   │ baseof.html        - Base template
│   │   │ list.html          - List/taxonomy template
│   │   │ single.html        - Singular page/post template
│   │
│   └──── /partials          - Partials
│       │ header.html    - Sites primary <header>
│       │ footer.html    - Sites primary <footer>
│   │
│   └──── /static            - Hugo static resources
│
│ .gitignore
│ LICENSE
│ README.md
│ config.toml                - Hugo configuration
│ postcss.config.js          - PostCSS configuration for Hugo Pipes
│ netlify.toml               - Netlify configuration
│ package.json
```

## Deploy to Netlify

You can deploy directly to Netlify using this button:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/insight-creative/Quintessence)
