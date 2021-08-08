import * as React from 'react';
import Head from 'next/head'
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar';
import Sidebar from './Sidebar';


const ItemContent = styled("Item") ({
    border: "none",
});
const ItemSidebar = styled("Item") ({
    border: "none",
    color: "#ffffff",
});

const Content = styled("div") ({
    padding: "20px 30px 30px 30px",
});

const Layout = ({ children}) => {
    return (
      <div>
        <Head><title>Gull | Dashboard</title></Head>
        <Box sx={{ flexGrow: 1, }}>
          <Grid container spacing={0} sx={{height: "100vh" }}>
            <Grid item xs={3} sm={2} md={1} sx={{backgroundColor: '#663399', textAlign: 'center'}}>
              <ItemSidebar>
                  <Sidebar></Sidebar>
                </ItemSidebar>
            </Grid>
            <Grid item xs={9} sm={10} md={11} sx={{backgroundColor: '#f1f3f4',}}>
              <ItemContent>
                  <Navbar></Navbar>
                  <Content>
                      {children}
                  </Content>
              </ItemContent>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
};

export default Layout;