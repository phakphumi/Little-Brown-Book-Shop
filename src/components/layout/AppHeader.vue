<template>
  <div class="header">
    <span class="logo">Little Brown Book Shop</span>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped lang="scss">
  .header {
    position: fixed;
    top: 0px;
    width: 100%;
    height: 64px;
    z-index: 9999;
    background-color: #C8A58C;

    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
      color: white;
      font-size: 24px;
      font-weight: bold;
    }
  }
</style>
