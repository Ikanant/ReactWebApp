import React from 'react';

// It's gonna take the form of a function that returns a JSX tag.
// We use round bracket instead of {} which indicates this is NOT a function
// This is an object to be returned

// The parameters passed to the dashboard will represent the part of the state that the application
// is interested in
export const Dashboard = ({groups}) => (
    <div>
        <h2>Dashboard</h2>
    </div>
)