import DefaultTheme from "vitepress/theme";
import "./custom.css";

// 自定义组件
import Button from "../../components/button/index.vue";
import Card from "../../components/card/index.vue";
import Site from "../../components/sites/sites.vue";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 此处注册自定义组件
    app.component("w-button", Button);
    app.component("w-card", Card);
    app.component("w-site", Site);
  },
};
