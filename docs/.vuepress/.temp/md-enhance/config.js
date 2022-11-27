import { defineClientConfig } from "@vuepress/client";
    import { defineAsyncComponent } from "vue";
import ChartJS from "/srv/docs/soluciontotal/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS";
import ECharts from "/srv/docs/soluciontotal/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts";
import CodeDemo from "/srv/docs/soluciontotal/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo";
import CodeTabs from "/srv/docs/soluciontotal/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs";
import FlowChart from "/srv/docs/soluciontotal/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart";
import Mermaid from "/srv/docs/soluciontotal/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid";
import Presentation from "/srv/docs/soluciontotal/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "/srv/docs/soluciontotal/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "/srv/docs/soluciontotal/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "/srv/docs/soluciontotal/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import Tabs from "/srv/docs/soluciontotal/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs";
const Playground = defineAsyncComponent(() => import("/srv/docs/soluciontotal/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground"));
import "/srv/docs/soluciontotal/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "/srv/docs/soluciontotal/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tex.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("ECharts", ECharts);
    app.component("CodeDemo", CodeDemo);
    app.component("CodeTabs", CodeTabs);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    app.component("Tabs", Tabs);
    app.component("Playground", Playground);
    
  }
});