
import React from 'react';

import CompletedTask from './completed-task.component';

export default {
  component: CompletedTask,
  title: 'CompletedTask',
};

const Template = args => <CompletedTask {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Buy ticket for charity gala next week',
};

export const Incomplete = Template.bind({});
Incomplete.args = {

    ...Default.args.completedTask,
    text: 'Buy ticket for charity gala next week',

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