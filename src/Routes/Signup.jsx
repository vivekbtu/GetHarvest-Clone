import { CheckCircleIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, Image, Input, Stack, Text } from "@chakra-ui/react"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import React from "react";


function Signup() {

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
            setEmail(e.target.value);
        };
        // const handleChangePass = (e) => {
        //     setPassword(e.target.value);
        // };
    const handleSubmitSignup = (e) => {
        e.preventDefault();
        alert("Account Successfully Created");
        setIsLoading(true);
        setTimeout(() => {
        setIsLoading(false);
        navigate("/Signin");
        }, 1500);
    };

    return (
        <div className="SingnupPage">
            <Stack margin="auto" width="100%" >
                <Stack>
                <Box width="80%" margin="auto">
                    <Image boxSize='80px' width="10%" src='https://logos-world.net/wp-content/uploads/2022/04/Harvest-Logo.png' alt='Logo' />
                </Box>
                </Stack>
                <Stack>
                    <Flex margin="auto" width="80%" >
                        <Box margin="auto" width="50%" height="700px">
                            <Stack marginTop="40px" marginLeft="50px" textAlign="start" marginRight="50px">
                                <Box color="#fa5d00">
                                    <Text fontWeight="500" marginTop="80px">SEE WHY 70,000+ COMPANIES TRACK TIME WITH HARVEST</Text>
                                </Box>
                                <Box>
                                    <Text fontSize="2.5rem" fontFamily="monospace" >Finally, time tracking your team actually wants to use</Text>
                                </Box>

                                <Box>
                                    <Flex alignItems="center">
                                        <Box><CheckCircleIcon /></Box>
                                        <Box marginTop="27px" fontSize="1rem">
                                            <Text>Time Tracking. Easy & intuitive time tracking that captures all your time without changing the way you work.</Text>
                                        </Box>

                                    </Flex>
                                </Box>
                                <Box>
                                    <Flex alignItems="center">
                                        <Box marginTop="-27px"><CheckCircleIcon /></Box>
                                        <Box marginTop="27px" fontSize="1rem">
                                            <Text>Reports & Analysis. Instantly create reports across projects. Budgets, time, team capacity, cost breakdowns, and more.</Text>
                                        </Box>

                                    </Flex>
                                </Box>
                                <Box>
                                    <Flex alignItems="center">
                                        <Box><CheckCircleIcon /></Box>
                                        <Box marginTop="27px" fontSize="1rem">
                                            <Text>Invoicing & Payments. Turn tracked time into invoices. Accept online payments. Sync with QuickBooks and Xero.</Text>
                                        </Box>

                                    </Flex>
                                </Box>
                            </Stack>
                        </Box>

                        <Box margin="auto" width="50%" height="700px" backgroundColor="white" >
                            <form onSubmit={handleSubmitSignup}>
                            <Stack>
                                <Box margin="auto" width="90%" height="600px" marginTop="40px">

                                    <Text fontSize="2.5rem" fontWeight="500">Get a FREE Trail</Text>

                                    <Text fontSize="1.2rem" color="gray">No credit card required</Text>

                                    <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=500745565949-k6idj8rm783v69v80gohems7j0ttit9n.apps.googleusercontent.com&login_hint&redirect_uri=https%3A%2F%2Fid.getharvest.com%2Fgoogle%2Foauth2%2Fcallback&response_type=code&scope=profile%20email&state=%7B%22intent%22%3A%22sign-in%22%2C%22authenticity_token%22%3A%22v9h-nXZgm6Ev36MPV_geKlzZar31MCCJpLxFNwnToYuu9A264XIta0M3lnth9_v_DJDTelX5hYpbRI8d1odQaA%22%7D&flowName=GeneralOAuthFlow">
                                        <Button borderColor="grey" colorScheme='teal' variant='outline' justifyContent="space-between" marginTop="20px" width="90%" borderRadius="5px" height="50px">
                                            <Flex alignItems="center" gap={20}>

                                                <Box>
                                                    <Image boxSize="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt="" />
                                                </Box>

                                                <Text marginLeft="50px" color="gray">Sign in with Google</Text>

                                            </Flex>
                                        </Button>
                                    </a>

                                    <Box>
                                        <Text marginTop="20px" color="gray">or with your email below</Text>
                                    </Box>

                                    <Stack margin="auto" width="90%">
                                        <Flex>
                                            <Box width="100%" marginTop="25px">
                                                <Input width="48%" borderColor="grey" height="50px" backgroundColor="white" placeholder='First name' />
                                                <Input width="47%" marginLeft="20px" height="50px" borderColor="grey" backgroundColor="white" placeholder='Last name' />
                                            </Box>
                                        </Flex>

                                        <Flex>
                                            <Box width="100%" marginTop="15px" marginBottom="15px">
                                                <Input width="48%" borderColor="grey" height="50px" backgroundColor="white" placeholder='Company name' />
                                                <Input value={email} onChange={handleChange} width="47%" marginLeft="20px" height="50px" borderColor="grey" backgroundColor="white" placeholder='Work Email' />
                                            </Box>
                                        </Flex>
                                        <Box width="100%">
                                            <Input borderColor="grey" type="password" height="50px" backgroundColor="white" placeholder='Password' />
                                        </Box>
                                    </Stack>

                                    <Box>
                                        <Input type="submit" height="50px" fontSize="1.2rem" textColor="white" colorScheme='green' marginTop="30px" width="90%" borderRadius="10px" borderColor="grey" backgroundColor="green" cursor="pointer" value="Create my account" />
                                    </Box>
                                    <div className="Signup">
                                        <Flex margin="auto" width="40%" marginTop="10px" gap={3}>
                                            <a href="/Signin">
                                                Already a customer?
                                            </a>
                                            <a href="">
                                                <Text color="teal" >Sign In</Text>
                                            </a>
                                        </Flex>
                                    

                                        <Flex margin="auto" width="90%" fontSize="13px" marginTop="20px" gap={1}>
                                            <Text>By creating an account, you agree to the Harvest </Text>
                                            <a href="">
                                                Terms of service
                                            </a>
                                            <Text>and</Text>
                                            <a href="">
                                                Privacy policy
                                            </a>
                                        </Flex>
                                    </div>
                                </Box>
                            </Stack>
                            </form>
                        </Box>
                    </Flex>
                </Stack>

                    <Stack width="80%" margin="auto">
                        <Flex margin="auto" width="80%" marginTop="30px">
                            <Text fontSize="17px" color="#fa5d00">70,000+</Text>
                            <Text fontSize="17px" fontWeight="400" color="grey">companies track time with Harvest</Text>
                            {/* <Box height="1px" border="solid 1px #fa5d00" />   */}
                        </Flex>
                    </Stack>

                    <Stack >
                        <Flex width="80%" margin="auto" justifyContent="space-between" gap={-3} marginTop="20px" marginBottom="30px" >
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

                    {/* <Box border="solid 0.5px #fa5d00" backgroundColor="#fa5d00"></Box> */}
            </Stack>
        </div>
    )
}

export default Signup