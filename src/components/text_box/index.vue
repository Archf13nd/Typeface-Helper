<script>
import Settings from "./Settings.vue";
import { useStore } from "../../store/index.js";

export default {
  setup() {
    const store = useStore();
    return { store };
  },
  data() {
    return {
      isSettingsHidden: true,
      typeface: "PT Serif",
      fontSize: 16,
      leading: 1.3,
      measure: 500,
      fontWeight: 400,
      italic: false,
      underline: false,
      ligatures: false,
      justifyCenter: false,
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
      let posOfEquals = this.typeface.indexOf("=") + 1;
      let ffString;
      if (posOfEquals > 0) {
        let posOfAnd = this.typeface.indexOf("&");
        ffString = this.typeface.slice(posOfEquals, posOfAnd);
      } else {
        ffString = this.typeface;
      }
      if (ffString.length > 1) {
        this.importWebFont(ffString);
        return `'${ffString}', serif`;
      }
    },
    getFontSize() {
      let globalfontSize = this.store.fontSize;
      let localfontSize = this.fontSize;

      if (this.store.fontSizeLastUpdate === "local") {
        return localfontSize + "px";
      } else {
        this.fontSize = globalfontSize;
        return globalfontSize + "px";
      }
    },
    getMeasure() {
      let globalMeasure = this.store.measure;
      let localMeasure = this.measure;

      if (this.store.measureLastUpdate === "local") {
        return localMeasure + "px";
      } else {
        this.measure = globalMeasure;
        return globalMeasure + "px";
      }
    },
    getLeading() {
      let globalLeading = this.store.leading;
      let localLeading = this.leading;

      if (this.store.leadingLastUpdate === "local") {
        return localLeading;
      } else {
        this.leading = globalLeading;
        return globalLeading;
      }
    },
    getFontWeight() {
      let globalFontWeight = this.store.fontWeight;
      let localFontWeight = this.fontWeight;

      if (this.store.fontWeightLastUpdate === "local") {
        return localFontWeight;
      } else {
        this.fontWeight = globalFontWeight;
        return globalFontWeight;
      }
    },
    getColor() {
      return this.store.color;
    },
  },
  methods: {
    importWebFont(font) {
      WebFont.load({
        google: {
          // families: [`${font}:100,200,300,400,500,600,700,800,900`],
          families: [`${font}:italic,100,200,300,400,500,600,700,800,900`],
        },
      });
    },
    loadLocalSetting(value, setting) {
      this[setting] = value;
    },
    returnFontWeight(value) {
      return +this.getFontWeight === +value;
    },
  },
};
</script>

<template>
  <div class="text-preview">
    <settings
      @typeface="loadLocalSetting($event, 'typeface')"
      @fontSize="loadLocalSetting($event, 'fontSize')"
      @leading="loadLocalSetting($event, 'leading')"
      @measure="loadLocalSetting($event, 'measure')"
      @fontWeight="loadLocalSetting($event, 'fontWeight')"
      @italic="loadLocalSetting($event, 'italic')"
      @underline="loadLocalSetting($event, 'underline')"
      @ligatures="loadLocalSetting($event, 'ligatures')"
      @justifyCenter="loadLocalSetting($event, 'justifyCenter')"
      :hideSettings="isSettingsHidden"
      :fontSize="fontSize"
      :leading="leading"
      :measure="measure"
      :fontWeight="fontWeight"
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
        fontFamily: getFontFamily,
        fontSize: getFontSize,
        lineHeight: getLeading,
        width: getMeasure,
        color: getColor,
      }"
      :class="{
        'fw-100': returnFontWeight(100),
        'fw-200': returnFontWeight(200),
        'fw-300': returnFontWeight(300),
        'fw-400': returnFontWeight(400),
        'fw-500': returnFontWeight(500),
        'fw-600': returnFontWeight(600),
        'fw-700': returnFontWeight(700),
        'fw-800': returnFontWeight(800),
        'fw-900': returnFontWeight(900),
        italic: this.italic || this.store.italic,
        underline: this.underline || this.store.underline,
        'remove-ligatures': !(this.ligatures || this.store.ligatures),
        'justify-text-center': this.justifyCenter || this.store.justifyCenter,
      }"
    >
      <h1 contenteditable="true">{{ this.store.title }}</h1>
      <p contenteditable="true">
        {{ this.store.paragraph }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-preview {
  position: relative;
  display: flex;
  align-items: center;
  // margin: 3rem;
  border: 1px solid var(--clr-twilight);
  box-shadow: $box-shadow-default;
  border-radius: 0.7rem;
  overflow: hidden;
  color: var(--clr-dark);

  &__text {
    padding: 2rem;
    width: inherit;
    & * {
      font-style: inherit;
      font-weight: inherit;
      font-variant-numeric: inherit;
      font-feature-settings: inherit;
    }
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
