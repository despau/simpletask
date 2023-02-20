
import React from 'react';

import Task from './task.component';

export default {
  component: Task,
  title: 'Task',
};

const Template = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
    note: {
        id: '',
        text: '',
    }
};

export const Incomplete = Template.bind({});
Incomplete.args = {

    ...Default.args.task,
    note: {
        id: '1',
        text: 'Buy ticket for charity gala next week',
        completed: 'false',
      },
      onClick:  ()=> alert("hello there"),
    state: {completed: false},

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