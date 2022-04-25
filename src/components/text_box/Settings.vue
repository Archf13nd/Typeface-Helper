<script>
import { useStore } from "../../store/index.js";
import MenuButton from "../Ui/menu_button/index.vue";

export default {
  setup() {
    const store = useStore();
    return { store };
  },
  props: ["hideSettings", "fontSize", "leading", "measure", "fontWeight"],
  emits: [
    "typeface",
    "fontSize",
    "leading",
    "measure",
    "fontWeight",
    "italic",
    "underline",
    "ligatures",
    "justifyCenter",
  ],
  components: {
    MenuButton,
  },
  data() {
    return {
      isHidden: false,
      typeface: "",
      italic: false,
      underline: false,
      ligatures: true,
      justifyCenter: false,
    };
  },
  computed: {},

  methods: {
    setLastUpdate(setting) {
      this.store[`${setting}LastUpdate`] = "local";
    },
    switchBoolean(setting) {
      if (this[setting]) {
        return false;
      } else {
        return true;
      }
    },
    updateSetting(setting, needLastUpdate = false) {
      if (needLastUpdate) {
        this.setLastUpdate(setting);
      }
      if (typeof this[setting] === "boolean") {
        this[setting] = this.switchBoolean(setting);
      }
      this.$emit(setting, this[setting]);
    },
    toggleSettings() {
      console.log("hey");
      this.isHidden = !this.isHidden;
    },
  },
};
</script>

<template>
  <menu-button
    :class="{ 'menu-button__hidden': isHidden }"
    @click="toggleSettings"
  ></menu-button>
  <div
    class="settings"
    v-bind:class="{ hide: isHidden, settings__hidden: isHidden }"
  >
    <div class="show-grid-lines">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div class="input-text">
      <div class="input-text__label">
        <label for="typeface">Typeface</label>
      </div>
      <input
        id="typeface"
        v-model="typeface"
        type="text"
        @change="updateSetting('typeface')"
      />
    </div>
    <div class="settings_setting settings__options">
      <div class="weight-slider">
        <p>Font&nbsp;weight</p>
        <input
          type="range"
          step="100"
          min="100"
          max="900"
          v-model="fontWeight"
          @change="updateSetting('fontWeight', true)"
        />
        <p>{{ fontWeight }}</p>
      </div>
      <div class="option-boxes">
        <div class="flex-sb">
          <div
            class="option-box"
            :class="{ 'option-box--selected': italic }"
            @click="updateSetting('italic')"
            title="Italic"
          >
            <p class="italic">I</p>
          </div>
          <div
            class="option-box"
            :class="{ 'option-box--selected': underline }"
            @click="updateSetting('underline')"
            title="Underline"
          >
            <p class="underline">U</p>
          </div>
        </div>
        <div class="flex-sb">
          <div
            class="option-box option-box--ligatures"
            :class="{ 'option-box--selected': ligatures }"
            @click="updateSetting('ligatures')"
            title="Ligatures"
          ></div>

          <div
            class="option-box option-box--justified-text"
            :class="{ 'option-box--selected': justifyCenter }"
            @click="updateSetting('justifyCenter')"
            title="Justified Text"
          ></div>
        </div>
      </div>
    </div>
    <div class="settings__sliders">
      <div class="input-slider">
        <div class="input-slider__info">
          <label for="fontSize">Font Size:</label>
          <div class="input-slider__input-number">
            <input
              id="fontSize"
              class="input-remove-spinner"
              type="number"
              step="0.5"
              v-model="fontSize"
              @change="updateSetting('fontSize', true)"
            />
            <span>px</span>
          </div>
        </div>
        <input
          class="settings__range-slider"
          type="range"
          min="1"
          max="50"
          v-model="fontSize"
          @change="updateSetting('fontSize', true)"
        />
      </div>
      <div class="input-slider">
        <div class="input-slider__info">
          <label for="leading">Leading:</label>
          <div class="input-slider__input-number">
            <input
              id="leading"
              class="input-remove-spinner"
              type="number"
              step="0.01"
              v-model="leading"
              @change="updateSetting('leading', true)"
            />
          </div>
        </div>
        <input
          class="settings__range-slider"
          type="range"
          min="0"
          max="3"
          step="0.01"
          v-model="leading"
          @change="updateSetting('leading', true)"
        />
      </div>
      <div class="input-slider">
        <div class="input-slider__info">
          <label for="measure">Measure:</label>
          <div class="input-slider__input-number">
            <input
              id="measure"
              class="input-remove-spinner"
              type="number"
              v-model="measure"
              @change="updateSetting('measure', true)"
            />
            <span>px</span>
          </div>
        </div>
        <input
          class="settings__range-slider"
          type="range"
          step="1.00"
          min="0"
          max="1500"
          v-model="measure"
          @change="updateSetting('measure', true)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Changing these values will change the grid
$line-height: 1.2;
$font-size: 1rem;
$height: getEms(19, $line-height);
$width: getEms(10, $line-height);

.settings {
  // CSS variable passes line-height into scss components
  --line-height: #{$line-height};

  font-family: $ff-sans;
  position: relative;
  font-size: $font-size;
  line-height: $line-height;
  // background: rgb(255, 255, 255);
  width: $width;
  height: $height;
  padding: 0 getEms(1, $line-height);
  border-right: 1px solid var(--clr-twilight);
  transition: $default-transition;

  @media (max-width: 45em) {
    position: absolute;
    background: var(--clr-light);
    height: 100%;
    overflow: scroll;
    // display: none;
  }

  &__options {
    @include margin-top(1, $line-height);
    display: flex;
    // flex-direction: column;
    align-items: center;
    // justify-content: flex-start;
    height: getEms(5, $line-height);
    gap: getEms(1, $line-height);

    & .option-boxes {
      flex: 0 0 getEms(5, $line-height);
      display: flex;
      flex-direction: column;
      // flex-wrap: wrap;
      gap: getEms(1, $line-height);
    }
  }

  &__sliders {
    @include margin-top(1, $line-height);
    height: getEms(7, $line-height);
    display: flex;
    flex-direction: column;
    gap: getEms(0.5, $line-height);
  }

  &__hidden {
    // transform: translateX(-$width);
    margin-left: -$width;
  }
}

.menu-button {
  font-size: $font-size;
  $distance: calc($width - getEms(1.6, $line-height));
  // $distance: $width;
  transform-origin: right;
  position: absolute;
  width: 1.5em;
  height: 1.5em;
  z-index: 10;
  left: 0em;
  transform: translateX($distance);
  top: 0.5rem;
  transition: $default-transition;

  &__hidden {
    top: 0.5rem;
    left: 0.5em;
    transform: none;
  }
}

// Helpers
.show-grid-lines {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  left: 0;
  pointer-events: none;
  opacity: 0.2;
  display: none;

  & div {
    height: #{$line-height * $font-size};
    border: 0.5px solid rgb(126, 126, 126);
  }
}
</style>
