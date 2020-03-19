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
import Parallax from "~/components/Parallax.vue"
import GuideSection from "~/components/GuideSection.vue"
import Civilization from "~/components/Civilization.vue"

const components = {
  BCard,
  BIcon,
  BNavbar,
  BNavbarGroup,
  BCollapse,
  BSteps,
  BQuestion,
  BProgress,
  BFooter,
  Parallax,
  GuideSection,
  Civilization
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
