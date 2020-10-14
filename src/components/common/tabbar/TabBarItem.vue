<template>
  <div class="tab-bar-item" @click='itemClick'>
    <div v-if='!isActive' >
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot  name="item-icon-active"></slot>
    </div>
    <div :class='{active: isActive}'>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data(){
    return {
      isActive: true
    }
  },
  props: {
   link: String
  },
  methods: {
    itemClick() {
      this.$router.push(this.link)
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  color: black;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin: 4px 0 2px 0;
}
.active{
  color: red;
}
</style>