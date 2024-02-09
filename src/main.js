import { createApp } from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import of brands icons */
import {
  faFacebookF,
  faYoutube,
  faTwitter,
  faPinterestP,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

/* import of solid icons */
import {
  faHeart as fasHeart,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

/* import of regular icons */
import {
  faUser,
  faHeart as farHeart,
} from "@fortawesome/free-regular-svg-icons";

/* add icons to the imported library */
library.add(
  faFacebookF,
  faYoutube,
  faTwitter,
  faPinterestP,
  faInstagram,
  faBagShopping,
  faUser,
  fasHeart,
  farHeart
);

// app creation
const app = createApp(App);

// global declaration of our icons
app.component("font-awesome-icon", FontAwesomeIcon);

// app mounting
app.mount("#app ");
