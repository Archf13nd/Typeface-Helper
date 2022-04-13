<script>
export default {
  props: ["hideSettings"],
  data() {
    return {
      fontSize: 16.0,
      measure: 550,
      leading: 1.3,
      typeface: "",
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
    <div class="setting">
      <label for="size">Import</label>
      <input
        class="setting__import"
        v-model="typeface"
        type="text"
        placeholder="Typeface link"
        @change="exportTypeface"
      />
    </div>
    <div class="setting">
      <label for="size">Size</label>
      <input
        class="setting__number setting__size spinner-offset spinner-constant"
        type="number"
        step=".5"
        v-model="fontSize"
        @change="exportFontSize"
      />
      <p>px</p>
    </div>
    <div class="setting">
      <label for="size">Leading</label>
      <input
        class="setting__number setting__leading spinner-constant"
        type="number"
        step="0.01"
        v-model="leading"
        @change="exportLeading"
      />
    </div>
    <div class="setting">
      <label for="size">Measure</label>
      <input
        class="setting__number setting__measure spinner-offset spinner-constant"
        type="number"
        step="10.00"
        v-model="measure"
        @change="exportMeasure"
      />
      <p>px</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.settings {
  background: rgb(209, 209, 209);
  transition: all 0.5s ease;
  font-size: initial;
  line-height: initial;
  padding: 0.5rem 0;
  width: 10rem;
  height: 10rem;
  margin-top: 2rem;
}

.setting {
  height: 2rem;
  display: flex;
  align-items: center;

  & .spinner-offset::-webkit-outer-spin-button,
  & .spinner-offset::-webkit-inner-spin-button {
    position: relative;
    right: -1.3rem;
  }

  & .spinner-constant::-webkit-outer-spin-button,
  & .spinner-constant::-webkit-inner-spin-button {
    opacity: 1;
  }

  &__number {
    // overflow: visible;
    padding-right: 1.4rem;
  }

  &__import {
    width: 5rem;
  }

  &__size {
    width: 5rem;
  }
  &__leading {
    width: 3rem;
    padding: 0;
  }
  &__measure {
    width: 4.3rem;
  }

  & p {
    position: relative;
    left: -2.4rem;
  }

  & label {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.1rem;
  }
}

input {
  width: 100%;
  height: 100%;
}

.hide {
  transform: translateY(-5rem);
  pointer-events: none;
  opacity: 0;
}
</style>
