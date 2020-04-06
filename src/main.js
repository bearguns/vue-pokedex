import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { faVuejs } from "@fortawesome/free-brands-svg-icons";
import {
  faBug,
  faDragon,
  faBolt,
  faFistRaised,
  faFireAlt,
  faFeatherAlt,
  faLeaf,
  faGhost,
  faShovel,
  faIcicles,
  faSun,
  faFlaskPoison,
  faHeadSideBrain,
  faMountain,
  faWater,
  faCircle
} from "@fortawesome/pro-duotone-svg-icons";
library.add(
  faVuejs,
  faBug,
  faDragon,
  faBolt,
  faFistRaised,
  faFireAlt,
  faFeatherAlt,
  faLeaf,
  faGhost,
  faShovel,
  faIcicles,
  faSun,
  faFlaskPoison,
  faHeadSideBrain,
  faMountain,
  faWater,
  faCircle
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
