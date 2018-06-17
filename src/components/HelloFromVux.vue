<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>
    <x-button :gradients="['#1D62F0', '#19D5FD']">按钮</x-button>
    <x-button :gradients="['#FF5E3A', '#FF9500']">iOS Gradients</x-button>
  </div>
</template>

<script>
import { Group, Cell, XButton } from 'vux';

export default {
  components: {
    Group,
    Cell,
    XButton,
  },
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
    };
  },
};
</script>

<style scoped>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
