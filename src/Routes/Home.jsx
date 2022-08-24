import { Box, Button, Container, Flex, Grid, Image, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { ArrowForwardIcon, ChevronRightIcon } from "@chakra-ui/icons"
import Navbar from "./Navbar";
import Footer from "./Footer";


function Home() {

    return (
        <div className="Home">
            <Navbar />

            <Stack width="100%" margin="auto" marginTop="50px" >
                <Stack>
                    <Container marginTop="40px">
                        <Flex gap={-10}>
                            <Box margin="auto" >
                                <Flex gap={2}>
                                    <Image src="https://res.cloudinary.com/spiralyze/image/upload/v1657791092/Harvest/1029-Harvest-Home-Center-Align/Rate_stars_1.svg" alt="" />
                                    <Text>4.6</Text>
                                    <Text fontSize="17px" color="grey">(491 reviews)</Text>
                                </Flex>
                            </Box>
                        </Flex>
                    </Container>

                    <Container fontSize="3rem" marginTop="20px">
                        <Box width="70%" margin="auto" fontStyle="oblique" fontFamily="monospace">
                            <Text>Finally, time tracking that your team actually wants to use.</Text>
                        </Box>
                    </Container>

                    <Stack  >
                        <Text fontSize="19px" fontWeight="400" color="grey" >Intuitive time tracking. Instant report generation. Automatic invoice creation.</Text>
                    </Stack>

                    <Stack>
                        <Box marginTop="30px" >
                            <Button position="-moz-initial" width="200px" height="50px" borderRadius="20px" marginLeft="10px" textColor="white" colorScheme="orange" backgroundColor='#fa5d00'>Try Harvest free</Button>
                        </Box>
                    </Stack>

                    <Stack>
                        <Text marginTop="10px" fontSize="16px" fontWeight="400" color="grey">Free 30-day trial. No credit card required.</Text>
                    </Stack>

                    <Stack>
                        <Box boxSize="80%" display="block" margin="auto">
                            <Image src='https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1029-Harvest-Home-Center-Align/Hero_Image_2x.jpg' alt='Dan Abramov' />
                        </Box>
                    </Stack>

                    <Stack width="80%" margin="auto">
                        <Flex margin="auto" width="80%">
                            <Text fontSize="17px" color="#fa5d00">70,000+</Text>
                            <Text fontSize="17px" fontWeight="400" color="grey">companies track time with Harvest</Text>
                            {/* <Box height="1px" border="solid 1px #fa5d00" />   */}
                        </Flex>
                    </Stack>

                    <Stack >
                        <Flex width="80%" margin="auto" justifyContent="space-between" gap={-3} marginTop="20px" marginBottom="20px" >
                            <Box >
                                <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize" alt="vw" />
                            </Box>
                            <Box>
                                <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize" alt="aclu" />
                            </Box>
                            <Box>
                                <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize" alt="conde" />
                            </Box>
                            <Box>
                                <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize" alt="Dell" />
                            </Box>
                            <Box>
                                <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize" alt="amnesty" />
                            </Box>
                            <Box>
                                <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-deloitte.svg?noresize" alt="deloitte" />
                            </Box>
                            <Box>
                                <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-lululemon.svg?noresize" alt="lulu" />
                            </Box>
                            <Box>
                                <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-yale.svg?noresize" alt="Yale" />
                            </Box>
                        </Flex>
                    </Stack>

                    <Box border="solid 0.5px #fa5d00" backgroundColor="#fa5d00"></Box>

                </Stack>

                {/* GETTING STARTED */}

                <Stack>
                    <Stack marginTop="40px" fontSize="3.5rem" fontWeight="350">
                        <Text>Getting started</Text>
                    </Stack>
                    <Stack marginTop="20px" fontSize="1.8rem" fontWeight="350">
                        <Text>Time tracking so easy, your team will actually use it.</Text>
                    </Stack>

                    <Stack >
                        <Flex width="80%" margin="auto" gap={10}>
                            <Box width="30%">
                                <Image src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1006_Harvest_Home_How_It_Works-20220601/Create_a_projects1.png" alt="" />
                                <Box marginTop="25px" textAlign="start">
                                    <Text fontSize="27px" >Create a project</Text>
                                    <Text marginTop="5px" fontSize="1rem" color="grey" fontWeight="400">Create entries for your projects and tasks, or import them via one of our integrations.</Text>
                                </Box>
                            </Box>
                            <Box width="30%" >
                                <Image src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1006_Harvest_Home_How_It_Works-20220601/Track_time.png" alt="" />
                                <Box marginTop="25px" textAlign="start">
                                    <Text fontSize="27px" >Track time</Text>
                                    <Text marginTop="5px" fontSize="1rem" color="grey" fontWeight="400">Click start to begin tracking time. Stop and start timers as you switch tasks.</Text>
                                </Box>
                            </Box>
                            <Box width="30%" >
                                <Image src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1006_Harvest_Home_How_It_Works-20220601/Img_step3.png" alt="" />
                                <Box marginTop="25px" textAlign="start">
                                    <Text fontSize="27px" >Create a project</Text>
                                    <Text marginTop="5px" fontSize="1rem" color="grey" fontWeight="400">Easily convert time entries into internal reporting or client invoices.</Text>
                                </Box>
                            </Box>
                        </Flex>
                    </Stack>

                    <Stack>
                        <Box marginTop="30px">
                            <Button position="-moz-initial" width="200px" height="60px" borderRadius="17px" marginLeft="10px" textColor="white" colorScheme="orange" backgroundColor='#fa5d00' fontWeight="700" fontSize="20px">Get started </Button>
                        </Box>
                    </Stack>

                    <Stack width="100%" margin="auto" >
                        <Box width="80%" margin="auto" marginTop="50px" border="solid 0.5px #fa5d00" backgroundColor="#fa5d00"></Box>
                    </Stack>


                </Stack>

                {/* FEATURES  */}

                <Stack>
                    <Stack width="100%" margin="auto" marginTop="40px">
                        <Text width="80%" textAlign="start" color="#fa5d00" margin="auto" fontSize="20px" fontWeight="700">FEATURES</Text>
                    </Stack>

                    <Stack width="100%" margin="auto" >
                        <Text width="80%" textAlign="start" margin="auto" fontSize="2.5rem" fontFamily="mono">Everything you need to keep your team ticking</Text>
                    </Stack>

                    <Stack width="100%" margin="auto" >
                        <Text width="80%" textAlign="start" margin="auto" fontSize="1.6rem" fontFamily="mono" >Time tracking software that helps you keep time and get insights.</Text>
                    </Stack>

                    <Stack >
                        <Flex width="80%" margin="auto" marginTop="20px" justifyContent="space-around" >
                            <Box width="32%" border="solid 1px red" height="180px" borderRadius="15px">
                                <Grid gap={5}>
                                    <Flex alignItems="center" marginTop="20px" marginLeft="10px" gap={5}>
                                        <Image boxSize="60px" src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1029-Harvest-Home-Center-Align/time-tracking.png" alt="time" />
                                        <Text fontSize="1.8rem">Time tracking</Text>
                                    </Flex>
                                    <Text textAlign="start" fontSize="1.3rem" marginLeft="15px" marginRight="10px" fontWeight="400">Simple and intuitive time tracking your team will love.</Text>
                                </Grid>
                            </Box>
                            <Box width="32%" border="solid 1px red" height="180px" borderRadius="10px">
                                <Grid gap={5}>
                                    <Flex alignItems="center" marginTop="20px" marginLeft="10px" gap={5}>
                                        <Image boxSize="60px" src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1029-Harvest-Home-Center-Align/reports-and-analysis.png" alt="reports" />
                                        <Text fontSize="1.8rem">Reports & analysis</Text>
                                    </Flex>
                                    <Text textAlign="start" fontSize="1.3rem" marginLeft="15px" marginRight="10px" fontWeight="400">Unlock the insights that help your business thrive.</Text>
                                </Grid>
                            </Box>
                            <Box width="32%" border="solid 1px red" height="180px" borderRadius="10px">
                                <Grid gap={5}>
                                    <Flex alignItems="center" marginTop="20px" marginLeft="10px" gap={5}>
                                        <Image boxSize="60px" src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1029-Harvest-Home-Center-Align/invoicing-and-payments.png" alt="invoice" />
                                        <Text fontSize="1.8rem">Invoicing & payments</Text>
                                    </Flex>
                                    <Text textAlign="start" fontSize="1.3rem" marginLeft="15px" marginRight="10px" fontWeight="400">Seamless invoicing and fast online payments.</Text>
                                </Grid>
                            </Box>
                        </Flex>
                    </Stack>

                    <Stack >
                        <Box flex="start" width="30%" marginTop="30px">
                            <Button position="-moz-initial" width="130px" height="50px" borderRadius="17px" textColor="white" colorScheme="black" backgroundColor='black' >Learn more</Button>
                        </Box>
                    </Stack>

                    <Stack width="100%" margin="auto" >
                        <Box width="80%" margin="auto" marginTop="50px" border="solid 0.5px #fa5d00" backgroundColor="#fa5d00"></Box>
                    </Stack>
                </Stack>

                {/* INTEGRATIONS */}

                <Stack >
                    <Stack>
                        <Flex width="80%" height="500px" margin="auto">
                            <Box width="40%" margin="70px">
                                <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illustrations/integrations-home.svg" alt="theme" />
                            </Box>

                            <Box width="50%" margin="50px" marginTop="70px">
                                <Grid>
                                    <Box textAlign="start">
                                        <Text color="#fa5d00" fontSize="20px" fontWeight="700">INTEGRATIONS</Text>
                                    </Box>
                                    <Box textAlign="start" marginTop="10px">
                                        <Text fontSize="2.5rem" lineHeight="1.1">Integrated with the tools your team already knows and loves</Text>
                                    </Box>
                                    <Box textAlign="start" marginTop="20px">
                                        <Text fontSize="2.0rem" fontWeight="300" lineHeight="1.1">Your favorite apps work seamlessly with Harvest so you can keep projects on track however you work.</Text>
                                    </Box>

                                    <Box flex="start" width="30%" marginTop="30px">
                                        <Button position="-moz-initial" width="200px" height="50px" borderRadius="17px" textColor="white" colorScheme="black" backgroundColor='black' >Browser integrations</Button>
                                    </Box>
                                </Grid>
                            </Box>
                        </Flex>
                    </Stack>
                </Stack>

                <Stack width="100%" margin="auto" >
                    <Box width="80%" margin="auto" marginTop="20px" border="solid 0.5px #fa5d00" backgroundColor="#fa5d00"></Box>
                </Stack>

                {/* CUSTOMERS STORIES */}

                <Stack>
                    <Stack width="100%" margin="auto" marginTop="40px">
                        <Text width="80%" textAlign="start" color="#fa5d00" margin="auto" fontSize="20px" fontWeight="700">CUSTOMER STORIES</Text>
                    </Stack>

                    <Stack width="100%" margin="auto" >
                        <Text width="80%" textAlign="start" margin="auto" fontSize="2.5rem" fontFamily="mono">Helping teams thrive since 2006</Text>
                    </Stack>

                    <Stack width="100%" margin="auto" >
                        <Text width="80%" textAlign="start" margin="auto" fontSize="1.6rem" fontFamily="mono" >Teams of all sizes, types, and industries trust Harvest to track their time.</Text>
                    </Stack>

                    <Stack>
                        <Flex width="80%" margin="auto" marginTop="70px">
                            <Box width="90%" borderRight="solid 1px #fa5d00" borderLeft="solid 1px #fa5d00" height="330px">
                                <Grid margin="50px">
                                    <Box>
                                        <Text textAlign="start" fontFamily="mono" fontWeight="500" fontSize="28px">We really focus on work-life balance in remote work… Time tracking reveals if somebody is overburdened and that becomes an immediate conversation.</Text>
                                    </Box>
                                    <Box marginTop="20px">
                                        <Text textAlign="start" fontWeight="600" fontSize="1.5rem">Noah Gedrich, Zehner</Text>
                                    </Box>

                                    <Box marginTop="30px">
                                        <RadioGroup defaultValue='1'>
                                            <Stack>
                                                <Flex gap={5}>
                                                    <Radio size='lg' value='1' colorScheme='orange'></Radio>
                                                    <Radio size='lg' value='2' colorScheme='orange'></Radio>
                                                    <Radio size='lg' value='3' colorScheme='orange'></Radio>
                                                    <Radio size='lg' value='4' colorScheme='orange'></Radio>
                                                </Flex>
                                            </Stack>
                                        </RadioGroup>
                                        {/* <Radio value='3' colorScheme='orange'>Unchecked2</Radio> */}
                                    </Box>
                                </Grid>
                            </Box>

                            <Box borderRight="solid 1px #fa5d00" height="330px">
                                <Box marginLeft="20px" marginRight="20px">
                                    <Image src="https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-zehner.jpg?width=840&height=561&name=home-photo-zehner.jpg" alt="zehner" />
                                </Box>
                            </Box>
                        </Flex>

                        <Stack >
                            <Box flex="start" width="35%" marginTop="50px">
                                <Button position="-moz-initial" width="200px" height="50px" borderRadius="17px" textColor="white" colorScheme="black" backgroundColor='black' >Meet our customers</Button>
                            </Box>
                        </Stack>

                        <Stack width="100%" margin="auto" >
                            <Box width="80%" margin="auto" marginTop="50px" border="solid 0.5px #fa5d00" backgroundColor="#fa5d00"></Box>
                        </Stack>
                    </Stack>
                </Stack>

                {/* LEARNING RESOURCES */}

                <Stack>
                    <Flex width="80%" margin="auto">
                        <Box width="50%" margin="auto" marginTop="170px" >
                            <Grid>
                                <Box width="100%" marginTop="40px">
                                    <Text textAlign="start" color="#fa5d00" margin="auto" fontSize="20px" fontWeight="700">LEARNING RESOURCES</Text>
                                </Box>

                                <Box width="80%" marginTop="20px">
                                    <Text textAlign="start" margin="auto" fontSize="2.5rem" fontFamily="mono">Supporting your team along the way</Text>
                                </Box>
                            </Grid>
                        </Box>

                        <Box width="50%" marginTop="70px">
                            <Grid>
                                <Box borderTop="solid 1.5px #fa5d00" width="100%" height="150px">
                                    <Flex alignItems="center">
                                        <Box marginLeft="10px" boxSize="100px" marginTop="50px" >
                                            <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-folder.svg" alt="home" />
                                        </Box>
                                        <Box marginLeft="20px">
                                            <Grid textAlign="start">
                                                <Text fontSize="2.3rem">Guides and templates</Text>
                                                <Text fontSize="22px" fontWeight="400">Learn how to introduce your team to time tracking and make the most of Harvest.</Text>
                                            </Grid>
                                        </Box>
                                        <Box fontSize="40px" color="#fa5d00">
                                            <ArrowForwardIcon />
                                        </Box>
                                    </Flex>
                                </Box>

                                <Box borderTop="solid 1.5px #fa5d00" width="100%" height="150px">
                                    <Flex alignItems="center">
                                        <Box marginLeft="10px" boxSize="100px" marginTop="50px" >
                                            <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-laptop.svg" alt="webinar" />
                                        </Box>
                                        <Box marginLeft="20px">
                                            <Grid textAlign="start">
                                                <Text fontSize="2.3rem">Webinars</Text>
                                                <Text fontSize="22px" fontWeight="400">Watch a quick intro to Harvest or sign up for a live session with one of our Experts.</Text>
                                            </Grid>
                                        </Box>
                                        <Box fontSize="40px" color="#fa5d00">
                                            <ArrowForwardIcon />
                                        </Box>
                                    </Flex>
                                </Box>
                                
                                <Box borderTop="solid 1.5px #fa5d00" width="100%" height="150px">
                                    <Flex alignItems="center">
                                        <Box marginLeft="10px" boxSize="100px" marginTop="50px" >
                                            <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-help.svg" alt="HelpCenter" />
                                        </Box>
                                        <Box marginLeft="20px">
                                            <Grid textAlign="start">
                                                <Text fontSize="2.3rem">Help Center</Text>
                                                <Text fontSize="22px" fontWeight="400">Find the answers to all your questions or get in touch with one of our friendly Experts.</Text>
                                            </Grid>
                                        </Box>
                                        <Box fontSize="40px" color="#fa5d00">
                                            <ArrowForwardIcon />
                                        </Box>
                                    </Flex>
                                </Box>

                            </Grid>
                        </Box>
                    </Flex>

                    <Stack >
                        <Box border="solid 0.5px #fa5d00" marginTop="50px"  backgroundColor="#fa5d00"></Box>
                    </Stack>

                </Stack>

                <div>
                    <Footer/>
                </div>

            </Stack>

        </div>
    )
}

export default Home;

