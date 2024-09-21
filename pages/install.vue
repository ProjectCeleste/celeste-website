<template>
  <section class="section">
    <div class="container">
      <div class="card">
        <div class="card-header">
          <div class="columns card-header-title section-title">
            <div class="column">
              <h2 class="title is-3 has-text-gold">
                Install
                <b-icon icon="download" size="is-large" icon-size="mdi-48px" />
              </h2>

              <h4 class="subtitle has-text-grey-lighter">
                Start your conquest now!
              </h4>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="columns is-multiline">
            <div class="column is-full">
              <div class="columns is-centered is-multiline">
                <div class="column is-6-desktop is-6-tablet is-12-mobile">
                  <a
                    class="button is-primary is-medium is-fullwidth"
                    href="https://github.com/ProjectCeleste/Celeste.Launcher/releases/latest/download/Celeste.Installer.exe"
                    rel="nofollow"
                  >
                    <b-icon
                      icon="download"
                      size="is-medium"
                      icon-size="mdi-30px"
                    />
                    <span>Download Installer</span>
                  </a>
                </div>
                <div class="column is-6-desktop is-6-tablet is-12-mobile">
                  <a
                    class="button is-link is-medium is-fullwidth"
                    href="steam://install/105430"
                    rel="nofollow"
                  >
                    <b-icon
                      icon="steam"
                      size="is-medium"
                      icon-size="mdi-30px"
                    />
                    <span>Install using Steam</span>
                  </a>
                </div>
              </div>
            </div>

            <div class="column table-of-contents is-full">
              <h5 class="subtitle is-5 has-text-grey-lighter">
                Table of Contents
              </h5>
              <ul class="content">
                <li>
                  <nuxt-link
                    v-scroll-to="{
                      el: '#install-standard'
                    }"
                    :to="{ hash: '#install-standard' }"
                  >
                    1: Standard Installation (Recommended)
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    v-scroll-to="{
                      el: '#install-steam'
                    }"
                    :to="{
                      hash: '#install-steam'
                    }"
                  >
                    2: Install Using Steam
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    v-scroll-to="{
                      el: '#install_on_linux'
                    }"
                    :to="{
                      hash: '#install_on_linux'
                    }"
                  >
                    3: Install on Linux
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    v-scroll-to="{
                      el: '#troubleshooting'
                    }"
                    :to="{
                      hash: '#troubleshooting'
                    }"
                  >
                    4: Troubleshooting
                  </nuxt-link>
                </li>
              </ul>
            </div>

            <div class="column is-full">
              <h4 id="install-standard" class="title is-4 has-text-gold">
                1: Standard Installation (Recommended)
              </h4>
              <ul class="content">
                <li>
                  The installer can be downloaded from the "Download Installer"
                  button above. You can also look at the video guide below for
                  step-by-step instructions.
                  <br />
                </li>
                <li>
                  <h5 class="subtitle is-5 has-text-grey-lighter">
                    Installation Video Guide
                    <br />
                  </h5>
                </li>
                <li>
                  <div
                    style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;"
                  >
                    <iframe
                      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                      src="https://www.youtube.com/embed/7CIN3CG3qns"
                      frameborder="0"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <br />
                </li>
              </ul>
            </div>
            <div class="column is-full">
              <h4 id="install-steam" class="title is-4 has-text-gold">
                2: Install with Steam
              </h4>
              <ul class="content">
                <li>
                  <b>1</b>: You need to install
                  <a
                    href="http://store.steampowered.com/about/"
                    rel="nofollow"
                    target="_blank"
                  >
                    Steam
                  </a>
                  and create an account if you haven't already.
                </li>
                <li>
                  <b>2</b>: Follow this link to install "Age Of Empires Online"
                  <a href="steam://install/105430" rel="nofollow">
                    steam://install/105430
                  </a>
                  <br />
                </li>
                <li>
                  <b>3</b>: Download
                  <a
                    href="https://github.com/ProjectCeleste/Celeste.Launcher/releases/latest"
                    rel="nofollow"
                  >
                    CelesteLauncher.zip
                  </a>
                  <br />
                </li>
                <li>
                  <b>4</b>: Extract CelesteLauncher.zip into the game's folder
                  (Where Steam downloaded the game)
                  <br />
                </li>
                <li>
                  <b>5</b>: Run "Celeste Launcher.exe" (Without the "exe" if
                  your file extensions are hidden) and register/login.
                  <br />
                </li>
                <li>
                  <b>6</b>: In the Celeste Launcher, click the
                  <img
                    src="~assets/img/HammerButton.png"
                    alt="hammer icon"
                    style="width: 37px; height: 40px; vertical-align: middle; margin-left: 5px; margin-right: 5px;"
                  />
                  hammer button and choose "Convert to Steam Game". Click
                  "Confirm" when prompted. This will make it so when you hit
                  "Play" within steam for Age of Empires Online, it will
                  correctly launch the Celeste Launcher.
                  <br />
                </li>
                <li>
                  <b>7</b>: Click the
                  <img
                    src="~assets/img/HammerButton.png"
                    alt="hammer icon"
                    style="width: 37px; height: 40px; vertical-align: middle; margin-left: 5px; margin-right: 5px;"
                  />
                  hammer button again and choose "Game Scan". Set the scan's
                  location to the game's root folder. Example: "C:\Program Files
                  (x86)\Steam\steamapps\common\Age of Empires Online" - Once
                  it's set, run the scan. This will download the rest of the
                  game files and patch the game.
                  <br />
                </li>
                <li>
                  <b>8</b>: The game is now installed. Press "Play" in the
                  Celeste Launcher to play the game!
                  <br />
                </li>
              </ul>
            </div>

            <div class="column is-full">
              <h4 id="install_on_linux" class="title is-4 has-text-gold">
                3: Install on Linux
              </h4>
              <ul class="content">
                <li>
                  The game can be played on Linux using the
                  <a
                    rel="nofollow"
                    href="https://lutris.net/games/age-of-empires-online/"
                    target="_blank"
                  >
                    Lutris installer.
                  </a>
                </li>
              </ul>
            </div>
            <div class="column is-full">
              <h4 id="troubleshooting" class="title is-4 has-text-gold">
                4: Troubleshooting
              </h4>
              <ul class="content">
                <li>
                  For error messages and general technical issues, first try
                  <a
                    href="https://www.projectceleste.com/faq"
                    rel="nofollow"
                    target="_blank"
                  >
                    the FAQ's technical issue section.
                  </a>
                </li>
                <li>
                  If the FAQ did not have an answer for you, visit our
                  <a
                    href="https://discordapp.com/invite/YbkZ9GZ"
                    rel="nofollow"
                    target="_blank"
                  >
                    discord server
                  </a>
                  and ask for help in the tech support channel.
                </li>
                <li>
                  Coop/PvP may not work out-of-the-box for everyone. In which
                  case, check out the
                  <a
                    href="https://www.reddit.com/r/projectceleste/wiki/how-to-play-coop-pvp-aoeo-celeste-fan-project/"
                    rel="nofollow"
                    target="_blank"
                  >
                    coop/pvp guide here.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Install",
  transition: "fade",
  scrollToTop: true,
  head() {
    return {
      title: "Install - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "Install - Age Of Empires Online Celeste"
        },
        {
          hid: "og:url",
          property: "og:url",
          content:
            (process.env.BASE_URL || "http://localhost:3000") + this.$route.path
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: "Install - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  background-image: url("~assets/img/background_11.jpg");
}

.monospace {
  color: $color--lighter;
  font-weight: bold;
}
</style>
