<template>
	<div id="app">
		vue,
     <test></test>
	</div>
</template>

<script>
import test from './components/test.vue'
export default {
  name: "app",
  components: {
    test
  },
  data() {
    return {};
  }
};
</script>
