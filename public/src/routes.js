/*!

=========================================================
* Now UI Dashboard React - v1.5.1
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/students",
    name: "Students",
    icon: "design_image",
    component: Students,
    layout: "/admin"
  },
  {
    path: "/questions",
    name: "Questions",
    icon: "location_map-big",
    component: Questions,
    layout: "/admin"
  },
  {
    path: "/answers",
    name: "Answers",
    icon: "ui-1_bell-53",
    component: Answers,
    layout: "/admin"
  },
  {
    path: "/grades",
    name: "Grade",
    icon: "users_single-02",
    component: Grades,
    layout: "/admin"
  },
];
export default dashRoutes;
