<script>
import { useStore } from "../../store/index.js";
export default {
  setup() {
    const store = useStore();
    return { store };
  },
  data() {
    return {
      title: "The title",
      paragraph:
        "Are you paralyzed with fear? That’s a good sign. Fear is good. Like self-doubt, fear is an indicator. Fear tells us what we have to do. Remember one rule of thumb: the more scared we are of a work or calling, the more sure we can be that we have to do it.",
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
  methods: {
    setLastUpdate(setting) {
      console.log(`${setting}LastUpdate`);
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
      console.log(setting);
      if (needLastUpdate) {
        this.setLastUpdate(setting);
      }
      if (typeof this[setting] === "boolean") {
        this[setting] = this.switchBoolean(setting);
      }
      this.store[setting] = this[setting];
    },
  },
  created() {
    this.updateSetting("title");
    this.updateSetting("paragraph");
  },
};
</script>

<template>
  <div class="global-settings">
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
            class="option-box italic"
            :class="{ 'option-box--selected': italic }"
            @click="updateSetting('italic')"
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
            class="option-box"
            :class="{ 'option-box--selected': ligatures }"
            @click="updateSetting('ligatures')"
          >
            fi
          </div>
        </div>
        <div class="flex-sb">
          <div
            class="option-box underline"
            :class="{ 'option-box--selected': underline }"
            @click="updateSetting('underline')"
          >
            u
          </div>
          <div class="color-picker">
            <input type="color" v-model="color" @input="updateColor" />
          </div>
          <div
            class="option-box"
            :class="{ 'option-box--selected': justifyCenter }"
            @click="updateSetting('justifyCenter')"
          >
            j
          </div>
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
  $line-height: $line-height-settings;
  $line-height: 1.35;
  $font-size: 1.125rem;
  --line-height: #{$line-height};

  font-size: $font-size;
  position: fixed;
  $spacer-1: getEms(1, $line-height);
  $spacer-2: getEms(2, $line-height);
  background: var(--clr-light);
  width: getEms(17, $line-height);
  height: getEms(40, $line-height);
  right: 0;
  border: 1px solid var(--clr-twilight);
  box-shadow: $box-shadow-default;

  &__typeface {
    margin: $spacer-2 $spacer-2 0;
    height: calc($spacer-1 * 3);

    & label {
      height: $spacer-1;
    }

    & input {
      height: $spacer-2;
    }
  }

  &__box-content {
    margin: $spacer-2 $spacer-2 0;
    height: calc($spacer-1 * 8);
  }

  &__font-options {
    --gap: calc(var(--line-height) * 1em)
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: $spacer-2 $spacer-2 0;

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
  //     margin-top: $spacer-2 !important;
  //   }

  &__sliders {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: $spacer-2 $spacer-2 0;
    height: calc($spacer-1 * 8);
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
