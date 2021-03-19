<template>
  <div class="bd-search">
    <a-input-search
      size="large"
      allowClear
      enter-button="百度一下"
      v-model="searchValue"
      @search="onSearch"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: ""
    };
  },
  methods: {
    onSearch() {
      if (this.searchValue) {
        const el = document.createElement("a");
        document.body.appendChild(el);
        el.href = `https://www.baidu.com/s?wd=${this.searchValue}`;
        el.target = "_blank";
        el.click();
        document.body.removeChild(el);
      }
    }
  }
};
</script>

<style>
.bd-search {
  width: 60%;
  margin: 10px auto;
}
</style>
