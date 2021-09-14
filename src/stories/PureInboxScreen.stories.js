import { app } from '@storybook/vue3';
import { createStore } from 'vuex';
import PureInboxScreen from '../components/PureInboxScreen.vue';

import { action } from '@storybook/addon-actions';
import * as TaskListStories from './PureTaskList.stories';

const store = createStore({
  state: {
    tasks: TaskListStories.Default.args.tasks,
  },
  actions: {
    pinTask(context, id) {
      action("pin-task")(id);
    },
    archiveTask(context, id) {
      action("archive-task")(id);
    },
  },
});

app.use(store);

export default {
  component: PureInboxScreen,
  title: 'PureInboxScreen',
};

const Template = args => ({
  components: { PureInboxScreen },
  setup() {
    return {
      args,
    };
  },
  template: '<PureInboxScreen v-bind="args" />',
});

export const Default = Template.bind({});
// 返回一个原函数的拷贝，并拥有指定的 this 值和初始参数。 
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
export const Error = Template.bind({});

console.log("Error", Error);

Error.args = { error: true };