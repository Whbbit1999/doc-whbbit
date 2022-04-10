import DefaultTheme from "vitepress/theme";
import "./custom.css";

// 自定义组件
import Card from "../../components/card/index.vue";
import Site from "../../components/sites/sites.vue";
import LinkWrapper from "../../components/Link/LinkWrapper.vue";
import LinkItem from "../../components/Link/LinkItem.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 此处注册自定义组件
    app.component("w-card", Card);
    app.component("w-site", Site);
    app.component("w-link-item", LinkItem);
    app.component("w-link-wrapper", LinkWrapper);
  },
};
