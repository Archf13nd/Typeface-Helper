<script>
import { useStore } from "../../store/index.js";
import { invertHex } from "../../assets/js-functions/inverseColor.js";
export default {
  setup() {
    const store = useStore();
    return { store };
  },
  props: ["isMenuOpen"],
  data() {
    return {
      title: "The title",
      paragraph:
        "The history of typography can be traced back to the 11th century when movable type was introduced. The design of typefaces has evolved with the constant evolution of typesetting systems thanks to the technological advances of modern-day society and science. Typography at its core is a vital component of the user interface as it establishes a well-built visual hierarchy and provides a balance graphically to the letters displayed. Good typography should be used to enable the audience to be guided by the like of it and gather information from it.",
      fontSize: 16.0,
      leading: 1.3,
      measure: 550,
      fontWeight: 400,
      italic: false,
      underline: false,
      ligatures: false,
      justifyCenter: false,
      color: "#000000",
    };
  },
  computed: {
    invertColor() {
      return invertHex(this.color);
    },
  },
  methods: {
    setLastUpdate(setting) {
      this.store[`${setting}LastUpdate`] = "global";
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
      this.store[setting] = this[setting];
    },
    addBox() {
      this.$emit("addBox");
    },
  },
  created() {
    this.updateSetting("title");
    this.updateSetting("paragraph");
  },
};
</script>

<template>
  <div class="global-settings" :class="{ hide: !isMenuOpen }">
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
    <button
      class="global-settings__add-button add-button"
      title="Add Text Box"
      @click="addBox"
    >
      <p>+</p>
    </button>
    <div class="global-settings__typeface input-text">
      <div class="input-text__label">
        <label for="title">Title</label>
      </div>
      <input
        id="title"
        v-model="title"
        type="text"
        @change="updateSetting('title')"
      />
    </div>
    <div class="global-settings__box-content input-text">
      <label for="paragraph">Box Content</label>
      <textarea
        id="paragraph"
        v-model="paragraph"
        type="text"
        rows="7"
        @change="updateSetting('paragraph')"
      />
    </div>

    <div class="global-settings__font-options">
      <div class="flex-column-sb width-100">
        <div class="flex-sb">
          <div
            class="option-box italic uppercase"
            :class="{ 'option-box--selected': italic }"
            @click="updateSetting('italic')"
            title="Italic"
          >
            i
          </div>
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
          <div
            class="option-box option-box--ligatures"
            :class="{ 'option-box--selected': ligatures }"
            @click="updateSetting('ligatures')"
            title="Ligatures"
          ></div>
        </div>
        <div class="flex-sb">
          <div
            class="option-box underline uppercase"
            :class="{ 'option-box--selected': underline }"
            @click="updateSetting('underline')"
            title="Underline"
          >
            u
          </div>
          <div class="color-picker">
            <input
              type="color"
              v-model="color"
              @input="updateSetting('color')"
              title="Colour Picker"
            />
            <p :style="{ color: invertColor }">Text Color</p>
          </div>
          <div
            class="option-box option-box--justified-text"
            :class="{ 'option-box--selected': justifyCenter }"
                @click="updateSetting('justifyCenter')"
            title="Justified Text"
          ></div>
        </div>
      </div>
    </div>

    <div class="global-settings__sliders setting">
      <div class="input-slider">
        <div class="input-slider__info">
          <label for="size">Font Size:</label>
          <div class="input-slider__input-number">
            <input
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
          type="range"
          min="1"
          max="80"
          v-model="fontSize"
          @change="updateSetting('fontSize', true)"
        />
      </div>
      <div class="input-slider">
        <div class="input-slider__info">
          <label for="size">Leading:</label>
          <div class="input-slider__input-number">
            <input
              class="input-remove-spinner"
              type="number"
              step="0.5"
              v-model="leading"
              @change="updateSetting('leading', true)"
            />
          </div>
        </div>
        <input
          type="range"
          min="1"
          max="3"
          step="0.01"
          v-model="leading"
          @change="updateSetting('leading', true)"
        />
      </div>
      <div class="input-slider">
        <div class="input-slider__info">
          <label for="size">Measure:</label>
          <div class="input-slider__input-number">
            <input
              class="input-remove-spinner"
              type="number"
              step="0.5"
              v-model="measure"
              @change="updateSetting('measure', true)"
            />
            <span>px</span>
          </div>
        </div>
        <input
          type="range"
          min="1"
          max="1500"
          v-model="measure"
          @change="updateSetting('measure', true)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.global-settings {

  $line-height: 1.35;
  $font-size: 1.125rem;
  --line-height: #{$line-height};
  --spacer-1: calc(1em * var(--line-height));
  --spacer-2: calc(2em * var(--line-height));

  font-size: $font-size;
  position: fixed;
  background: var(--clr-light);
  width: getEms(17, $line-height);
  // height: getEms(40, $line-height);
  height: 100%;
  right: 0;
  // top: getRems(3, $line-height);
  top: 0;
  border: 1px solid var(--clr-twilight);
  box-shadow: $box-shadow-default;
  z-index: 20;
  overflow-y: scroll;

  @media (max-width: 45em) {
    font-size: 1rem;
    width: getEms(15, $line-height);
    --spacer-2: calc(1em * var(--line-height));

  }

  &__add-button {
    margin: 0 auto;
    margin-top: var(--spacer-2);
  }

  &__typeface {
    margin: var(--spacer-1) var(--spacer-2) 0;
    height: calc(var(--spacer-1) * 3);

    & label {
      height: var(--spacer-1);
    }

    & input {
      height: getEms(2, $line-height);
    }
  }

  &__box-content {
    margin: var(--spacer-2) var(--spacer-2) 0;
    height: calc(var(--spacer-1) * 9);
  }

  &__font-options {
    --gap: calc(var(--line-height) * 1em)
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: var(--spacer-2) var(--spacer-2) 0;

    & .weight-slider {
      width: getEms(6, $line-height);
      height: getEms(2, $line-height);
      transform: none;

      & input {
        margin: .3em 0 0.2em 0;
        width: 100%;
      }
     & * {
       top: 0;
     }
    }


    & > div {
      gap: getEms(1, $line-height);
    }
  }

  //   & > *:first-child {
  //     margin-top: var(--spacer-2) !important;
  //   }

  &__sliders {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: var(--spacer-2) var(--spacer-2) 0;
    height: calc(var(--spacer-1) * 8);
  }
  // Helpers
  & .show-grid-lines {
    position: absolute;
    margin: none;
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
}
</style>
