<template>
  <div id="app">
    <!-- <task-list></task-list> -->
    <InboxScreen></InboxScreen>
  </div>
</template>

<script>
// import TaskList from "./components/TaskList";
import InboxScreen from "./components/InboxScreen.vue";

export default {
  name: "App",
  components: {
    // TaskList,
    InboxScreen,
  },
};
</script>

<style>
@import "./index.css";
</style>
