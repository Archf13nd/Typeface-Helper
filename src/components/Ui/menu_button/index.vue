// Hamburger menu with animation
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
  // position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  // z-index: 10;

  &__bar {
    background: var(--clr-dark);
    height: 20%;
    width: 100%;
    // margin-top: calc(1em - 7%);

    // flex-shrink: 0;

    &:after {
      content: "";
      position: absolute;
      background: var(--clr-dark);

      height: inherit;
      width: inherit;
      transform-origin: center;
      transform: translateY(200%);
      transition: all 0.5s ease;
    }
    &:before {
      content: "";
      position: absolute;
      background: var(--clr-dark);

      height: inherit;
      width: inherit;
      transform-origin: center;
      transform: translateY(-200%);
      transition: all 0.5s ease;
    }
  }
  &--open {
    .menu-button__bar {
      background: transparent;
      opacity: 1;

      &:after {
        transform: translateY(0%) rotateZ(45deg);
        opacity: 1;
      }
      &:before {
        transform: translateY(0%) rotateZ(-45deg);
        opacity: 1;
      }
    }
  }
}
</style>
