import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image';


const CustomTypography = styled("Typography")({
    margin: '0px',
    fontSize: '30px',
    fontWeight: "700"
})
const IconDiv = styled("div")({
    padding: '22px 7px',
    marginRight: '8px',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
})
const CardItem = styled("div")({
    display: 'flex',
    padding: '25px 18px',
})
  

const DashboardData = (props) => {
    const allCardData = props.CardData;
    const {Icon, Title, count, color, bgColor} = allCardData;
    console.log(allCardData);
    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card item xs={12} sm={12} md={6} lg={3} key='' style={{ backgroundColor: "#fff", borderRadius: "25px", boxShadow: "none"}}>
              <CardItem>
                <IconDiv style={{ background: bgColor }}>
                  <Icon style={{ color: color, fontSize: "20px" }} />
                </IconDiv>
                <div >
                  <Typography variant="body1" color="secondary" sx={{marginTop: "3px"}}>
                    <small>{Title}</small>
                  </Typography>
                  <CustomTypography fontWeight="fontWeightBold" style={{ color: color }}>{count}</CustomTypography>
                </div>
              </CardItem>
            </Card>
        </Grid>
    );
};

export default DashboardData;
