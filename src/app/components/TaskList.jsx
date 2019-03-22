import React from 'react';
import { connect } from 'react-redux'; // Notice that importing {} means we are importing a function

export const TaskList = ({tasks, name}) => (
    <div>
        <h3>{name}</h3>
        <div>
            {tasks.map(task => (
                <div key='task.id'>
                    <div>{
                        task.name}
                    </div>
                </div>
            ))}
        </div>dfghdftghdtryfcv
        <button onClick = { () => createNewTask(id) }>Add new task</button>
    </div>
)

// But how do we know what tasks to include above?
// That's where Props comes in:
const mapStateToProps = (state, ownProps) => {
    let groupID = ownProps.id;
    // Since we are passing name here... we can access it above
    return {
        id: groupID,
        name: ownProps.name,
        tasks: state.tasks.filter (task => task.group === groupID)
    }
};

export const ConnectedTaskList = connect (mapStateToProps) (TaskList); 