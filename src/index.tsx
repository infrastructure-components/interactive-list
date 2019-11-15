import React from 'react';

import {
    Environment,
    Route,
    SinglePageApp
} from "infrastructure-components";

import List from './list';

export default (
    <SinglePageApp
        stackName = "interactive-list"
        buildPath = 'build'
        region='us-east-1'>

        <Environment name="dev" />

        <Route
            path='/'
            name='Infrastructure-Components'
            render={()=><List/>}
        />

    </SinglePageApp>
);