<script>
export default {
  props: ["hideSettings"],
  data() {
    return {
      fontSize: 16.0,
      measure: 550,
      leading: 1.3,
      typeface: "",
      options: {
        bold: false,
        italic: false,
        underline: false,
        figatures: true,
        kerning: true,
        antialiasing: false,
      },
    };
  },
  methods: {
    exportTypeface() {
      if (this.typeface.length > 1) {
        this.$emit("typeface", this.typeface);
      }
    },
    exportFontSize() {
      this.$emit("fontSize", this.fontSize);
    },
    exportLeading() {
      this.$emit("leading", this.leading);
    },
    exportMeasure() {
      this.$emit("measure", this.measure);
    },
  },
};
</script>

<template>
  <div class="settings" v-bind:class="{ hide: false }">
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
    <div class="settings__setting settings__typeface">
      <label for="typeface">Typeface</label>
      <input
        id="typeface"
        class="setting__import"
        v-model="typeface"
        type="text"
        @change="exportTypeface"
      />
    </div>
    <div class="settings_setting settings__options">
      <div class="flex-sb">
        <div
          class="settings__option"
          :class="{ 'settings__option--selected': options.bold }"
          @click="options.bold = !options.bold"
        >
          B
        </div>
        <div
          class="settings__option"
          :class="{ 'settings__option--selected': options.italic }"
          @click="options.italic = !options.italic"
        >
          i
        </div>
        <div
          class="settings__option"
          :class="{ 'settings__option--selected': options.underline }"
          @click="options.underline = !options.underline"
        >
          U
        </div>
      </div>
      <div class="flex-sb">
        <div
          class="settings__option"
          :class="{ 'settings__option--selected': options.figatures }"
          @click="options.figatures = !options.figatures"
        >
          fi
        </div>
        <div
          class="settings__option"
          :class="{ 'settings__option--selected': options.kerning }"
          @click="options.kerning = !options.kerning"
        >
          k
        </div>
        <div
          class="settings__option"
          :class="{ 'settings__option--selected': options.antialiasing }"
          @click="options.antialiasing = !options.antialiasing"
        >
          a
        </div>
      </div>
    </div>
    <div class="settings__sliders">
      <div class="settings__setting">
        <div class="settings__label">
          <label for="size">Font Size:</label>
          <div class="settings__number-field">
            <input
              type="number"
              step="0.5"
              v-model="fontSize"
              @change="exportFontSize"
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
          @change="exportFontSize"
        />
      </div>
      <div class="settings__setting">
        <div class="settings__label">
          <label for="size">Leading:</label>
          <div class="settings__number-field">
            <input
              type="number"
              step="0.01"
              v-model="leading"
              @change="exportLeading"
            />
            <span>px</span>
          </div>
        </div>
        <input
          class="settings__range-slider"
          type="range"
          min="0"
          max="3"
          step="0.01"
          v-model="leading"
          @change="exportLeading"
        />
      </div>
      <div class="settings__setting">
        <div class="settings__label">
          <label for="size">Measure:</label>
          <div class="settings__number-field">
            <input type="number" v-model="measure" @change="exportMeasure" />
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
          @change="exportMeasure"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.show-grid-lines {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  left: 0;
  pointer-events: none;
  display: none;

  & div {
    height: #{$line-height-settings * 16px};
    border: 0.5px solid rgb(126, 126, 126);
  }
}

.settings {
  position: relative;
  font-size: 0.875rem;
  font-size: 1rem;
  line-height: $line-height-settings;
  background: rgb(255, 255, 255);
  transition: all 0.5s ease;
  width: getLength(10, $line-height-settings);
  height: getLength(19, $line-height-settings);
  padding: 0 getLength(1, $line-height-settings);
  border-right: 1px solid $clr-twilight;
  // border-bottom: 1px solid $clr-twilight;

  &__sliders {
    @include margin-top(1, $line-height-settings);
    height: getLength(7, $line-height-settings);
    display: flex;
    flex-direction: column;
    gap: getLength(0.5, $line-height-settings);
  }

  &__number-field {
    & input {
      height: getLength(1, $line-height-settings);

      width: 2.5rem;
      text-align: right;
      font-size: 16px;
      border: none;
      cursor: pointer;
      background: transparent;

      &:focus {
        outline: none;

        border-radius: 0 0 0 10%;
      }
    }

    &:hover,
    &:focus {
      border-radius: 2px;
    }
  }

  &__setting {
    display: flex;
    flex-direction: column;

    & label {
      font-size: 0.875em;
    }

    & input {
      height: getLength(1, $line-height-settings);
      margin: 0;

      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }

  &__label {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & p {
      font-size: 16px;
    }
  }

  &__typeface {
    @include margin-top(1, $line-height-settings);
    & > input {
      height: getLength(2, $line-height-settings);
      font-size: 1em;
      // font-size: 18px;
    }
  }

  &__options {
    @include margin-top(1, $line-height-settings);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: getLength(1, $line-height-settings);
  }

  &__option {
    display: flex;
    justify-content: center;
    align-items: center;
    width: getLength(2, $line-height-settings);
    height: getLength(2, $line-height-settings);
    border: 1px solid $clr-dark;
    user-select: none;

    &--selected {
      border: 1px solid rgb(27, 157, 27);
      background: rgb(27, 157, 27, 0.2);
    }
  }
}

.hide {
  transform: translateY(-5rem);
  pointer-events: none;
  opacity: 0;
}

label {
  line-height: inherit;
}
</style>
