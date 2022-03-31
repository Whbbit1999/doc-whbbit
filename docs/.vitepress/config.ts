import nav from "./nav";
import sidebar from "./sidebar";

const config = {
  title: "whbbit-docs",
  description: "",
  base: "",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    logo: "/logo.png",
    algolia: {
      indexName: "",
      appId: "",
      apiKey: "",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vue" },
      { icon: "twitter", link: "https://twitter.com/vuejs" },
      { icon: "discord", link: "https://discord.com/invite/HBherRA" },
    ],
    sidebar,
    nav,
  },
};

export default config;
