/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Divisi from "views/Divisi";
import Login from "views/Login";
import Pegawai from "views/Pegawai";
import SuratKeluarMasuk from "views/SuratKeluarMasuk";
import SuratTugas from "views/SuratTugas";
import Users from "views/Users";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-chart-pie-35",
    component: Login,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "Users",
    icon: "nc-icon nc-single-02",
    component: Users,
    layout: "/admin"
  },
  {
    path: "/divisi",
    name: "Divisi",
    icon: "nc-icon nc-layers-3",
    component: Divisi,
    layout: "/admin"
  },
  {
    path: "/pegawai",
    name: "Pegawai",
    icon: "nc-icon nc-satisfied",
    component: Pegawai,
    layout: "/admin"
  },
  {
    path: "/surat-tugas",
    name: "Surat Tugas",
    icon: "nc-icon nc-email-83",
    component: SuratTugas,
    layout: "/admin"
  },
  {
    path: "/surat-keluar-masuk",
    name: "Surat Keluar Masuk",
    icon: "nc-icon nc-bullet-list-67",
    component: SuratKeluarMasuk,
    layout: "/admin"
  },
];

export default dashboardRoutes;
