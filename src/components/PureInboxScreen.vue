<template>
<!-- 表示型组件 https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0 -->
  <div>
    <div v-if="error" class="page lists-show">
      <div class="wrapper-message">
        <span class="icon-face-sad" />
        <div class="title-message">Oh no!</div>
        <div class="subtitle-message">Something went wrong</div>
      </div>
    </div>
    <div v-else class="page lists-show">
      <nav>
        <h1 class="title-page">
          <span class="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList />
    </div>
  </div>
</template>

<script>
import TaskList from "./TaskList.vue";
export default {
  name: "PureInboxScreen",
  components: { TaskList },
  props: {
    error: { type: Boolean, default: false },
  },
};
</script>
