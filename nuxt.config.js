export default {
  ssr: true,

  target: "static",

  head: {
    htmlAttrs: {
      lang: "en-GB"
    },
    title: "Craig Turner",
    meta: [
      { charset: "utf-8" },
      { name: "HandheldFriendly", content: "True" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "apple-mobile-web-app-title", content: "Craig Turner" },
      {
        hid: "description",
        name: "description",
        content: "Product Designer and Frontend Developer"
      },
      {
        hid: "description",
        name: "description",
        content: "CEO & Founder of Confido Talent"
      },
      { property: "og:site_name", content: "Craig Turner" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://www.craigturner.me"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Craig Turner"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "CEO & Founder of Confido Talent"
      },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://res.cloudinary.com/kejk/image/upload/v1611777093/OG_Image_arn6op.png"
      },
      { property: "og:image:width", content: "740" },
      { property: "og:image:height", content: "300" },

      { name: "twitter:site", content: "@CraigTu30513818" },
      { name: "twitter:creator", content: "@CraigTu30513818" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://www.craigturner.me"
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Craig Turner"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "CEO & Founder of Confido Talent"
      },
      {
        hid: "twitter:image:src",
        name: "twitter:image:src",
        content:
          "https://res.cloudinary.com/kejk/image/upload/v1611777093/Twitter_Image_czvfzl.png"
      }
    ],
    link: [
      { rel: "icon", href: "/favicon.svg" },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "mask-icon", href: "/mask-icon.svg", color: "#667EEA" },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        href: "/apple-icon.png"
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "57x57",
        href: "/apple-icon.png"
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "60x60",
        href: "/apple-icon.png"
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "72x72",
        href: "/apple-icon.png"
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "76x76",
        href: "/apple-icon.png"
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "114x114",
        href: "/apple-icon.png"
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "120x120",
        href: "/apple-icon.png"
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "144x144",
        href: "/apple-icon.png"
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "152x152",
        href: "/apple-icon.png"
      },
      {
        rel: "apple-touch-icon",
        type: "image/x-icon",
        sizes: "180x180",
        href: "/apple-icon.png"
      },
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://www.craigturner.me"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
      }
    ]
  },

  plugins: [{ src: "~/plugins/vue-moment.js", ssr: true }],

  components: true,

  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/moment"
  ],

  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://www.craigturner.me",
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    routes: ["/", "/about", "/thoughts", "/thoughts/_id", "/uses"].map(
      route => ({
        url: route,
        changefreq: "monthly",
        priority: 1,
        lastmodISO: new Date().toISOString().split("T")[0]
      })
    )
  },

  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/apollo",
    "@nuxtjs/feed",
    "@nuxtjs/sitemap",
    "vue-scrollto/nuxt"
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://graphql.cosmicjs.com/v2"
      }
    }
  },

  axios: {
    baseURL: "https://graphql.cosmicjs.com/v2"
  },

  feed: [
    // {
    // 	path: "/feed.xml",
    // 	create, // outside the default export at the top of the config file
    // 	cacheTime: 1000 * 60 * 15,
    // 	type: "rss2",
    // 	data: ["blog", "xml"],
    // },
  ],

  build: {}
};
