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
      currentTypeface: "PT Serif",
      activeFontSize: 16,
      activeLeading: 1.3,
      activeMeasure: 500,
      fontOptions: {
        fontWeight: false,
        italic: false,
        underline: false,
        figatures: true,
        kerning: true,
        justifyCenter: false,
      },
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
          // families: [`${font}:100,200,300,400,500,600,700,800,900`],
          families: [`${font}:italic,100,200,300,400,500,600,700,800,900`],
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
    loadFontOptions(e) {
      console.log(e);
      this.fontOptions = e;
      console.log(this.fontOptions);
    },
    checkFontWeight(weight) {
      return weight === +this.fontOptions.fontWeight;
    },
  },
};
</script>

<template>
  <div class="text-preview">
    <settings
      @typeface="loadTypeface"
      @fontSize="loadFontSize"
      @leading="loadLeading"
      @measure="loadMeasure"
      @fontOptions="loadFontOptions"
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
        fontFamily: getFontFamily,
        fontSize: getFontSize,
        lineHeight: getLeading,
        width: getMeasure,
      }"
      :class="{
        'fw-100': checkFontWeight(100),
        'fw-200': checkFontWeight(200),
        'fw-300': checkFontWeight(300),
        'fw-400': checkFontWeight(400),
        'fw-500': checkFontWeight(500),
        'fw-600': checkFontWeight(600),
        'fw-700': checkFontWeight(700),
        'fw-800': checkFontWeight(800),
        'fw-900': checkFontWeight(900),
        italic: this.fontOptions.italic,
        underline: this.fontOptions.underline,
        'remove-ligatures': !this.fontOptions.ligatures,
        'remove-kerning': !this.fontOptions.kerning,
        'justify-text-center': this.fontOptions.justifyCenter,
      }"
    >
      <h1 contenteditable="true">{{ this.store.getTitle }}</h1>
      <p
        :class="{
          'old-style-figures': this.fontOptions.oldStyleFigures,
          'lining-figures': !this.fontOptions.oldStyleFigures,
        }"
        contenteditable="true"
      >
        {{ this.store.getParagraph }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-preview {
  display: flex;
  align-items: center;
  margin: 2rem;
  border: 1px solid var(--clr-twilight);
  box-shadow: $box-shadow-default;
  border-radius: 13px;
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
