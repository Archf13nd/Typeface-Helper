<script>
import { useStore } from "../../store/index.js";
export default {
  setup() {
    const store = useStore();
    return { store };
  },
  data() {
    return {
      title: "",
      paragraph: "",
    };
  },
  methods: {
    updateTitle(e) {
      console.log(e);
      this.store.updateTitle(this.title);
    },
    updateParagraph(e) {
      this.store.updateParagraph(this.paragraph);
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
    <div class="global-settings__typeface input-text">
      <div class="input-text__label">
        <label for="title">Title</label>
      </div>
      <input id="title" v-model="title" type="text" @change="updateTitle" />
    </div>
    <div class="global-settings__box-content setting">
      <label for="paragraph">Box Content</label>
      <textarea
        id="paragraph"
        v-model="paragraph"
        type="text"
        rows="7"
        @change="updateParagraph"
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
      <div class="input-slider">
        <div class="input-slider__info">
          <label for="size">Font Size:</label>
          <div class="input-slider__input-number">
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
      <div class="input-slider">
        <div class="input-slider__info">
          <label for="size">Leading:</label>
          <div class="input-slider__input-number">
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
      <div class="input-slider">
        <div class="input-slider__info">
          <label for="size">Measure:</label>
          <div class="input-slider__input-number">
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

    & textarea {
      line-height: $line-height;
      width: 100%;
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
    // display: none;

    & div {
      height: #{$line-height * $font-size};
      border: 0.5px solid rgb(126, 126, 126);
    }
  }
}
</style>
