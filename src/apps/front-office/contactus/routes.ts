import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import ContactusPage from "./pages/ContactusPage";

publicRoutes([
  {
    path: URLS.contactUs,
    component: ContactusPage,
  },
]);
