<template>
  <footer class="footer z-front">
    <div class="content has-text-centered">
      <a
        v-scroll-to="{
          el: '#nav'
        }"
        title="Back to top"
      >
        <b-icon icon="chevron-up" icon-size="mdi-36px" size="is-medium" />
      </a>
    </div>
    <div class="columns is-variable is-2 is-centered is-multiline is-mobile">
      <div class="column is-narrow">
        <a
          class="social-media-link forums"
          href="https://forums.projectceleste.com/"
          rel="nofollow"
          target="_blank"
          title="Forums"
        >
          <b-icon
            icon="newspaper-variant-multiple"
            icon-size="mdi-48px"
            size="is-large"
          />
        </a>
      </div>
      <div class="column is-narrow">
        <a
          class="social-media-link discord"
          href="https://discordapp.com/invite/YbkZ9GZ"
          rel="nofollow"
          target="_blank"
          title="Discord"
        >
          <b-icon icon="discord" icon-size="mdi-48px" size="is-large" />
        </a>
      </div>
      <div class="column is-narrow">
        <a
          class="social-media-link reddit"
          href="https://www.reddit.com/r/projectceleste"
          rel="nofollow"
          target="_blank"
          title="Reddit"
        >
          <b-icon icon="reddit" icon-size="mdi-48px" size="is-large" />
        </a>
      </div>
      <div class="column is-narrow">
        <a
          class="social-media-link facebook"
          href="https://www.facebook.com/ProjectCelesteAoEO"
          rel="nofollow"
          target="_blank"
          title="Facebook"
        >
          <b-icon icon="facebook" icon-size="mdi-48px" size="is-large" />
        </a>
      </div>
      <div class="column is-narrow">
        <a
          class="social-media-link youtube"
          href="https://www.youtube.com/c/ProjectCeleste"
          rel="nofollow"
          target="_blank"
          title="Youtube"
        >
          <b-icon icon="youtube" icon-size="mdi-48px" size="is-large" />
        </a>
      </div>
      <div class="column is-narrow">
        <a
          class="social-media-link twitch"
          href="https://www.twitch.tv/projectceleste"
          rel="nofollow"
          target="_blank"
          title="Twitch"
        >
          <b-icon icon="twitch" icon-size="mdi-48px" size="is-large" />
        </a>
      </div>
    </div>
    <div class="has-text-centered">
      <p class="content">
        Age of Empires Online © Microsoft Corporation. This website was created
        under Microsoft's
        <a
          rel="nofollow"
          href="https://www.xbox.com/en-us/developers/rules"
          target="_blank"
        >
          Game Content Usage Rules
        </a>
        using assets from Age of Empires Online, and it is not endorsed by or
        affiliated with Microsoft.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "BFooter"
}
</script>
