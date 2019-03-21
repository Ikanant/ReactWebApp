import React  from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ConnectedDashboard } from './Dashboard';

// Router is the parent component all routes have to be inside
// Route is a component that will look different depending on what the URL is
import { Router, Route } from 'react-router-dom';
import { history } from '../store/history';

export const Main = () => (
    <Router history={history}>
        {/* // Provider is an element that takes IN a store as a property
        // ANY component inside this provider WILL have access to the store */}
        <Provider store={store}>
            <div>
                {/* Let's now only show the dashboard when the URL says dashboard */}
                <Route 
                    exact // This Route should display ONLY if the path matches EXACTLY
                    path = "/dashboard" 
                    render = { () => ( <ConnectedDashboard/> ) } // Render function will determine what the component IS
                />
            </div>
        </Provider>
    </Router>
)