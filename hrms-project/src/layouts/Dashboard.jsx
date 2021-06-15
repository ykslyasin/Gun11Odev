import React from 'react';
import Categories from './Categories';
import JobAdvertisement from '../pages/JobAdvertisement';
import { Grid } from 'semantic-ui-react'
import Cv from '../pages/Cv';

export default function Dashboard() {
    return (
        <div>
        <Grid>
        <Grid.Row>
            <Grid.Column width={4}>
                <Categories />
            </Grid.Column>
            <Grid.Column width={12}>
            <Cv></Cv>
            <JobAdvertisement></JobAdvertisement>
            </Grid.Column>
        </Grid.Row>
    </Grid>


        </div>
    )
}
