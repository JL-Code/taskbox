import Task from '../components/Task.vue';

import { action } from '@storybook/addon-actions';

export default {
  component: Task,
  //👇 Our exports that end in "Data" are not stories.
  // 我们以 "数据 "结尾的出口不是故事。
  excludeStories: /.*Data$/,
  title: 'Task',
  //👇 Our events will be mapped in Storybook UI
  // 我们的事件将被映射到 Storybook UI 中。
  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
};

export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task'),
};

const Template = args => ({
  components: { Task },
  setup() {
    return { args, ...actionsData };
  },
  template: '<Task v-bind="args" />',
});
export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};