import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import NotFound from "../views/NotFound.vue"

import Jobs from "../views/jobs/Jobs.vue"
import JobsDetails from "../views/jobs/JobsDetails.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/Jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "JobsDetails",
    component: JobsDetails,
    props: true,
  },
  //redirect
  {
    path: "/all-jobs",
    redirect: "/Jobs",
  },
  //catchAll 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router