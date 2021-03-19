<template>
  <a-layout-sider
    class="layout-sider"
    breakpoint="lg"
    collapsed-width="0"
    width="160"
  >
    <div class="logo">
      {{ title }}
    </div>
    <a-popover placement="rightTop">
      <template slot="content">
        <img style="width: 180px;" src="../assets/weixin.png" />
      </template>
      <div style="color: rgb(228 49 49);text-align: center;">
        🚀你过来呀🔥
      </div>
    </a-popover>
    <a-menu
      theme="dark"
      mode="inline"
      :open-keys="openKeys"
      @openChange="onOpenChange"
      :default-selected-keys="['1']"
    >
      <template v-for="nav in data">
        <a-menu-item :key="nav.type" v-if="nav.menus === undefined">
          <a-icon :type="nav.icon" />
          <a :href="`#${nav.type}`" style="color:#fff">
            <span>{{ nav.name }}</span>
          </a>
        </a-menu-item>
        <a-sub-menu :key="nav.type" v-if="nav.menus != undefined">
          <span slot="title">
            <a-icon :type="nav.icon" />
            <span>{{ nav.name }}</span>
          </span>
          <template v-for="cnav in nav.menus">
            <a-menu-item :key="cnav.type">
              <a-icon :type="cnav.icon" />
              <a :href="`#${cnav.type}`" style="color:#fff">
                <span>{{ cnav.name }}</span>
              </a>
            </a-menu-item>
          </template>
        </a-sub-menu>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "IT200为您导航"
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      rootSubmenuKeys: [],
      openKeys: []
    };
  },
  mounted() {
    this.rootSubmenuKeys = this.data.map(i => {
      return i.menus && i.type;
    });
  },
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    }
  }
};
</script>

<style>
.layout-sider .ant-layout-sider-children {
  height: 100vh;
}
.layout-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  color: #fff;
  text-align: center;
  line-height: 32px;
}
</style>
