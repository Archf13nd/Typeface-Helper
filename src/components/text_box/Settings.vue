<script>
export default {
  props: ["hideSettings"],
  data() {
    return {
      fontSize: 16.0,
      measure: 550,
      leading: 1.3,
      typeface: "",
      fontOptions: {
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
    exportOptions() {
      this.$emit("fontOptions", this.fontOptions);
    },
    switchStateAndLoad(fontOption) {
      if (this.fontOptions[fontOption]) {
        this.fontOptions[fontOption] = false;
      } else {
        this.fontOptions[fontOption] = true;
      }
      this.exportOptions();
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
      <div class="input-label">
        <label for="typeface">Typeface</label>
      </div>
      <input
        id="typeface"
        v-model="typeface"
        type="text"
        @change="exportTypeface"
      />
    </div>
    <div class="settings_setting settings__options">
      <div class="flex-sb">
        <div
          class="option-box"
          :class="{ 'option-box--selected': fontOptions.bold }"
          @click="switchStateAndLoad('bold')"
        >
          <p class="bold">B</p>
        </div>
        <div
          class="option-box"
          :class="{ 'option-box--selected': fontOptions.italic }"
          @click="switchStateAndLoad('italic')"
        >
          <p class="italic">I</p>
        </div>
        <div
          class="option-box"
          :class="{ 'option-box--selected': fontOptions.underline }"
          @click="switchStateAndLoad('underline')"
        >
          <p class="underline">U</p>
        </div>
      </div>
      <div class="flex-sb">
        <div
          class="option-box"
          :class="{ 'option-box--selected': fontOptions.ligatures }"
          @click="switchStateAndLoad('ligatures')"
        >
          <p>fi</p>
        </div>
        <div
          class="option-box"
          :class="{ 'option-box--selected': fontOptions.kerning }"
          @click="switchStateAndLoad('kerning')"
        >
          <p>k</p>
        </div>
        <div
          class="option-box"
          :class="{ 'option-box--selected': fontOptions.antialiasing }"
          @click="switchStateAndLoad('antialising')"
        >
          <p>a</p>
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
// Changing these values will change the grid
$line-height: 1.2;
$font-size: 1rem;

.settings {
  // CSS variable passes line-height into scss components
  --line-height: #{$line-height};

  font-family: $ff-sans;
  position: relative;
  font-size: $font-size;
  line-height: $line-height;
  // background: rgb(255, 255, 255);
  width: getEms(10, $line-height);
  height: getEms(19, $line-height);
  padding: 0 getEms(1, $line-height);
  border-right: 1px solid $clr-twilight;
  transition: all 0.5s ease;

  &__typeface {
    @include margin-top(1, $line-height);
    & > label {
      display: block;
      @include line-height(1, $line-height);
    }

    & > input {
      height: getEms(2, $line-height);
      font-size: 1em;
    }
  }

  &__options {
    // --line-height: ;

    @include margin-top(1, $line-height);
    display: flex;
    height: getEms(5, $line-height);
    flex-direction: column;
    justify-content: space-between;
    gap: getEms(1, $line-height);
  }
  &__sliders {
    @include margin-top(1, $line-height);
    height: getEms(7, $line-height);
    display: flex;
    flex-direction: column;
    gap: getEms(0.5, $line-height);
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
