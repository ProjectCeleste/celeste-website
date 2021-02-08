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
                <div class="column is-4-desktop is-6-tablet is-12">
                  <a
                    class="button is-primary is-medium is-fullwidth"
                    href="steam://install/105430"
                    rel="nofollow"
                  >
                    <b-icon
                      icon="steam"
                      size="is-medium"
                      icon-size="mdi-36px"
                    />
                    <span>Install using Steam</span>
                  </a>
                </div>
                <div class="column is-4-desktop is-6-tablet is-12">
                  <a
                    class="button is-primary is-medium is-fullwidth"
                    href="https://github.com/ProjectCeleste/Celeste_Launcher/releases/latest"
                    rel="nofollow"
                    target="_blank"
                  >
                    <b-icon
                      icon="download"
                      size="is-medium"
                      icon-size="mdi-36px"
                    />
                    <span>Download Celeste Patch</span>
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
                      el: '#install_the_original_game'
                    }"
                    :to="{ hash: '#install_the_original_game' }"
                  >
                    1: Install The Original Game
                  </nuxt-link>
                </li>
                <li>
                  <ul>
                    <li>
                      <nuxt-link
                        v-scroll-to="{
                          el: '#install_the_original_game_using_steam'
                        }"
                        :to="{ hash: '#install_the_original_game_using_steam' }"
                      >
                        [OPTION 1] Install the original game using Steam
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link
                        v-scroll-to="{
                          el: '#install_the_original_game_without_using_steam'
                        }"
                        :to="{
                          hash: '#install_the_original_game_without_using_steam'
                        }"
                      >
                        [OPTION 2] Install the original game without using Steam
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
                        Install the game on Linux
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <nuxt-link
                    v-scroll-to="{
                      el: '#install_celeste_fan_project_patch'
                    }"
                    :to="{
                      hash: '#install_celeste_fan_project_patch'
                    }"
                  >
                    2: Install Celeste Fan Project Patch
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    v-scroll-to="{
                      el: '#play_aoeo_celeste_fan_project'
                    }"
                    :to="{
                      hash: '#play_aoeo_celeste_fan_project'
                    }"
                  >
                    3: Play AOEO Celeste Fan Project
                  </nuxt-link>
                </li>
                <li>
                  <ul>
                    <li>
                      <nuxt-link
                        v-scroll-to="{
                          el:
                            '#play_aoeo_celeste_fan_project_using_celeste_launcher'
                        }"
                        :to="{
                          hash:
                            '#play_aoeo_celeste_fan_project_using_celeste_launcher'
                        }"
                      >
                        [OPTION 1] Play AOEO Celeste Fan Project Using Celeste
                        Launcher
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link
                        v-scroll-to="{
                          el:
                            '#play_aoeo_celeste_fan_project_without_using_celeste_launcher'
                        }"
                        :to="{
                          hash:
                            '#play_aoeo_celeste_fan_project_without_using_celeste_launcher'
                        }"
                      >
                        [OPTION 2 (ADVANCED)] Play AOEO Celeste Fan Project
                        Without Using Celeste Launcher
                      </nuxt-link>
                    </li>
                  </ul>
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
              <h4
                id="install_the_original_game"
                class="title is-4 has-text-gold"
              >
                1: Install The Original Game
              </h4>

              <h5
                id="install_the_original_game_using_steam"
                class="subtitle is-5 has-text-grey-lighter"
              >
                [OPTION 1] Install the original game using Steam
              </h5>

              <ul class="content">
                <li>
                  <b>1</b>: You need to install
                  <a
                    href="http://store.steampowered.com/about/"
                    rel="nofollow"
                    target="_blank"
                  >
                    STEAM
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
              </ul>
              <h5
                id="install_the_original_game_without_using_steam"
                class="subtitle is-5 has-text-grey-lighter"
              >
                [OPTION 2] Install the original game without using Steam
              </h5>
              <ul class="content">
                <li>
                  <b>1</b>: You need to download the game using this link
                  <a
                    href="http://www.mediafire.com/file/afo6kcizm5qhl4e/AOEO_Installer.zip"
                    rel="nofollow"
                    target="_blank"
                  >
                    AOEO_Setup.exe
                  </a>
                </li>
                <li>
                  <b>2</b>: Once the download is complete you can install the
                  game (You can install in the default installation directory,
                  or you can install the game in a custom location).
                </li>
              </ul>
              <h5
                id="install_on_linux"
                class="subtitle is-5 has-text-grey-lighter"
              >
                Install the game on Linux
              </h5>
              <ul class="content">
                <li>
                  The game can be played on Linux using the
                  <a
                    rel="nofollow"
                    href="https://lutris.net/games/age-of-empires-online/"
                    target="_blank"
                  >
                    Lutris installer
                  </a>
                  .
                </li>
              </ul>
            </div>

            <div class="column is-full">
              <h4
                id="install_celeste_fan_project_patch"
                class="title is-4 has-text-gold"
              >
                2: Install Celeste Fan Project Patch
              </h4>
              <ul class="content">
                <li>
                  <b>1:</b> You need to download
                  <a
                    href="https://github.com/ProjectCeleste/Celeste_Launcher/releases/latest"
                    rel="nofollow"
                    target="_blank"
                  >
                    CelesteLauncher.zip
                  </a>
                </li>
                <li>
                  <b>2:</b> Once the download is finished you'll need to extract
                  the .zip file's contents.
                  <ul class="list-disc">
                    <li>
                      If you installed through Steam, extract the files directly
                      into the "Age Of Empires Online" folder within your steam
                      library. (By default, this is located in
                      <span class="monospace">
                        C:\Program Files (x86)\Steam\steamapps\common\Age Of
                        Empires Online
                      </span>
                      )
                    </li>
                    <li>
                      Otherwise, if you did not use Steam, create a folder in
                      your Documents folder (Named anything you'd like) and
                      extract the contents there.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>3:</b> You can create a shortcut to the Celeste Launcher by
                  right-clicking the Celeste Launcher's executable file then
                  clicking "Copy To > Desktop (Shortcut)". You will use the
                  celeste launcher (or that shortcut) to open the game.
                </li>
              </ul>
              <p class="content">
                <b>Note:</b> If you used Steam to install the game and want to
                use Steam to launch the Celeste Launcher correctly, then click
                on the <b>Hammer Button</b> in the launcher, then "Convert to
                Steam Game". Steam should now launch the Celeste Launcher
                instead of the old, original launcher that is broken.
              </p>
            </div>

            <div class="column">
              <h4
                id="play_aoeo_celeste_fan_project"
                class="title is-4 has-text-gold"
              >
                3: Play AOEO Celeste Fan Project
              </h4>
              <h5
                id="play_aoeo_celeste_fan_project_using_celeste_launcher"
                class="subtitle is-5 has-text-grey-lighter"
              >
                [OPTION 1] Play AOEO Celeste Fan Project Using Celeste Launcher
              </h5>
              <ul class="content">
                <li>
                  <b>1</b>: Launch "Celeste Launcher.exe" by using the shorcut
                  on your desktop created during previous step
                  <a
                    v-scroll-to="{
                      el: '#install_celeste_fan_project_patch'
                    }"
                  >
                    (Install Celeste Fan Project Patch)
                  </a>
                  .
                </li>
                <li>
                  <b>2</b>: Click on register if don't have already an account,
                  if not go to step 4.
                </li>
                <li>
                  <b>3</b>: Register your account (you need to use an valid
                  email).
                </li>
                <li><b>4</b>: Login using your credetentials.</li>
                <li>
                  <b>5</b>: Set the game language in celeste launcher if
                  incorrect.
                </li>
                <li><b>6</b>: Click "PLAY" and enjoy the game :).</li>
              </ul>

              <h5
                id="play_aoeo_celeste_fan_project_without_using_celeste_launcher"
                class="subtitle is-5 has-text-grey-lighter"
              >
                [OPTION 2 (ADVANCED)] Play AOEO Celeste Fan Project Without
                Using Celeste Launcher
              </h5>

              <ul class="content">
                <li>
                  <b>1</b>: You need to be already registered, if not use
                  "Celeste Launcher.exe" to do it.
                </li>
                <li>
                  <b>2</b>: Navigate to your game folder and create an shortcut
                  for "Spartan.exe".
                </li>
                <li>
                  <b>3</b>: Right click on the new shortcut, then press
                  "Propriety" and edit "Target" field like in this example (you
                  need to change credential with yours):
                  <span class="monospace">
                    "C:\Program Files (x86)\Age Of Empires Online\Spartan.exe"
                    --email "mymail@mail.com" --password "mypassword1234"
                  </span>
                </li>
              </ul>
            </div>

            <div class="column is-full">
              <h4 id="troubleshooting" class="title is-4 has-text-gold">
                4: Troubleshooting
              </h4>

              <p class="content">
                Follow these steps if you have any issue to run the game and/or
                "Celeste Launcher.exe".
              </p>
              <ul class="content">
                <li>
                  <b>1:</b> Download and install
                  <a
                    href="https://aka.ms/vs/16/release/vc_redist.x86.exe"
                    rel="nofollow"
                    target="_blank"
                  >
                    Visual C++ Runtime AIO
                  </a>
                </li>
                <li>
                  <b>2:</b> Download and install
                  <a
                    href="https://downloads.projectceleste.com/static/dxwebsetup.exe"
                    rel="nofollow"
                    target="_blank"
                  >
                    DirectX End-User Runtime
                  </a>
                </li>
                <li>
                  <b>3:</b> Download and install
                  <a
                    href="https://www.microsoft.com/en-us/download/details.aspx?id=21"
                    rel="nofollow"
                    target="_blank"
                  >
                    Microsoft .NET Framework 3.5
                  </a>
                </li>
                <li>
                  <b>4:</b> Download and install
                  <a
                    href="https://www.microsoft.com/en-US/download/details.aspx?id=30653"
                    rel="nofollow"
                    target="_blank"
                  >
                    Microsoft .NET Framework 4.5
                  </a>
                </li>
                <li>
                  <b>5:</b> Download and install
                  <a
                    href="https://support.microsoft.com/en-us/help/2999226/update-for-universal-c-runtime-in-windows"
                    rel="nofollow"
                    target="_blank"
                  >
                    Windows Universal CRT
                  </a>
                </li>
              </ul>

              <p class="content">
                Additional step (Windows 8 and up only):
              </p>
              <ul class="content">
                <li><b>5.1:</b> Right click on "Start" button.</li>
                <li><b>5.2:</b> Click on "Programs and Features".</li>
                <li>
                  <b>5.3:</b> Click on the label "Programs and Features" (Top
                  Right of the opened windows in previous step).
                </li>
                <li><b>5.4:</b> Click "Turn Windows features on or off".</li>
                <li>
                  <b>5.5:</b> Search for "Legacy Components" and expand it.
                </li>
                <li>
                  <b>5.6:</b> Check the box for DirectPlay if not already
                  checked.
                </li>
                <li><b>5.7:</b> Confirm new settings by clicking "OK".</li>
              </ul>

              <p class="content">
                If you have any issue to connect to server with the game and/or
                "Celeste Launcher" you need to allow "Spartan.exe" and "Celeste
                Launcher.exe" in your firewall. If you use the default Windows
                Firewall follow this
                <a
                  href="https://www.howtogeek.com/howto/uncategorized/how-to-create-exceptions-in-windows-vista-firewall/"
                  rel="nofollow"
                  target="_blank"
                >
                  guide (by howtogeek.com)
                </a>
                , and if you use another one refer to his documentation.
              </p>

              <p class="content">
                If you have trouble playing coop or pvp, read
                <a
                  href="https://www.reddit.com/r/projectceleste/wiki/how-to-play-coop-pvp-aoeo-celeste-fan-project"
                  rel="nofollow"
                  target="_blank"
                >
                  this guide
                </a>
                .
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
