<template>
  <div>
    <h2 class="title has-text-gold has-text-centered">
      The
      {{ name }}
    </h2>
    <h3 class="subtitle has-text-grey-lighter has-text-centered">
      {{ subtitle }}
    </h3>

    <div class="columns">
      <div class="column is-flex is-flex-column">
        <slot />

        <div class="columns">
          <div class="column">
            <h5 class="title is-5 has-text-positive">
              Strengths
            </h5>
            <hr />
            <ul class="content ul">
              <li v-for="(strength, i) in strengths" :key="i">
                {{ strength }}
              </li>
            </ul>
          </div>
          <div class="column">
            <h5 class="title is-5 has-text-negative">
              Weaknesses
            </h5>
            <hr />
            <ul class="content ul">
              <li v-for="(weakness, i) in weaknesses" :key="i">
                {{ weakness }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="column is-narrow">
        <div class="civ-img">
          <img class="bordered" :src="img" />
        </div>

        <h5 class="title is-5 has-text-white has-text-centered">
          Key Units
        </h5>
        <div v-for="(unit, i) in keyUnits" :key="i" class="key-unit">
          <span class="subtitle is-6 has-text-white">
            {{ unit.name }}
          </span>
          <div>
            <img :src="unit.img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Civilization",
  props: {
    name: { type: String, required: true },
    subtitle: { type: String, required: true },
    img: { type: String, required: true },
    strengths: { type: Array, required: true },
    weaknesses: { type: Array, required: true },
    keyUnits: { type: Array, required: true }
  }
}
</script>

<style lang="scss" scoped>
.key-unit {
  display: flex;
  flex-direction: row;
  text-align: right;
  white-space: nowrap;

  span {
    flex-grow: 1;
    align-self: center;
    margin: 0;
  }

  & > div > img {
    margin-left: 0.75rem;
    width: 64px;
    height: 64px;
  }
}

.civ-img {
  margin-bottom: 0.75rem;
  text-align: center;

  img {
    width: 251px;
    height: 135px;
  }
}
</style>
