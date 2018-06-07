
<template>
	<div id="app">
		<transition name="fade" mode="out-in">
			<router-view/>
		</transition>
	</div>
</template>

<script>
import { Loading } from "element-ui";

let loadingInstance;

export default {
  name: "app",
  data() {
    return {
      loadingInstance: true
    };
  },
  methods: {
    addIframeListener() {
      // 监听iframe父元素传递过来的消息
      const _this = this;

      window.addEventListener("message", e => {
        if (typeof e.data === "string") {
          const info = JSON.parse(e.data.split("?")[1]);
          const finance_path = e.data.split("?")[0];

          _this.$router.push({ name: finance_path });
          // 存储状态管理
          _this.$store.commit("getNewInfo", info);
        }
      });
    }
  },
  beforeCreate() {
    loadingInstance = Loading.service({ fullscreen: true });
  },
  mounted() {
    loadingInstance.close();
    // 监听iframe父元素传递过来的消息
    this.addIframeListener();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
