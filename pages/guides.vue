<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <div class="columns">
            <aside class="menu column is-narrow">
              <div
                class="columns card-header-title section-title is-variable is-0 is-paddingless"
              >
                <div class="column">
                  <h2 class="title is-3 has-text-gold">
                    Guides
                    <b-icon icon="book" size="is-large" icon-size="mdi-48px" />
                  </h2>
                </div>
              </div>
              <p class="menu-label">
                PvE
              </p>
              <ul class="menu-list">
                <li><a>Capital City</a></li>
                <li><a>Gear</a></li>
                <li><a>Crafting</a></li>
                <li><a>Workshops</a></li>
                <li><a>Warehouses</a></li>
              </ul>
              <p class="menu-label">
                PvP
              </p>
              <ul class="menu-list">
                <li><a>Basic Questions</a></li>
                <li><a>Fundamentals</a></li>
                <li>
                  <a class="is-active">Build orders</a>
                  <ul>
                    <li><a>Barracks into Town Center</a></li>
                    <li><a>Town Center First</a></li>
                    <li><a>Dock First</a></li>
                  </ul>
                </li>
                <li><a>Early Game Tips</a></li>
                <li><a>Unit Control</a></li>
                <li><a>Economy Management</a></li>
                <li><a>Scouting Tips</a></li>
              </ul>
            </aside>
            <div class="column">
              <h4
                class="title is-4 has-text-centered has-text-white guide-title"
              >
                Build Orders
              </h4>
              <div class="tabs is-centered">
                <ul>
                  <li class="is-active">
                    <a>Basic</a>
                  </li>
                  <li><a>Intermediate</a></li>
                  <li><a>Advanced</a></li>
                </ul>
              </div>
              <div class="is-flex is-vcentered content">
                <div>
                  <p class="content title is-5 has-text-white">
                    1. Always Make Villagers
                  </p>
                  <p class="content">
                    Constantly train Villagers until you have 70-90 of them. The
                    only time your Town Center should not be training Villagers
                    is when you are aging up or researching something in it. If
                    you follow this simple yet critically important rule, you
                    will quickly see improved results in your matches.
                  </p>
                </div>
                <div class="guide-img">
                  <img src="~/assets/img/guides/sample.png" />
                </div>
              </div>
              <p class="content title is-5 has-text-white">
                2. Avoid Idle Villagers
              </p>
              <p class="content">
                Idle Villagers are nothing but a detriment to your economy.
                Constantly pay attention to the Idle Villager notification and
                make sure to assign a Hotkey for it (Default Hotkey: V) so
                you’re always ready to task your idle Villagers to get to work
                and not stand idle. Idle Villagers are useless Villagers!
              </p>

              <p class="content title is-5 has-text-white">
                3. Spend your resources!
              </p>
              <p class="content">
                Try and keep all of your resources spent at all times. The only
                time you should stop spending resources is for when you are
                saving up to advance to the next Age or to research an expensive
                upgrade. If you are starting to stockpile on a certain resrouce,
                don&apos;t hesitate to move your Villagers from one resource
                type to another!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  transition: "fade"
}
</script>

<style lang="scss" scoped>
.section {
  background-image: url("~assets/img/background_16.png");
}

.guide-title {
  padding-top: 0.75rem;
}

.guide-img {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
