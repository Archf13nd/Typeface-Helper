<script>
import TheHeader from "./components/header/index.vue";
import MenuButton from "./components/Ui/menu_button/index.vue";
import TextBox from "./components/text_box/index.vue";
import GlobalSettings from "./components/global_settings/index.vue";
import { useStore } from "./store/index.js";

export default {
  setup() {
    const store = useStore();

    return { store };
  },
  data() {
    return {
      isMenuOpen: true,
      boxes: ["box-1", "box-2"],
    };
  },
  components: {
    TheHeader,
    MenuButton,
    TextBox,
    GlobalSettings,
  },
  methods: {
    toggleMenu(e) {
      this.isMenuOpen = e;
    },
    addBox() {
      const lastNum = this.boxes[this.boxes.length - 1];
      this.boxes.push(`box-${lastNum + 1}`);
    },
    removeBox(box) {
      const pos = this.boxes.indexOf(box);
      console.log(pos);
      this.boxes.splice(pos, 1);
    },
  },
};
</script>

<template>
  <the-header></the-header>
  <menu-button class="menu-button" @isMenuOpen="toggleMenu"></menu-button>
  <div class="text-windows">
    <text-box
      v-for="box in boxes"
      :key="box"
      :id="box"
      @removeBox="removeBox"
    ></text-box>
  </div>
  <global-settings @addBox="addBox" :isMenuOpen="isMenuOpen"></global-settings>
</template>

<style lang="scss">
.text-windows {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: getEms(3, $line-height);
  gap: getEms(3, $line-height);

  @media (max-width: 45em) {
    margin: getEms(1, $line-height);
    gap: getEms(1, $line-height);
  }
}

.menu-button {
  position: fixed;
  top: 1rem;
  right: 2rem;
  z-index: 100;
}
</style>
