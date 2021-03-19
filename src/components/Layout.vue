<template>
  <a-layout id="layout-components">
    <layout-sider :title="title" :data="list"></layout-sider>
    <a-layout>
      <layout-header :slogn="slogn"></layout-header>
      <a-layout-content class="content" id="handelDocID">
        <baidu-search
          style="margin-top: 14px;margin-bottom: 24px"
        ></baidu-search>
        <template v-for="(nav, index) in list">
          <div v-if="nav.menus === undefined" :key="index">
            <card-content :nav="nav"></card-content>
          </div>
          <div v-if="nav.menus !== undefined" :key="index">
            <div
              v-for="(cnav, index) in nav.menus"
              :key="`${nav.type}${index}`"
            >
              <card-content :nav="cnav"></card-content>
            </div>
          </div>
        </template>
        <a-back-top :target="backUpTarget">
          <div class="ant-back-top-content">
            <div class="ant-back-top-icon"></div>
          </div>
        </a-back-top>
        <layout-footer></layout-footer>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import LayoutSider from "./LayoutSider";
import LayoutHeader from "./LayoutHeader";
import LayoutFooter from "./LayoutFooter";
import BaiduSearch from "./BaiduSearch";
import CardContent from "./CardContent";
export default {
  components: {
    LayoutSider,
    LayoutHeader,
    LayoutFooter,
    BaiduSearch,
    CardContent
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      title: "IT200为您导航",
      slogn: "IT200持续为您导航",
      collapsed: false
    };
  },
  methods: {
    onCollapse(collapsed) {
      this.collapsed = collapsed;
    },
    backUpTarget() {
      return document.querySelector("#handelDocID");
    }
  }
};
</script>

<style>
#layout-components {
  height: 100vh;
}

#layout-components .content-card {
  margin-bottom: 20px;
}

#layout-components .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#layout-components .trigger:hover {
  color: #1890ff;
}

#layout-components .back-top {
  z-index: 1;
  position: absolute;
  right: 25px;
  bottom: 25px;
}

#layout-components .ant-card-body {
  padding: 10px;
  zoom: 1;
}

#layout-components .ant-layout-footer {
  padding: 0 50px 24px 50px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  background: #f0f2f5;
}

#layout-components .ant-menu-item > a {
  display: contents;
}

#layout-components .ant-layout-header > span {
  font-size: 20px;
  font-weight: 600;
  color: #001529;
}

#layout-components .content {
  height: 100vh;
  overflow: auto;
  margin: 14px 0;
  padding: 0 24px;
}
</style>
