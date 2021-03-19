<template>
  <a-layout-header style="background: #fff; padding: 0">
    <img style="width: 47px; margin-left: 20px;" src="../assets/logo.jpg" />
    <span style="margin-left:10px">{{ slogn }}</span>
  </a-layout-header>
</template>

<script>
export default {
  props: {
    slogn: {
      type: String,
      default: "IT200持续为您导航"
    }
  }
};
</script>

<style lang="scss" scoped></style>
