<template>
  <div class="navigation">
    <Layout :list="list" />
  </div>
</template>

<script>
import NavigationInfo from "navigation-info";

// @ is an alias to /src
import Layout from "@/components/Layout.vue";

export default {
  name: "Navigation",
  components: {
    Layout
  },
  data() {
    return {
      list: NavigationInfo
    };
  }
};
</script>
<style>
.navigation .ant-back-top {
  bottom: 100px;
}
.navigation .ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #1088e9;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
</style>
