
import React from 'react';

import CompletedTaskList from './completed-task-list.component';

export default {
  component: CompletedTaskList,
  title: 'Completed Task List',
};

const Template = args => <CompletedTaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
    completedNotes: [], 
};

export const Populated = Template.bind({});
Populated.args = {

    ...Default.args.completedTaskList,
    completedNotes: [
        {id: 'a1b2', text: 'Mulan was actually a catholic nun', completed: true, },
        {id: 'c3d4', text: 'Go to the beach', completed: true, },
        {id: 'e5f6', text: 'Get married and settled', completed: true, },
        {id: 'g7h8', text: 'Raise kids so you have someone to whoop', completed: true, },
        {id: 'i9j0', text: 'Eat potatos for strength', completed: true, },
    ],

};
