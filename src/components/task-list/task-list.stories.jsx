
import React from 'react';

import TaskList from './task-list.component';

export default {
  component: TaskList,
  title: 'Task List',
};

const Template = args => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
    notes: [], 
    onClick: ()=>{},
};

export const Populated = Template.bind({});

Populated.args = {
    notes: [
        {id: 'a1b2', text: 'Mulan was actually a catholic nun'},
        {id: 'c3d4', text: 'Go to the beach'},
        {id: 'e5f6', text: 'Get married and settled'},
        {id: 'g7h8', text: 'Raise kids so you have someone to whoop'},
        {id: 'i9j0', text: 'Eat potatos for strength'},
    ]
};


