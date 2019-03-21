import React from 'react';
import { connect } from 'react-redux'; // Notice that importing {} means we are importing an object

import { ConnectedTaskList } from './TaskList';

// It's gonna take the form of a function that returns a JSX tag.
// We use round bracket instead of {} which indicates this is NOT a function
// This is an object to be returned

// The parameters passed to the dashboard will represent the part of the state that the application
// is interested in
export const Dashboard = ({groups}) => ( // To know how to get groups we have to connected. We will use a function called mapStateToProps bellow
    <div>
        <h1>Dashboard</h1>
        
        {/* In REACT in order to loop through elements we use a map */}
        {groups.map(
            group => (
                <div>
                    <ConnectedTaskList id={group.id} name={group.name}/>
                </div>
            )
        )}
    </div>
)

function mapStateToProps (state) {
    return {
        groups: state.groups
    }
}

// If we combine with this react component with our new mapStateToProps we can get a connected component
export const ConnectedDashboard = connect (mapStateToProps) (Dashboard) 