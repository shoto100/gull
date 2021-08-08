
import * as React from 'react';
import { Typography } from '@material-ui/core';
import DashboardData from './DashboardData';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardData from '../../src/CardData';


const HomeDashboard = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
                {
                    // eslint-disable-next-line react/jsx-key
                    CardData.map(CardData => <DashboardData CardData={CardData}></DashboardData> )
                }
        </Grid>
      </Box>
    );
};

export default HomeDashboard;