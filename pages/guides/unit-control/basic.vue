<template>
  <div>
    <div class="columns is-vcentered">
      <div class="column">
        <p class="content title is-5 has-text-gold">
          1. Unit Counter System
        </p>
        <p class="content">
          Generally speaking, there are 3 main Military Unit types that you will
          most commonly deal with when playing PvP Matches - Infantry, Ranged
          and Cavalry.
        </p>
        <p class="content">
          In almost every case, the counter system works this way:
        </p>
        <ul class="content ul">
          <li>Infantry beat Cavalry</li>
          <li>Cavalry beat Ranged</li>
          <li>Ranged beat Infantry</li>
        </ul>
        <p class="content">
          There are a few exceptions to this rule, but you can find out about
          each unit&apos;s specific role by hovering over its icon in the Unit
          Production tab (inside each Building). \n \nMaking the proper Units
          against what your opponent has is the key to victory!
        </p>
      </div>
      <div class="column is-narrow guide-img">
        <img src="~/assets/img/guides/sample.png" />
      </div>
    </div>

    <div class="columns is-vcentered">
      <div class="column">
        <p class="content title is-5 has-text-gold">
          2. What is Attack Move?
        </p>
        <p class="content">
          Attack Move is a command that you can give to your Unit by pressing
          the Attack Move Hotkey (Default Hotkey: A) and then left-clicking
          somewhere on the ground. The unit will move towards that destination,
          attacking the closest enemy Unit or Building that it encounters along
          the way. This is most useful for Melee Units to ensure that they all
          attack the enemy and not stand idle at the back.
        </p>
      </div>
      <div class="column is-narrow guide-img">
        <img src="~/assets/img/guides/sample.png" />
      </div>
    </div>

    <div class="columns is-vcentered">
      <div class="column">
        <p class="content title is-5 has-text-gold">
          3. When not to use it?
        </p>
        <p class="content">
          As explained in the previous tip, Attack Move commands Units to attack
          the nearest enemy Unit. When using Ranged units, this leads to all of
          your Units attacking the same target, resulting in massive overkill
          where your Ranged Units all attack one single enemy Unit, wasting most
          of their Damage until they are ready to fire their next volley.
          It&apos;s better to move your Ranged units and then use the Stop
          Command Hotkey (Default Hotkey: S) which will result in your Ranged
          units evenly spreading their fire.
        </p>
        <p class="content">
          So to quickly summarize: Attack Move your Melee Units. Stop Command
          your Ranged Units. (This also extends to Ranged Siege Units, not just
          Bowman Type units.)
        </p>
      </div>
      <div class="column is-narrow guide-img">
        <img src="~/assets/img/guides/sample.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: "fade"
}
</script>
