<template>
  <div id="card-content">
    <a-card :id="nav.type" style="width: 100%" class="content-card">
      <template slot="title" class="ant-card-actions">
        <a-icon type="align-right" />
        {{ nav.name }}
      </template>
      <a-row type="flex">
        <a-col
          v-for="(citem, index) in nav.list"
          :key="index"
          :xs="12"
          :sm="12"
          :md="8"
          :lg="6"
          :xl="4"
        >
          <div class="itemBox" v-if="citem.menus === undefined">
            <a-card :hoverable="true">
              <img class="itemImg" :src="citem.icon" :alt="citem.title" />
              <div class="itemTextBox">
                <a :href="citem.href" target="_blank" rel="noopener noreferrer">
                  <strong>{{ citem.title }}</strong>
                </a>
                <p :title="citem.description">
                  {{ citem.description }}
                </p>
              </div>
            </a-card>
          </div>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>
export default {
  props: {
    nav: {
      type: Object,
      require: true
    }
  }
};
</script>

<style>
#card-content .itemBox {
  /* height: 90px; */
  margin: 5px 12px;
  padding: 8px;
  background: #fff;
}

#card-content .itemImg {
  width: 40px;
  height: 40px;
  float: left;
}

#card-content .itemTextBox {
  margin-left: 50px;
}

#card-content .itemTextBox strong {
  color: #373e4a;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-overflow: ellipsis;
}

#card-content .itemTextBox p {
  margin: 0;
  line-height: 18px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  /* 元素溢出内容  隐藏 */
  overflow: hidden;
  /* 设置文本不折行 */
  white-space: nowrap;
  /* 元素溢出打点 */
  text-overflow: ellipsis;
}
#card-content .ant-card-bordered {
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  height: 100%;
}
</style>
