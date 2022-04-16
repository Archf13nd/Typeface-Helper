<script>
import Settings from "./Settings.vue";
export default {
  props: ["title", "paragraph"],
  data() {
    return {
      isSettingsHidden: true,
      currentTypeface: "PT Serif",
      activeFontSize: 16,
      activeLeading: 1.3,
      activeMeasure: 500,
    };
  },
  components: {
    Settings,
  },
  computed: {
    getTypeface() {
      return this.currentTypeface;
    },
    getFontFamily() {
      let posOfEquals = this.currentTypeface.indexOf("=") + 1;
      let ffString;
      if (posOfEquals > 0) {
        let posOfAnd = this.currentTypeface.indexOf("&");
        ffString = this.currentTypeface.slice(posOfEquals, posOfAnd);
      } else {
        ffString = this.currentTypeface;
      }
      if (ffString.length > 1) {
        this.importWebFont(ffString);
        return `'${ffString}', serif`;
      }
    },
    getFontSize() {
      return this.activeFontSize + "px";
    },
    getMeasure() {
      return this.activeMeasure + "px";
    },
    getLeading() {
      return this.activeLeading;
    },
  },
  methods: {
    importWebFont(font) {
      console.log(font);
      WebFont.load({
        google: {
          families: [`${font}`],
        },
      });
    },
    loadTypeface(e) {
      this.currentTypeface = e;
    },
    loadFontSize(e) {
      this.activeFontSize = +e;
    },
    loadLeading(e) {
      this.activeLeading = +e;
    },
    loadMeasure(e) {
      this.activeMeasure = +e;
    },
  },
};
</script>

<template>
  <div
    class="text-preview"
    :style="{
      fontFamily: getFontFamily,
      fontSize: getFontSize,
      lineHeight: getLeading,
    }"
  >
    <settings
      @typeface="loadTypeface"
      @fontSize="loadFontSize"
      @leading="loadLeading"
      @measure="loadMeasure"
      :hideSettings="isSettingsHidden"
    ></settings>
    <button
      class="settings-revealer"
      @click="isSettingsHidden = !isSettingsHidden"
    >
      Settings
    </button>

    <div
      class="text-preview__text"
      :style="{
        width: getMeasure,
      }"
    >
      <h1 contenteditable="true">{{ title }}</h1>
      <p contenteditable="true">{{ paragraph }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-preview {
  display: flex;
  align-items: center;
  margin: 2rem;
  border: 1px solid $clr-twilight;
  box-shadow: $box-shadow-default;
  border-radius: 13px;
  overflow: hidden;

  &__text {
    padding: 2rem;
    width: inherit;
  }
}

.settings-revealer {
  position: absolute;
  right: left;
  font-size: initial;
  line-height: initial;
  display: none; //todo
}
</style>
