import React  from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import { ConnectedDashboard } from './Dashboard'

export const Main = () => (
    // Provider is an element that takes IN a store as a property
    // ANY component inside this provider WILL have access to the store
    <Provider store={store}>
        <div>
            {/* Dashboard goes here */}
            <ConnectedDashboard/>
        </div>
    </Provider>
)