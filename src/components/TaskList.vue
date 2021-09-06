<template>
  <PureTaskList
    :tasks="tasks"
    @archive-task="archiveTask"
    @pin-task="pinTask"
  />
</template>

<script>
import PureTaskList from "./PureTaskList";

import { computed } from "vue";

import { useStore } from "vuex";
// 将 TaskList 的表示型版本分离开的原因是，这使得我们的测试和隔离更加容易。
// 同时因为它不依赖 store，所以从测试的角度来说将变的更加容易。
export default {
  name: "TaskList",
  components: { PureTaskList },
  setup() {
    //👇 Creates a store instance
    const store = useStore();

    //👇 Retrieves the tasks from the store's state
    const tasks = computed(() => store.state.tasks);

    //👇 Dispatches the actions back to the store
    const archiveTask = (task) => store.dispatch("archiveTask", task);
    const pinTask = (task) => store.dispatch("pinTask", task);

    return {
      tasks,
      archiveTask,
      pinTask,
    };
  },
};
</script>
