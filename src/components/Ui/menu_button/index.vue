<script>
export default {
  data() {
    return {
      isMenuOpen: true,
    };
  },
  emits: ["isMenuOpen"],
  methods: {
    toggleMenu() {
      this.isMenuOpen === true
        ? (this.isMenuOpen = false)
        : (this.isMenuOpen = true);
      console.log(this.isMenuOpen);
      this.$emit("isMenuOpen", this.isMenuOpen);
    },
  },
};
</script>

<template>
  <div
    class="menu-button"
    :class="{ 'menu-button--open': isMenuOpen }"
    @click="toggleMenu"
  >
    <div class="menu-button__bar"></div>
  </div>
</template>

<style lang="scss" scoped>
.menu-button {
  font-size: 31px;
  // position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 1em;
  width: 1.25em;
  cursor: pointer;

  // z-index: 10;

  &__bar {
    background: var(--clr-dark);
    height: 0.2em;
    width: 100%;
    // margin-top: calc(1em - 7%);

    // flex-shrink: 0;

    &:after {
      content: "";
      position: absolute;
      background: var(--clr-dark);

      height: inherit;
      width: inherit;
      transform-origin: bottom left;
      top: 80%;
    }
    &:before {
      content: "";
      position: absolute;
      background: var(--clr-dark);

      height: inherit;
      width: inherit;
      transform-origin: top left;
      top: 0%;
    }
  }
  &--open {
    .menu-button__bar {
      background: transparent;
      &:after {
        transform: rotateZ(-45deg);
        opacity: 1;
      }
      &:before {
        transform: rotateZ(45deg);
        opacity: 1;
      }
    }
  }
}
</style>
