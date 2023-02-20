
import React from 'react';

import TaskForm from './task-form.component';

export default {
  component: TaskForm,
  title: 'TaskForm',
};

const Template = args => <TaskForm {...args} />;

export const Default = Template.bind({});
Default.args = {
    note: 'no taks yes',
};

export const EmptyForm = Template.bind({});
EmptyForm.args = {

    ...Default.args.task,
    note: 'Buy ticket for charity gala next week',
};

// export const CompletedTask = Template.bind({});
// Completed.args = {
//   n..Default.args.task,
//   note: {
//       id: '1',
//       text: 'Buy ticket for charity gala next week',
//       completed: 'false',
//     },
//     onClick:  ()=> alert("hello there"),
//   state: 'TASK_PINNED',
// };