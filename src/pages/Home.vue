<template>
  <div class="home-name">我是 Home, {{ name }}</div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      name: "lfli",
    };
  },
  mounted() {
      new Promise((resolve, reject) => {
          resolve('算法地方');
      }).then(res => {
          console.log(res);
      })
  }
};
</script>

<style lang="less" scoped>
.home-name {
  color: navajowhite;
}
</style>