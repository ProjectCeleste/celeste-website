import Vue from "vue"

import BCard from "~/components/Card.vue"
import BIcon from "~/components/Icon.vue"
import BNavbar from "~/components/Navbar.vue"
import BCollapse from "~/components/Collapse.vue"

const components = { BCard, BIcon, BNavbar, BCollapse }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
