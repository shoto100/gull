import * as React from 'react';
import Link from 'next/link';
import { styled } from '@material-ui/core/styles';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image'
import menuIcon1 from "../../Images/menu-icon-1.svg";
import menuIcon2 from "../../Images/menu-icon-2.svg";
import menuIcon3 from "../../Images/menu-icon-3.svg";
import menuIcon4 from "../../Images/menu-icon-4.svg";
import menuIcon5 from "../../Images/menu-icon-5.svg";
import menuIcon6 from "../../Images/menu-icon-6.svg";
import menuIcon7 from "../../Images/menu-icon-7.svg";
import menuIcon8 from "../../Images/menu-icon-8.svg";
import menuIcon9 from "../../Images/menu-icon-9.svg";


const MenuList = styled('ul')({
    margin: 0,
    listStyle: 'none',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .Active': {
       borderRadius: '5px',
       background: '#7d48b1',
       '& span': {
          fontSize: '14px',
          opacity: '1'
       },
    },
});

const MenuTitle = styled('h1')({
    color: 'white',
    padding: '15px 0px',
    fontSize: "30px",
    margin: "15px 0 25px 0",
 });


const List = styled('li')({
    width: 90,
    padding: '8px 10px',
    margin: 10,
    transition: 'all 0.4s',
    '& a': {
       textDecoration: 'none',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'center',
    },
    '&:hover': {
       cursor: 'pointer',
       borderRadius: '5px',
       background: '#7d48b1',
       transition: 'all 0.4s',
       '& span': {
          fontSize: '14px',
          transition: 'all 0.4s',
          opacity: '1'
       },
    },
    '& svg': {
       fontSize: '34px',
       color: '#f1f3f4',
       paddingBottom: '5px',
       fontWeight: 'normal'
    },
    '& span': {
       fontSize: '14px',
       color: '#f1f3f4',
       transition: 'all 0.4s',
       opacity: '0'
    },
});

const Sidebar = () => {
    const { route } = useRouter();
    
    return (
        <div>
         <MenuList>
            <MenuTitle>Gull</MenuTitle>
            <List
               className={route === '/' && 'Active'}
            >
               <Link href='/'>
                  <a>
                     {/* <GoGraph /> */}
                     <Image src={menuIcon1} alt="Picture" />
                     <span>Dashboard</span>
                  </a>
               </Link>
            </List>
            <List
               className={route === '/table' && 'Active'}
            >
               <Link href='/table'>
                  <a>
                    <Image src={menuIcon2} alt="Picture" />
                     <span>Table</span>
                  </a>
               </Link>
            </List>
            <List
               className={route === '/files' && 'Active'}
            >
               <Link href='/files'>
                  <a>
                    <Image src={menuIcon3} alt="Picture" />   
                    <span>File</span>
                  </a>
               </Link>
            </List>
            <List
               className={route === '/notes' && 'Active'}
            >
               <Link href='/notes'>
                  <a>
                    <Image src={menuIcon4} alt="Picture" />
                    <span>Note</span>
                  </a>
               </Link>
            </List>
            <List
               className={route === '/works' && 'Active'}
            >
               <Link href='/works'>
                  <a>
                  <Image src={menuIcon5} alt="Picture" />
                     <span>Work</span>
                  </a>
               </Link>
            </List>
            <List
               className={route === '/clients' && 'Active'}
            >
               <Link href='/clients'>
                  <a>
                  <Image src={menuIcon6} alt="Picture" />
                     <span>Client</span>
                  </a>
               </Link>
            </List>
            <List
               className={route === '/weather' && 'Active'}
            >
               <Link href='/weather'>
                  <a>
                  <Image src={menuIcon7} alt="Picture" />
                     <span>Weather</span>
                  </a>
               </Link>
            </List>
            <List
               className={route === '/data' && 'Active'}
            >
               <Link href='/data'>
                  <a>
                  <Image src={menuIcon8} alt="Picture" />
                     <span>Data</span>
                  </a>
               </Link>
            </List>
            <List
               className={route === '/more' && 'Active'}
            >
               <Link href='/more'>
                  <a>
                  <Image src={menuIcon9} alt="Picture" />
                     <span>More</span>
                  </a>
               </Link>
            </List>
         </MenuList>
      </div>
    );
};

export default Sidebar;