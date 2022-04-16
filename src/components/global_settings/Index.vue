<script>
export default {
  data() {
    return {
      textContent: "",
    };
  },
  methods: {
    exportTextContent() {
      this.$emit("textContent", this.textContent);
    },
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
    <div class="global-settings__typeface setting">
      <label for="typeface">Typeface</label>
      <input
        id="typeface"
        v-model="typeface"
        type="text"
        @input="exportTypeface"
      />
    </div>
    <div class="global-settings__box-content setting">
      <label for="boxContent">Box Content</label>
      <textarea
        id="boxContent"
        v-model="textContent"
        type="text"
        @change="exportTextContent"
        rows="7"
      />
    </div>

    <div class="global-settings__font-options setting">
      <div class="flex-sb">
        <div class="option-box bold">B</div>
        <div class="option-box italic">i</div>
        <div class="option-box underline">u</div>
        <div class="option-box">fi</div>
      </div>
      <div class="flex-sb">
        <div class="option-box">k</div>
        <div class="color-picker">#000000</div>
        <div class="option-box">a</div>
      </div>
    </div>

    <div class="global-settings__sliders setting">
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
              step="0.5"
              v-model="fontSize"
              @change="exportFontSize"
            />
            <span>px</span>
          </div>
        </div>
        <input
          type="range"
          min="1"
          max="50"
          v-model="fontSize"
          @change="exportFontSize"
        />
      </div>
      <div class="setting">
        <div class="input-label">
          <label for="size">Measure:</label>
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
          type="range"
          min="1"
          max="50"
          v-model="fontSize"
          @change="exportFontSize"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.global-settings {
  $line-height: $line-height-settings;
  $line-height: 1.25;
  --line-height: #{$line-height};

  position: fixed;
  $spacer-1: getEms(1, $line-height);
  $spacer-2: getEms(2, $line-height);
  background: $clr-light;
  width: getEms(17, $line-height);
  height: getEms(40, $line-height);
  right: 0;
  border: 1px solid $clr-twilight;
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

    & textarea {
      //   height: calc($spacer-1 * 7);
      line-height: $line-height;
    }
  }

  &__font-options {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: $spacer-2 $spacer-2 0;
    gap: getEms(1, $line-height-settings);
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
}

// Helpers
.show-grid-lines {
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
    height: #{$line-height-settings * 16px};
    border: 0.5px solid rgb(126, 126, 126);
  }
}
</style>
