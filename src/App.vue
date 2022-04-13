<script>
import TextWindow from "./components/TextPreview/index.vue";
export default {
  data() {
    return {
      title: "The dead eye",
      paragraph:
        "Because Elden Ring is good. Like, cancel-your-plans, ignore-your-chores, glance-up-and-realize-it’s-three-in-the-morning good. It’s good in the kind of way you want to evangelize to practically everyone, which marks it as something of a departure from its immediate predecessors. ",
    };
  },
  components: {
    TextWindow,
  },
};
</script>

<template>
  <div class="text-windows">
    <text-window :title="title" :paragraph="paragraph"></text-window>
    <text-window :title="title" :paragraph="paragraph"></text-window>
    <text-window :title="title" :paragraph="paragraph"></text-window>
    <text-window :title="title" :paragraph="paragraph"></text-window>
    <text-window :title="title" :paragraph="paragraph"></text-window>
    <text-window :title="title" :paragraph="paragraph"></text-window>
  </div>
</template>

<style lang="scss">
.text-windows {
  display: flex;
  flex-wrap: wrap;
}
</style>
