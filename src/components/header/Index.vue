<template>
  <header>
    <div class="logo">Typeface Finder</div>
    <nav>
      <a href="#">Type Finder</a>
      <a href="#">Cheat sheet</a>
      <a href="#">Guide</a>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  font-size: 1.5rem;
  border-bottom: 1px solid $clr-twilight;
  padding: 0 5rem;
}

nav {
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 1.25rem;
}
</style>
