<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld
      :msg="_msg"
      :storeMsg="_storeMsg"
      @update-msg="$_sayHi($event)"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      mockMsg: "Welcome to Your Vue.js App",
    };
  },
  computed: {
    _msg: {
      get() {
        return this.mockMsg;
      },
      set(value) {
        this.mockMsg = value;
      },
    },
    _storeMsg() {
      return this.$store.state.model.indexMsg;
    },
  },
  methods: {
    $_sayHi(value) {
      this._msg = value;
    },
  },
};
</script>
