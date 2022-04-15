<script>
import TextBox from "./components/text_box/index.vue";
export default {
  data() {
    return {
      title: "The dead eye",
      paragraph:
        "Because Elden Ring is good. Like, cancel-your-plans, ignore-your-chores, glance-up-and-realize-it’s-three-in-the-morning good. It’s good in the kind of way you want to evangelize to practically everyone, which marks it as something of a departure from its immediate predecessors. ",
    };
  },
  components: {
    TextBox,
  },
};
</script>

<template>
  <div class="text-windows">
    <text-box :title="title" :paragraph="paragraph"></text-box>
  </div>
</template>

<style lang="scss">
.text-windows {
  display: flex;
  flex-wrap: wrap;
}
</style>
