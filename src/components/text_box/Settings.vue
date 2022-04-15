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
    <div class="setting settings__typeface">
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
          class="option-box bold"
          :class="{ 'option-box--selected': options.bold }"
          @click="options.bold = !options.bold"
        >
          B
        </div>
        <div
          class="option-box italic"
          :class="{ 'option-box--selected': options.italic }"
          @click="options.italic = !options.italic"
        >
          i
        </div>
        <div
          class="option-box underline"
          :class="{ 'option-box--selected': options.underline }"
          @click="options.underline = !options.underline"
        >
          U
        </div>
      </div>
      <div class="flex-sb">
        <div
          class="option-box"
          :class="{ 'option-box--selected': options.figatures }"
          @click="options.figatures = !options.figatures"
        >
          fi
        </div>
        <div
          class="option-box"
          :class="{ 'option-box--selected': options.kerning }"
          @click="options.kerning = !options.kerning"
        >
          k
        </div>
        <div
          class="option-box"
          :class="{ 'option-box--selected': options.antialiasing }"
          @click="options.antialiasing = !options.antialiasing"
        >
          a
        </div>
      </div>
    </div>
    <div class="settings__sliders">
      <div class="setting">
        <div class="input-label">
          <label for="size">Font Size:</label>
          <div class="number-input-label">
            <input
              class="input-remove-spinner"
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
      <div class="setting">
        <div class="input-label">
          <label for="size">Leading:</label>
          <div class="number-input-label">
            <input
              class="input-remove-spinner"
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
      <div class="setting">
        <div class="input-label">
          <label for="size">Measure:</label>
          <div class="number-input-label">
            <input
              class="input-remove-spinner"
              type="number"
              v-model="measure"
              @change="exportMeasure"
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
          @change="exportMeasure"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.settings {
  position: relative;
  font-size: 0.875rem;
  font-size: 1rem;
  line-height: $line-height-settings;
  background: rgb(255, 255, 255);
  width: getLength(10, $line-height-settings);
  height: getLength(19, $line-height-settings);
  padding: 0 getLength(1, $line-height-settings);
  border-right: 1px solid $clr-twilight;
  transition: all 0.5s ease;

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
  &__sliders {
    @include margin-top(1, $line-height-settings);
    height: getLength(7, $line-height-settings);
    display: flex;
    flex-direction: column;
    gap: getLength(0.5, $line-height-settings);
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
  // display: none;

  & div {
    height: #{$line-height-settings * 16px};
    border: 0.5px solid rgb(126, 126, 126);
  }
}
</style>
