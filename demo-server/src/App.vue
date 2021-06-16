<template>
  <div>
    <Identicon v-for="hash in hashes" :key="hash" :holoHash="hash" size="28" />
  </div>
</template>

<script>
import Identicon from './components/Identicon.vue'

const hashes = [... new Array(300)].map(() =>
  new Uint8Array([... new Array(32)].map(() =>
    Math.floor(Math.random() * 256))))

export default {
  name: 'App',
  components: {
    Identicon
  },
  data () {
    return {
      hashes
    }
  }
}
</script>
