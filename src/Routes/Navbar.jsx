


import { Box, Button, Container, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";


const links = [
    {
      path:"/",
      title:"WhyHarvest?"
    },
    {
      path:"/ ",
      title: "Features"
    },
    {
      path:"/customers",
      title: "Customers"
    },
    {
      path:"/",
      title: "Integration"
    },
    {
      path: "/customers",
      title: "pricing"
    },
    // {
    //     path: "/signin"
    // },
  ]
const links2=[
    {
        path: "/signin",
        title: "Sign in"
    },
]
const links3 =[
  {
    path: "/signup",
    
  }
]


  
function Navbar(){

  // NAVBAR SCROLL CHANGE COLOR FUNCTION 
  // AND ADD CONDTIONAL STATEMENT IN CLASSNAME TAG YOU CAN SEE 
  // IN STACK FRAG I USED ({colorChange ? 'Navbar colorChange' : 'Navbar '}) THIS CONDTION


  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 2){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  useEffect(()=>{
    changeNavbarColor()
    window.addEventListener('scroll', changeNavbarColor);
  })
    
    return (
        <nav>
            <Stack className={colorChange ? 'Navbar colorChange' : 'Navbar '} width="100%" margin="auto" marginTop="-60px" position="fixed" >
           
            <Flex alignItems='center' gap='2' height="90px">
            <Container marginLeft={20}>
                
                <Flex gap={5} alignItems='center'>
                {/* <Box  boxSize='100px' height="50px" marginTop={-3}> */}
                <Image boxSize='30%' cursor="pointer" height="90px"  src='https://logos-world.net/wp-content/uploads/2022/04/Harvest-Logo.png' alt='Logo' />
                {/* </Box> */}
                <Box>
                    <Flex gap={5}>
                             {links.map((link)=>(
                           <NavLink key={link.path} to={link.path}>
                           <Text className="NavbarHover" fontSize='1.3vw'>{link.title}</Text>
                           </NavLink> 
                           ))}
                    </Flex>
                </Box>
                </Flex>
            
            </Container>
            
            <Container marginRight="-6%">
                <Flex>
                    {links2.map((link2)=>(
                <NavLink key={link2.path} to={link2.path}>
                    <Text className="NavbarHover" fontSize='1.3vw'  marginLeft="50px" marginTop="10px">{link2.title}</Text>
                </NavLink>
                ))}
                {/* <Container> */}
                  {links3.map((links3)=>(
                <NavLink key={links3.path} to={links3.path}>
                  <Text fontSize='1.3vw' marginLeft="20px" backgroundColor="#fa5d00" padding="10px" borderRadius="15px" color="white" fontWeight="500">
                    Try Harvest Free
                  </Text>
                </NavLink>
                ))}
                </Flex>
            </Container>
            </Flex>
            
            </Stack>
        </nav>
    )
}

export default Navbar;
