<template>
  <div
    class="example-component"
    :class="{show: show}"
  >
    <p>hihi {{msg}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return { show: true };
  },
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
};
</script>