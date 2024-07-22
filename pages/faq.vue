<template>
  <section class="section columns">
    <div class="container column is-12">
      <div class="card">
        <div class="card-header">
          <div class="columns card-header-title section-title">
            <div class="column">
              <h2 class="title is-3 has-text-gold">
                FAQ
                <b-icon
                  icon="comment-question"
                  size="is-large"
                  icon-size="mdi-48px"
                />
              </h2>

              <h3 class="subtitle has-text-grey-lighter">
                Any question?
              </h3>
              <p class="content">
                Learn everything you need to know and find answers to your
                questions in the FAQ.
              </p>
            </div>
            <div class="column is-narrow is-hidden-mobile">
              <img src="~assets/img/faq.webp" class="section-icon" />
            </div>
          </div>
        </div>
        <div class="card-content">
          <h3 class="subtitle has-text-grey-lighter">
            General
          </h3>
          <div class="columns is-multiline">
            <div
              v-for="(question, key) of questions"
              :key="key"
              class="column is-full"
            >
              <b-collapse :open="false">
                <span slot="header" class="faq-header">{{
                  question.title
                }}</span>
                <div
                  slot="content"
                  class="faq-content"
                  v-html="question.content"
                />
              </b-collapse>
            </div>
          </div>
        </div>
        <div class="card-content">
          <h3 class="subtitle has-text-grey-lighter">
            Technical Issues
          </h3>
          <div class="columns is-multiline">
            <div
              v-for="(question, key) of techquestions"
              :key="key"
              class="column is-full"
            >
              <b-collapse :open="false">
                <span slot="header" class="faq-header">{{
                  question.title
                }}</span>
                <div
                  slot="content"
                  class="faq-content"
                  v-html="question.content"
                />
              </b-collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  transition: "fade",
  scrollToTop: true,
  data() {
    return {
      questions: [
        {
          title: "What is Age of Empires Online?",
          content: `<p>Age of Empires Online is the next evolution in the best-selling real-time strategy (RTS) franchise Age of Empires. Developed by Microsoft Game Studios, Age of Empires Online invites players to create a living, growing online world, shared with friends and friendly rivals around the world. Marrying fresh features with classic RTS gameplay, Age of Empires Online pays tribute to the original game while incorporating a new look, feel, and approach that appeals to long-time fans, newcomers, and everyone in between.</p>`
        },
        {
          title: "Is it really free to play?",
          content: `<p>Yes, Age of Empires Online is entirely free to play!</p>`
        },
        {
          title:
            "Is it Pay to Win? Does my Level and Gear matter when playing PvP?",
          content: `<p>Absolutely not! Level and Gear only matters when playing against the AI. When playing against real players, those will only provide a visual upgrade for units and have absolutely no effects on Stats whatsoever.</p>`
        },
        {
          title: "Is there a subscription fee?",
          content: `<p>No, there are no subscription fees to play Age of Empires Online.</p>`
        },
        {
          title: "What are the system requirements for Age of Empires Online?",
          content: `<ul class="ul is-marginless">
                        <li><b>Processor:</b> Dual Core, 2Ghz or higher</li>
                        <li><b>Video card:</b> 128 MB Shader 2 supported card or higher</li>
                        <li><b>Memory:</b> Win XP SP3/Vista Home Basic – 1GB; Vista Premium, Ultimate/Windows 7 (32 bit) – 1.5GB; Windows 7 (64 bit) – 2.5GB</li>
                        <li><b>Hard drive space:</b> 5 GB required for downloads</li>
                        <li><b>Internet:</b> Broadband internet required</li>
                    </ul>`
        },
        {
          title: "What platforms is the game available on?",
          content: `<p>Age of Empires Online is available via Steam in English, German, French, Spanish, Brazilian Portuguese and Simplified Chinese.</p>`
        },
        {
          title: "Is an internet connection required?",
          content: `<p>Yes. In Age of Empires Online your empire is part of a persistent world with an active global community requiring you to be logged in and online to participate.</p>`
        },
        {
          title: "How is downloadable content released?",
          content: `<p>All new downloadable content will be available for free to all players automatically with new Patches.</p>`
        },
        {
          title: "What civilizations are available to play?",
          content: `<p>The campaigns in Age of Empires Online are based on historical periods that provide rich settings for storytelling. Choose from a number of historic civilizations including the Babylonians, Celts, Egyptians, Greeks, Romans, Persians and the Norse. We are proud to announce that the Indian civilization will be available to play soon as well! History provides the setting; from there, you make your own story.</p>`
        },
        {
          title: "What is the Capital City? How does it work?",
          content: `<p>The Capital City is your civilization’s home base and where you’ll start building your new empire! By utilizing blueprints you find throughout your campaign, as well as vanity items that can be earned, you can customize your Capital City as you see fit. Blueprints will allow you to build new stores, training halls, historic monuments, gardens, and so much more wherever you see fit. And since your Capital City lives online it will continue to gather resources even when you aren’t logged in!</p>` // Other players are also able to visit your city while you’re offline and purchase items from your stores.
        },
        {
          title: "Will there be consequences for not playing?",
          content: `<p>No, there is no penalty for not playing. Your city can not be attacked and you will not lose levels if you don’t play for a period of time.</p>`
        },
        {
          title: "How can I support the project?",
          content: `<p>You can help spread the word around the project by telling your friends! Project Celeste is completely free and always will be. However, we gladly accept donations for our overhead costs, which are larger than we have budgeted. If you want to support us, you can do so <a href="https://forums.projectceleste.com/donations/project-celeste-donations.2/campaign" rel="nofollow" target="_blank">here</a>. Thank you so much for your help!</p>`
        },
        {
          title: "Where can I find additional help?",
          content: `<p>Please <a href="https://discordapp.com/invite/YbkZ9GZ" rel="nofollow" target="_blank">join us on discord</a>.</p>`
        }
      ],
      techquestions: [
        {
          title:
            'When I try to launch the game, I get an error saying "The code execution cannot proceed because xlive.dll was not found.", How can I fix this?',
          content: `<p>If xlive.dll is missing then running a "Gamescan" within the Celeste Launcher will fix this. It'll be downloaded alongside any other game files that are missing, corrupted, or outdated.</p>`
        },
        {
          title:
            "I'm getting an error for a different missing DLL file other than xlive.dll. How do I fix this?",
          content: `<p>You need to install all of the game's prerequisites and dependencies.</p>
          <p>DLL files with "dx", "d9" or "d3" within the name are generally related to DirectX. <a href="https://downloads.projectceleste.com/static/dxwebsetup.exe" rel="nofollow" target="_blank">Download it here</a>.</p>
          <p>MSVCR*.dll, VCRUNTIME*.dll, MSVCP*.dll, UCRTBASE.dll, API-MS-WIN-CRT*.dll and CONCRT*.dll Are related to Visual C++ Runtime/Redistributable or Windows Universal CRT <a href="https://aka.ms/vs/16/release/vc_redist.x86.exe" rel="nofollow" target="_blank">Download the C++ Runtime here</a> and the <a href="https://support.microsoft.com/en-us/help/2999226/update-for-universal-c-runtime-in-windows" rel="nofollow" target="_blank">Universal CRT here</a>.</p>
          <p>Any other missing DLLs (other than xlive.dll, for which, a "Game Scan" is required as mentioned in the above FAQ question) are likely related to the .NET Framework versions required by the game or launcher. Download the <a href="https://www.microsoft.com/en-us/download/details.aspx?id=21" rel="nofollow" target="_blank">.NET Framework 3.5 here</a> and the <a href="https://www.microsoft.com/en-US/download/details.aspx?id=30653" rel="nofollow" target="_blank">.NET Framework 4.5 here</a>.</p>`
        },
        {
          title: "Why do I get kicked out of the game when I join a party?",
          content: `<p>If the error you get is "Connection to the Age of Empires Online Chat Server Was Lost" then you or your partner most likely have too many quests active. Try abandoning some first.</p>`
        },
        {
          title:
            'Why do I get a "Game Failed to Launch" error in chat when trying to play with other players? (Co-op or PvP)',
          content: `<p>You and/or the other players you tried to play with may need to do some extra setup in order to get Co-op/PvP working.</p>
          <p>Please see <a href="https://www.reddit.com/r/projectceleste/wiki/how-to-play-coop-pvp-aoeo-celeste-fan-project" rel="nofollow" target="_blank">this guide</a> for information on what to do.</p>
          <p>Tip: To know which player(s) may need to follow the guide, you can test a coop game between each player individually with someone else that knows for sure that their co-op works with anyone.</p>`
        },
        {
          title:
            'How do I fix the "Game Initialization failed. [...] (CORE)" error?',
          content: `<p>In the Celeste Launcher, click the hammer button and then choose "Windows Features". Click "Enable" for "DirectPlay". If this does not solve the issue, you can also try <a href="https://youtu.be/ldkte26nbdU" rel="nofollow" target="_blank">this video</a>.</p>`
        },
        {
          title:
            'Why am I getting kicked out of the game with the "The Age of Empires Online Server is not available at this time" error?',
          content: `<p>This usually happens when your connection to the game drops or gets interrupted for too long. Slower internet connections make this more likely as well.</p>`
        },
        {
          title:
            'How do I fix the "Early std::exception - Failed opening file <My Documents>\\Spartan\\xlive.log" error message when trying to launch the game?',
          content: `<p>Sometimes this is a filesystem permission issue, in which case running the launcher as an administrator can solve it. However, the most common cause is OneDrive. If the location to the xlive.log file in the error message contains a OneDrive folder, this is likely the issue.</p>
          <p>If this is the case, Uninstalling OneDrive should solve the issue. But of course, if you use OneDrive and want to keep it installed, then you may not want to do that. If you do want to keep OneDrive but it's causing this issue for you, then join the <a href="https://discordapp.com/invite/YbkZ9GZ" rel="nofollow" target="_blank">discord server</a> and ask for help with this.</p>`
        },
        {
          title:
            "My game is crashing during specific quests. What should I do to fix this problem?",
          content: `<p>Usually if you are crashing only on certain quests, abandoning those quests and re-accepting them fixes the issue. If not, a "Gamescan" within the Celeste Launcher may help in case the files are corrupted or outdated.</p>`
        },
        {
          title:
            'I got an error while playing a quest that said "Random map <map name> Caused an unhandled exception". What should I do?',
          content: `<p>First, try running a "Gamescan" within the Celeste Launcher. Re-open the game and see if that fixes the issue. If it did not help, make sure that any antivirus or antimalware applications you have installed are excluding the game's and launcher's files just in case.</p>`
        },
        {
          title:
            'When I tried to log in, I got an error saying "Login to "Celeste Fan Project" Server failed (Invalid xlive.dll)". What can I do?',
          content: `<p>Run a "Gamescan" within the Celeste Launcher in order to update your game's files. (Including xlive.dll)</p>`
        },
        {
          title:
            'My launcher had an error that said "An unexpected error occurred.". What should I do?',
          content: `<p>Check the "Logs" folder for the most recent log files. (The "Logs" folder will be wherever your launcher files are) - Inside of the logs, look for any errors or warnings (Not lines that begin with "[INF]") then join <a href="https://discordapp.com/invite/YbkZ9GZ" rel="nofollow" target="_blank">us on discord</a> to ask for help in the "#tech-support" channel.</p>
          <p>When you ask for help on discord, please include any errors you found in the log files.</p>`
        },
        {
          title:
            "I'm experiencing stutters or lag during specific actions such as placing a rally flag",
          content: `<p>On AMD Radeon 7000 & 6000 series graphics cards, certain situations are known to be able to cause framerate drops. (Such as setting a rally point flag for a building)
        Disabling Smart Access Memory within Adrenaline before playing Age of Empires Online seems to resolve this. (You can re-enable SAM when not playing Age of Empires Online)</p>
        <p>If you are not playing on the graphics cards mentioned above, then this should not apply to you. Make sure you meet the minimum system requirements below.</p>
        <ul class="ul is-marginless">
            <li><b>Processor:</b> Dual Core, 2Ghz or higher</li>
            <li><b>Video card:</b> 128 MB Shader 2 supported card or higher</li>
            <li><b>Memory:</b> Win XP SP3/Vista Home Basic – 1GB; Vista Premium, Ultimate/Windows 7 (32 bit) – 1.5GB; Windows 7 (64 bit) – 2.5GB</li>
            <li><b>Hard drive space:</b> 5 GB required for downloads</li>
            <li><b>Internet:</b> Broadband internet required</li>
        </ul>`
        },
        {
          title:
            'I\'m getting a runtime error that says "This application has requested the Runtime to terminate it in an unusual way". How can I fix this error?',
          content: `<p>This error is pretty vague and can mean a several things, but generally the common fix is to reinstall your Visual C++ Redistributable Runtimes. Once they are uninstalled, use the link to the Visual C++ Runtime found in the installation guide to reinstall them.</p>
          <p>Additionally, the Celeste Launcher's "Limit CPU Cores" option may fix this issue on some CPUs.</p>`
        },
        {
          title:
            'When I press "Play" in the launcher, I get an error saying "An error occured in a xlive function! Login to Celeste Fan Project Server failed (timeout)". How do I fix this?',
          content: `<p>Usually this is because your xlive.dll file is out of date or corrupted. Running a "Gamescan" within the Celeste Launcher resolves this.</p>
          <p>Another, less likely, possibility is that the connection to the game servers is timing out due to something on your network/computer interfering with the connection (or other reasons). Try using the Celeste Launcher's "Firewall Helper" to make sure the launcher and game are allowed within the Windows firewall. Otherwise, make sure any software or firewall settings are not blocking the launcher or game.</p>`
        },
        {
          title:
            'When trying to register for a game account within the Celeste Launcher, I\'m getting an error that says "You are not allowed to do that". What do I do?',
          content: `<p>This can be a few things but mainly make sure are not trying to create multiple accounts when you already have one. This is against the rules. Also make sure that your email and password only contain fairly standard characters.</p>`
        },
        {
          title:
            "I still need more help with a technical issue or error message!",
          content: `<p>Please <a href="https://discordapp.com/invite/YbkZ9GZ" rel="nofollow" target="_blank">join us on discord</a> and describe your issue in the "#tech-support" channel or message a member of the team with the "Tech Support" discord role.</p>
          <p>Please try to include as many relevant details as possible when requested help. If your error is from the Celeste Launcher, it'd help the tech support staff if you have the launcher's log files ready. They are located in the "Logs" folder which can be found in the same directory as your launcher files.</p>`
        }
      ]
    }
  },
  head() {
    return {
      title: "FAQ - Age Of Empires Online Celeste",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "FAQ - Age Of Empires Online Celeste"
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
          content: "FAQ - Age Of Empires Online Celeste"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  background-image: url("~assets/img/background_7.webp");
}

.faq-content {
  font-family: "Arimo", sans-serif;
  font-size: 16px;
  color: #ffffff;
  text-shadow: 1px 1.5 0.2px #000000;
}

.faq-header {
  font-family: "Arimo", sans-serif;
  font-size: 18px;
  color: #ffffffea;
  text-shadow: 1px 1.5 0.2px #000000;
}
</style>
