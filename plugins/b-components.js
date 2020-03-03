import Vue from "vue"

import BCard from "~/components/Card.vue"
import BIcon from "~/components/Icon.vue"
import BNavbar from "~/components/Navbar.vue"
import BNavbarGroup from "~/components/NavbarGroup.vue"
import BCollapse from "~/components/Collapse.vue"
import BSteps from "~/components/Steps.vue"
import BQuestion from "~/components/Question.vue"
import BProgress from "~/components/Progress.vue"
import BFooter from "~/components/Footer.vue"

const components = {
  BCard,
  BIcon,
  BNavbar,
  BNavbarGroup,
  BCollapse,
  BSteps,
  BQuestion,
  BProgress,
  BFooter
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
