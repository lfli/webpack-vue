<template>
  <div class="test">
    我是 app <span class="wz">{{ name }}</span>
    <div>
      <img src="@/assets/img/ice.png" alt="" />
    </div>
    <Home />
  </div>
</template>

<script>
import Home from "@/pages/Home.vue";
import $ from 'jquery';

console.log('$', $);

export default {
  components: {
    Home,
  },
  name: "App",
  data() {
    return {
      name: "lfli",
    };
  },
};
</script>

<style lang="less" scoped>
.test {
  color: darkblue;
  .wz {
    color: red;
  }
}
</style>