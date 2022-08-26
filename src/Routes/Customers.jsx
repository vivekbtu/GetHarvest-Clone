import { Box, Button, Container, Flex, Grid, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar from "./Navbar";


function Customers(){

    return (
        <div>
            <Navbar/>
        
       
        <div className="Customers">
            <Stack margin="auto" width="100%" backgroundColor="#fff8f1" marginTop="50px">
                <Stack width="80%" margin="auto"  marginTop="70px">
                    <Box textAlign="start">
                    <Text fontWeight="350" fontSize="3.4rem">See how Harvest helps teams like yours thrive </Text>
                    </Box>
                    <Box margin="auto" textAlign="start">
                        <Text fontSize="2rem" fontWeight="350">
                            Teams of all sizes, across industries, and around the world track time with Harvest.
                        </Text>
                    </Box>

                    <Stack>
                    <Box borderTop="solid 1px #fa5d00" borderBottom="solid 1px #fa5d00" marginTop="50px">
                        <Flex width="100%" justifyContent="space-between" >
                            <Box >
                                <Flex alignItems="center" >
                                    <Box textAlign="center" marginLeft="70px">
                                    <Grid>
                                        <Text fontSize="3rem">70,000+</Text>
                                        <Text fontSize="2rem" fontWeight="300">customers</Text>
                                    </Grid>
                                    </Box>
                                    <Box marginLeft="50px">
                                        <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-person.svg" alt="" />
                                    </Box>
                                </Flex>
                            </Box>

                            <Box borderLeft="solid 1px #fa5d00" borderRight="solid 1px #fa5d00" >
                                <Flex alignItems="center">
                                    <Box>
                                    <Grid marginLeft="70px">
                                        <Text fontSize="3rem">2 billion</Text>
                                        <Text fontSize="2rem" fontWeight="300">hours tracked</Text>
                                    </Grid>
                                    </Box>
                                    <Box marginLeft="50px" marginRight="50px">
                                        <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-keep.svg" alt="" />
                                    </Box>
                                </Flex>
                            </Box>

                            <Box >
                                <Flex alignItems="center" >
                                <Box>
                                    <Grid>
                                        <Text fontSize="3rem">19.6 million</Text>
                                        <Text fontSize="2rem" fontWeight="300">invoices paid</Text>
                                    </Grid>
                                    </Box>
                                    <Box marginLeft="50px">
                                        <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-money.svg" alt="" />
                                    </Box>
                                </Flex>
                            </Box>

                        </Flex>
                    </Box>
                    </Stack>
                </Stack>

                {/* FEATURED STORY  */}

                 <Stack >
                    <Flex width="80%" margin="auto" marginTop="100px">
                        {/* <div className="CustomersImage"> */}
                        <Box className="CustomersImage" width="100%" >
                            <Image width="100%" height="320px" borderTopLeftRadius="35px" borderBottomEndRadius="35px" src="https://www.getharvest.com/hs-fs/hubfs/customer-profile.jpg?width=1181&name=customer-profile.jpg" alt="" />
                        </Box>
                        {/* </div> */}
                        <Box width="100%">
                            <Box>
                            <Text padding="40px" textAlign="start" color="#fa5d00" margin="auto" fontSize="20px" fontWeight="700">FEATURED STORY</Text>
                            </Box>
                            <Box>
                            <Text fontSize="2rem" textAlign="start" marginLeft="40px" marginTop="-20px">Startup studio Dovetail tracks time with Harvest to build trust with clients.</Text>
                            </Box>
                            <Box flex="start" width="35%" marginTop="20px" marginLeft="40px">
                                <Button position="-moz-initial" width="200px" height="50px" borderRadius="17px" textColor="white" colorScheme="black" backgroundColor='black' >Meet our customers</Button>
                            </Box>
                        </Box>
                        
                    </Flex>
                 </Stack>

                 {/* IMAGE COLLECTION */}

                 <Stack >
                        <Flex width="80%" margin="auto" justifyContent="space-between" gap={-3} marginTop="70px" marginBottom="30px" >
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

                    {/* FIND CUSTOMER STORIES  */}

                    <Stack width="100%" margin="auto" >
                        <Box width="80%" margin="auto" textAlign="start" marginTop="40px">
                            <Text fontSize="3rem" fontWeight="350">Find stories from teams like yours</Text>
                        </Box>
                        <Stack >
                            <Flex width="80%" margin="auto" marginTop="30px">
                                <Box width="30%" textAlign="start" padding="10px">

                                    <Box className="CustomerDetails" marginTop="20px" fontSize="1.3rem" fontWeight="500" color="#fa5d00">
                                        <Text padding="10px">All industries</Text>
                                    </Box>
                                    <Box className="CustomerDetails" marginTop="20px" fontSize="1.3rem" fontWeight="500">
                                        <Text padding="10px">Architecture</Text>
                                    </Box>
                                    <Box className="CustomerDetails" marginTop="20px" fontSize="1.3rem" fontWeight="500">
                                        <Text padding="10px">Creative services</Text>
                                    </Box>
                                    <Box className="CustomerDetails" marginTop="20px" fontSize="1.3rem" fontWeight="500">
                                        <Text padding="10px">Engineering & design</Text>
                                    </Box>
                                    <Box className="CustomerDetails" marginTop="20px" fontSize="1.3rem" fontWeight="500">
                                        <Text padding="10px">Management consulting</Text>
                                    </Box>
                                    <Box className="CustomerDetails" marginTop="20px" fontSize="1.3rem" fontWeight="500">
                                        <Text padding="10px">Web development & IT</Text>
                                    </Box>

                                </Box>

                                {/* CUSTOMER COLUMN  */}
                                
                                <Box width="100%">
                                    <SimpleGrid className="CustomersStory"  columns={3} gap={5} >
                                        
                                        <Box backgroundColor="white" padding="30px" borderRadius="15px">
                                            <Image boxSize="100px" marginTop="-30px" src="https://www.getharvest.com/hubfs/customers/rana/rana-logo.svg" alt="1" />
                                            <Box textAlign="start" >
                                                <Text>Rana, an ecological design company, uses Harvest to keep track of their projects and billable hours in one place.</Text>
                                            </Box>
                                        </Box>
                                    

                                        
                                        <Box backgroundColor="white" padding="30px" borderRadius="15px">
                                            <Image src="https://www.getharvest.com/hubfs/customers/centric-digital/tras.svg" alt="2" />
                                            <Box textAlign="start" marginTop="45px">
                                                <Text>Digital transformation company Centric Digital relies on Harvest’s reports and invoicing.</Text>
                                            </Box>
                                        </Box>
                                        
                                        <Box backgroundColor="white" padding="30px" borderRadius="15px">
                                            <Image src="https://www.getharvest.com/hubfs/customers/mutual-mobile/mutual-mobile-logo.svg" alt="3" />
                                            <Box textAlign="start" marginTop="30px">
                                                <Text>Harvest supported mobile development agency Mutual Mobile in their recent growth.</Text>
                                            </Box>
                                        </Box>
                                        <Box backgroundColor="white" padding="30px" borderRadius="15px">
                                            <Image src="https://www.getharvest.com/hubfs/public-logo.svg" alt="4" />
                                            <Box textAlign="start" marginTop="30px">
                                                <Text>An architecture firm focused on the public realm uses Harvest to keep fixed-fee projects profitable.</Text>
                                            </Box>
                                        </Box>
                                        <Box backgroundColor="white" padding="30px" borderRadius="15px">
                                            <Image src="https://www.getharvest.com/hubfs/customers/hashrocket/hashrocket-logo.svg" alt="5" />
                                            <Box textAlign="start" marginTop="30px">
                                                <Text>Design & development agency Hashrocket uses timers to track time throughout their day.</Text>
                                            </Box>
                                        </Box>
                                        <Box backgroundColor="white" padding="30px" borderRadius="15px">
                                            <Image src="https://www.getharvest.com/hubfs/cooper-perkins/logo-cooper-perkins.svg" alt="6" />
                                            <Box textAlign="start" marginTop="30px">
                                                <Text>Engineering practice Cooper Perkins uses Harvest to project future needs.</Text>
                                            </Box>
                                        </Box>
                                        <Box backgroundColor="white" padding="30px" borderRadius="15px">
                                            <Image src="https://www.getharvest.com/hubfs/customers/logo-dovetail.svg" alt="7" />
                                            <Box textAlign="start" marginTop="30px">
                                                <Text>Startup studio Dovetail tracks time with Harvest to build trust with clients.</Text>
                                            </Box>
                                        </Box>
                                        <Box backgroundColor="white" padding="30px" borderRadius="15px">
                                            <Image src="https://www.getharvest.com/hubfs/luminary-labs/logo-index-luminarylabs-0fe6b11e1f976e648dc6907ba9a2a677a71ed9013820ed9dba0415aaa4c6bd5a-1.svg" alt="8" />
                                            <Box textAlign="start" marginTop="30px">
                                                <Text>Strategy & innovation consultancy Luminary Labs manages team utilization with Harvest.</Text>
                                            </Box>
                                        </Box>
                                        <Box backgroundColor="white" padding="30px" borderRadius="15px">
                                            <Image src="https://www.getharvest.com/hubfs/customers/tekna/tekna-logo.svg" alt="9" />
                                            <Box textAlign="start" marginTop="30px">
                                                <Text>Harvest helps product design company Tekna save time by streamlining their process.</Text>
                                            </Box>
                                        </Box>
                                        <Box backgroundColor="white" padding="30px" borderRadius="15px">
                                            <Image src="https://www.getharvest.com/hubfs/customers/thecharles/the-charles-logo.svg" alt="10" />
                                            <Box textAlign="start" marginTop="30px">
                                                <Text>The Charles uses time tracking to reinforce client and employee happiness.</Text>
                                            </Box>
                                        </Box>
                                        <Box backgroundColor="white" padding="30px" borderRadius="15px">
                                            <Image src="https://www.getharvest.com/hubfs/customers/clinovations/clinovations-logo-1.svg" alt="11" />
                                            <Box textAlign="start" marginTop="30px">
                                                <Text>Healthcare strategists Clinovations streamlined their time tracking with Harvest.</Text>
                                            </Box>
                                        </Box>
                                        <Box backgroundColor="white" padding="30px" borderRadius="15px">
                                            <Image src="https://www.getharvest.com/hubfs/customers/turnstyle/turnstyle-logo.svg" alt="12" />
                                            <Box textAlign="start" marginTop="30px">
                                                <Text>Harvest enables design agency Turnstyle to stay mindful of smart business practices.</Text>
                                            </Box>
                                        </Box>
                                        <Box backgroundColor="white" padding="30px" borderRadius="15px">
                                            <Image src="https://www.getharvest.com/hubfs/customers/vayner-media/vayner-media-logo.svg" alt="13" />
                                            <Box textAlign="start" marginTop="30px">
                                                <Text>Consulting agency VaynerMedia uses Harvest to surface patterns and opportunities.</Text>
                                            </Box>
                                        </Box>
                                        <Box backgroundColor="white" padding="30px" borderRadius="15px">
                                            <Image src="https://www.getharvest.com/hubfs/customers/yld/yld-logo-1.svg" alt="14" />
                                            <Box textAlign="start" marginTop="30px">
                                                <Text>Engineering consultancy YLD relies on Harvest to plan, staff, and manage their projects.</Text>
                                            </Box>
                                        </Box>
                                        <Box backgroundColor="white" padding="30px" borderRadius="15px">
                                            <Image src="https://www.getharvest.com/hubfs/customers/juicyorange/juicyorange-logo-2.svg" alt="15" />
                                            <Box textAlign="start" marginTop="30px">
                                                <Text>Harvest helps web design company Juicyorange justify their pricing.</Text>
                                            </Box>
                                        </Box>
                                        <Box backgroundColor="white" padding="30px" borderRadius="15px">
                                            <Image src="https://www.getharvest.com/hubfs/customers/area-17/area-17-logo.svg" alt="16" />
                                            <Box textAlign="start" marginTop="30px">
                                                <Text>Interactive design agency Area 17 checks Harvest reports to keep tabs on their business.</Text>
                                            </Box>
                                        </Box>
                                        <Box backgroundColor="white" padding="30px" borderRadius="15px">
                                            <Image src="https://www.getharvest.com/hubfs/adamick/adamick-logo.svg" alt="17" />
                                            <Box textAlign="start" marginTop="30px">
                                                <Text>Harvest helps Adamick Architecture speed up invoicing and increase profitability.</Text>
                                            </Box>
                                        </Box>
                                        <Box backgroundColor="white" padding="30px" borderRadius="15px">
                                            <Image src="https://www.getharvest.com/hubfs/customers/ccd-innovation/ccd-logo-1.svg" alt="18" />
                                            <Box textAlign="start" marginTop="30px">
                                                <Text>Harvest helped culinary company CCD innovation step up their operational efficiency.</Text>
                                            </Box>
                                        </Box>
                                        <Box backgroundColor="white" padding="30px" borderRadius="15px">
                                            <Image src="https://www.getharvest.com/hubfs/customers/zehner/zehner-logo.svg" alt="19" />
                                            <Box textAlign="start" marginTop="30px">
                                                <Text>Digital agency Zehner manages their team’s bandwidth with Harvest.</Text>
                                            </Box>
                                        </Box>
                                        <Box backgroundColor="white" padding="30px" borderRadius="15px">
                                            <Image src="https://www.getharvest.com/hubfs/customers/crossley-acoustics/crossley-acoustics-logo.svg" alt="20" />
                                            <Box textAlign="start" marginTop="30px">
                                                <Text>Acoustic design firm Crossley Acoustics uses Harvest to track time from job sites.</Text>
                                            </Box>
                                        </Box>

                                    </SimpleGrid>
                                </Box>
                            </Flex>
                        </Stack>
                        
                    </Stack>
                    <Stack>
                    <Box marginTop="100px" border="solid 0.5px #fa5d00" backgroundColor="#fa5d00"></Box>

                    </Stack>
                    

            </Stack>

            {/* FOOTER SECTION  */}

            <Footer/>

            {/* FOOTER SECTION */}
        </div>

        </div>
    )
}

export default Customers;