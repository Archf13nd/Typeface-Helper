<script>
import TheHeader from "./components/header/Index.vue";
import TextBox from "./components/text_box/index.vue";
import GlobalSettings from "./components/global_settings/Index.vue";
export default {
  data() {
    return {
      title: "The dead eye",
      paragraph:
        "Because Elden Ring is good. Like, cancel-your-plans, ignore-your-chores, glance-up-and-realize-it’s-three-in-the-morning good. It’s good in the kind of way you want to evangelize to practically everyone, which marks it as something of a departure from its immediate predecessors. ",
    };
  },
  components: {
    TheHeader,
    TextBox,
    GlobalSettings,
  },
  methods: {
    changeParagraph(e) {
      this.paragraph = e;
    },
  },
};
</script>

<template>
  <the-header></the-header>
  <div class="text-windows">
    <text-box :title="title" :paragraph="paragraph"></text-box>
    <text-box :title="title" :paragraph="paragraph"></text-box>
    <text-box :title="title" :paragraph="paragraph"></text-box>
    <text-box :title="title" :paragraph="paragraph"></text-box>
    <global-settings @textContent="changeParagraph"></global-settings>
  </div>
</template>

<style lang="scss">
.text-windows {
  display: flex;
  flex-wrap: wrap;
}
</style>
