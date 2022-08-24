import { Box, Button, Flex, Grid, Image, Link, Stack, Text } from "@chakra-ui/react";

function Footer() {
    
    return (

        <div>
            <div className="Footer">
                <Stack>
                    <Flex width="80%" margin="auto" marginTop="50px">
                        <Box width="50%" margin="auto">
                            <Grid textAlign="start">
                                <Text fontSize="2.7rem">Start tracking time today</Text>
                                <Text fontSize="1.5rem" marginTop="20px">Join 70,000+ companies spending their time wisely with Harvest.</Text>
                            
                                <Box >
                                    <Flex width="100%" >
                                        <Box marginTop="50px">
                                        <Button position="-moz-initial" width="150px" height="50px" borderRadius="17px" textColor="white" colorScheme="#fa5d00" backgroundColor='#fa5d00' >Try Harvest free</Button>
                                        </Box>
                                        <Box width="100%" marginTop="60px" marginLeft="10px">
                                        <Text fontSize="1.1rem" color="grey" fontWeight="400">Free 30-day trial. No credit card required.</Text>
                                        </Box>
                                        
                                    </Flex>
                                </Box>
                                
                            </Grid>
                        </Box>

                        <Box width="50%" margin="70px" marginLeft="80px">
                            <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg" alt="" />
                        </Box>
                    </Flex>
                </Stack>
            </div>

            <div className="FooterBlack">
                <Stack width="80%" margin="auto">
                    <Flex justifyContent="space-around">
                        <Stack>
                            <Box marginTop="70px">
                                <Image width="250px" height="200px" src="https://logos-world.net/wp-content/uploads/2022/04/Harvest-Logo.png" alt="" />
                            </Box>
                        </Stack>
                        <Stack>
                            <Grid fontSize="1.1rem" textAlign="start" marginTop="70px">
                                <Text fontSize="1.5rem" marginBottom="7px" textColor="white">Harvest</Text>
                                    <Link color='red' href='#'>
                                       <Text textColor="white"> Home</Text>
                                    </Link>
                                    <Link color='red' href='#'>
                                       <Text textColor="white"> Why Harvest?</Text>
                                    </Link>
                                    <Link color='red' href='#'>
                                       <Text textColor="white"> Features</Text>
                                    </Link>
                                    <Link color='red' href='#'>
                                       <Text textColor="white"> Pricing</Text>
                                    </Link>
                                    <Link color='red' href='#'>
                                       <Text textColor="white"> Integrations</Text>
                                    </Link>
                                    <Link color='red' href='#'>
                                       <Text textColor="white"> Apps</Text>
                                    </Link>
                                    <Link color='red' href='#'>
                                       <Text textColor="white"> Security</Text>
                                    </Link>
                            </Grid>
                        </Stack>
                        <Stack>
                        <Grid fontSize="1.1rem" textAlign="start" marginTop="70px">
                                <Text fontSize="1.5rem" marginBottom="7px" textColor="white">Community</Text>
                                    <Link color='red' href='#'>
                                       <Text textColor="white"> Customer Stories</Text>
                                    </Link>
                                    <Link color='red' href='#'>
                                       <Text textColor="white"> Resources</Text>
                                    </Link>
                                    <Link color='red' href='#'>
                                       <Text textColor="white"> Webinars</Text>
                                    </Link>
                                    <Link color='red' href='#'>
                                       <Text textColor="white"> Help & support</Text>
                                    </Link>
                                    <Link color='red' href='#'>
                                       <Text textColor="white"> Integrate with Harvest</Text>
                                    </Link>
                                    <Link color='red' href='#'>
                                       <Text textColor="white"> Time Well Spent</Text>
                                    </Link>
                                    <Link color='red' href='#'>
                                       <Text textColor="white"> Time In This Time</Text>
                                    </Link>
                            </Grid>
                        </Stack>
                        <Stack>
                        <Grid fontSize="1.1rem" textAlign="start" marginTop="70px">
                                <Text fontSize="1.5rem" marginBottom="7px" textColor="white">Company</Text>
                                    <Link color='red' href='#'>
                                       <Text textColor="white"> About Us</Text>
                                    </Link>
                                    <Link color='red' href='#'>
                                       <Text textColor="white"> Blog</Text>
                                    </Link>
                                    <Link color='red' href='#'>
                                       <Text textColor="white"> Careers</Text>
                                    </Link>
                                    <Link color='red' href='#'>
                                       <Text textColor="white"> Legal</Text>
                                    </Link>
                                    <Link color='red' href='#'>
                                       <Text textColor="white"> Contact us</Text>
                                    </Link>
                                    
                            </Grid>
                        </Stack>
                    </Flex>

                    <Stack>
                        <Box marginBottom="50px" marginTop="50px" borderRadius="17px">
                            <Button position="-moz-initial" width="100%" height="50px" borderRadius="17px"  textColor="grey" colorScheme='gray' backgroundColor="transparent" variant='outline' >
                               We also make: Harvest Forecast - the fast and simple way to schedule your team across projects.Twitter 
                            </Button>
                        </Box>
                    </Stack>

                    <Stack width="80%" margin="auto" >
                        <Flex justifyContent="space-between" marginBottom="50px">
                            <Box color="gray" fontSize="1.2rem" fontWeight="500">
                            <Text>© 2006-2022 Harvest</Text>
                            </Box>
    
                            <Box color="gray" fontSize="1.2rem" fontWeight="500" marginRight="-200px">
                                <Flex gap={5}>
                                    <Link href='#'>
                                        <Flex gap={5}>
                                        <Image boxSize="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgA7SXwVE6eiZGHIHm1wypXtkQlfXpwYPWQg&usqp=CAU" alt="" />
                                        <Text>Twitter</Text>
                                    </Flex>
                                    </Link>

                                    <Link href='#'>
                                        <Flex gap={5}>
                                        <Image boxSize="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUuQb6Cw_6s7F68QCQ8n3T8i2qp0Z-uvJL_Q&usqp=CAU" alt="" />
                                        <Text>LinkedIn</Text>
                                    </Flex>
                                    </Link>

                                    <Link href='#'>
                                        <Flex gap={5}>
                                        <Image boxSize="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQrXHi9QpoBmf-Mj3ejRX6h_EPjvcakDtBg&usqp=CAU" alt="" />
                                        <Text>Instagram</Text>
                                        </Flex>
                                    </Link>
                                </Flex>
                            </Box>
                        </Flex>
                    </Stack>

                </Stack>
            </div>
        </div> 
    )
}

export default Footer;