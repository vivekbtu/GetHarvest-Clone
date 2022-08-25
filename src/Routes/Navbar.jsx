// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const links = [
//   {
//     path:"/",
//     title:"Home"
//   },
//   {
//     path:"/whyharvest",
//     title: "WhyHarvest"
//   },
//   {
//     path:"/features",
//     title: "Features"
//   },
//   {
//     path:"/customers",
//     title: "Customers"
//   },
//   {
//     path: "/integrations",
//     title: "Integrations"
//   },
//   {
//     path: "/pricing",
//     title: "Pricing"
//   }
// ]

// function NavBar() {
//   return (
//     <>
//       {links.map((link)=> (
//         <NavLink key={link.path} to={link.path}>
//           {link.title}
//         </NavLink>
//       ))}
//     </>
//   )
// }

// export default NavBar







import { Box, Button, Container, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import React from "react";


const links = [
    {
      path:"/",
      title:"WhyHarvest?"
    },
    {
      path:"/features",
      title: "Features"
    },
    {
      path:"/customers",
      title: "Customers"
    },
    {
      path:"/integration",
      title: "Integration"
    },
    {
      path: "/pricing",
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

    return (
        <div className="Navbar">
            <Stack width="100%" margin="auto" marginTop="-50px" position="fixed" backgroundColor="white" >
           
            <Flex alignItems='center' gap='2' height="70px">
            <Container marginLeft={20}>
                
                <Flex gap={5} alignItems='center'>
                {/* <Box  boxSize='100px' height="50px" marginTop={-3}> */}
                <Image boxSize='150px' height="90px"  src='https://logos-world.net/wp-content/uploads/2022/04/Harvest-Logo.png' alt='Logo' />
                {/* </Box> */}
                <Box >
                    <Flex gap={5}>
                             {links.map((link)=>(
                           <NavLink key={link.path} to={link.path}>
                           <Text fontSize='1.3rem'>{link.title}</Text>
                           </NavLink> 
                           ))}
                    </Flex>
                </Box>
                </Flex>
            
            </Container>
            
            <Container marginRight={-24}>
                <Flex>
                    {links2.map((link2)=>(
                <NavLink key={link2.path} to={link2.path}>
                    <Text fontSize='1.3rem'  marginLeft="50px" marginTop="10px">{link2.title}</Text>
                </NavLink>
                ))}
                {/* <Container> */}
                  {links3.map((links3)=>(
                <NavLink key={links3.path} to={links3.path}>
                  <Text fontSize='1.3rem' marginLeft="20px" backgroundColor="#fa5d00" padding="10px" borderRadius="15px" color="white" fontWeight="500">
                    Try Harvest Free
                  </Text>
                </NavLink>
                ))}
                </Flex>
            </Container>
            </Flex>
            
            </Stack>
        </div>
    )
}

export default Navbar;
