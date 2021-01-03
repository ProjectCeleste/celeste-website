<template>
  <div class="columns is-mobile is-centered is-vcentered">
    <div class="column is-narrow">
      <b-icon
        size="is-large"
        icon-size="mdi-48px"
        :icon="icon"
        :title="statusTitle"
        :class="{
          rotate: loading,
          'has-text-success': status == 0,
          'has-text-danger': status == 1,
          'has-text-warning': status == 2
        }"
      />
    </div>
    <div class="column">
      <h5 class="subtitle is-5 has-text-gold">
        {{ title }}
      </h5>
      <p v-if="description" class="content is-size-7-mobile">
        <a ref="nofollow" target="_blank" :href="url">
          {{ description }}
        </a>
      </p>
      <p v-else-if="url" class="content is-size-7-mobile">
        <a ref="nofollow" target="_blank" :href="url">
          {{ url }}
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatusItem",
  props: {
    title: { type: String, required: true },
    description: { type: String, default: undefined },
    url: { type: String, default: undefined },
    health: { type: String, required: true },
    updateInterval: { type: Number, default: 1000 * 60 * 2 },
    method: { type: String, default: "HEAD" },
    ignoreBody: { type: Boolean, default: false }
  },
  data() {
    return {
      icon: "loading",
      loading: true,
      status: -1,
      statusTitle: undefined,
      clock: undefined
    }
  },
  mounted() {
    this.update()
    this.clock = setInterval(() => this.update(), this.updateInterval)
  },
  beforeDestroy() {
    clearInterval(this.clock)
  },
  methods: {
    update() {
      this.icon = "loading"
      this.loading = true
      this.status = -1
      const xhttp = new XMLHttpRequest()
      xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4) {
          this.loading = false
          switch (xhttp.status) {
            case 200:
              if (this.ignoreBody) {
                this.setUp()
                break
              }
              try {
                const health = JSON.parse(xhttp.responseText)
                if (health.isHealthy !== undefined) {
                  if (health.isHealthy) {
                    this.setUp()
                    break
                  }
                }
                this.setDown()
              } catch (e) {
                this.setUp()
              }
              break
            case (500, 502, 503, 504):
              this.setDown()
              break
            default:
              this.setUnknown()
          }
        }
      }
      xhttp.open(this.method, this.health, true)
      xhttp.setRequestHeader("Cache-Control", "no-cache")
      xhttp.send()
    },
    setUp() {
      this.icon = "check-bold"
      this.status = 0
      this.statusTitle = "Up"
    },
    setDown() {
      this.icon = "close-circle-outline"
      this.status = 1
      this.statusTitle = "Down"
    },
    setUnknown() {
      this.icon = "wifi-off"
      this.status = 2
      this.statusTitle = "Unknown"
    }
  }
}
</script>

<style lang="scss" scoped>
.rotate {
  animation: rotate 0.75s infinite linear;
}

.subtitle {
  margin-bottom: 0.25rem;
}

@keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}
</style>
