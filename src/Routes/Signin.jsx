import { Box, Button, Flex, Image, Input, LinkBox, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";


function Signin() {

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
            setEmail(e.target.value);
        };
        // const handleChangePass = (e) => {
        //     setPassword(e.target.value);
        // };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
        setIsLoading(false);
        navigate("/");
        }, 1500);
    };

  
        return (
            <div className="Signin">
                <form onSubmit={handleSubmit}>
                <Stack>

                    <Box margin="auto">
                        <Image width="120px" height="80px" src="https://logos-world.net/wp-content/uploads/2022/04/Harvest-Logo.png" alt="logo" />
                    </Box>
                </Stack>
                <Box fontSize="2rem" fontWeight="600" marginTop="20px" >
                    <Text>Sign in to Harvest</Text>
                </Box>
                <Stack width="100%" margin="auto">
                    <Stack>
                        <Box width="95%" height="350px" border="solid 1px #fa5d00" margin="auto" marginTop="30px" backgroundColor="#fff8f1">
                            <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=500745565949-k6idj8rm783v69v80gohems7j0ttit9n.apps.googleusercontent.com&login_hint&redirect_uri=https%3A%2F%2Fid.getharvest.com%2Fgoogle%2Foauth2%2Fcallback&response_type=code&scope=profile%20email&state=%7B%22intent%22%3A%22sign-in%22%2C%22authenticity_token%22%3A%22v9h-nXZgm6Ev36MPV_geKlzZar31MCCJpLxFNwnToYuu9A264XIta0M3lnth9_v_DJDTelX5hYpbRI8d1odQaA%22%7D&flowName=GeneralOAuthFlow">
                                <Button borderColor="grey" colorScheme='teal' variant='outline' justifyContent="space-between" marginTop="20px" width="90%" borderRadius="10px">
                                    <Flex alignItems="center" gap={20}>

                                        <Box>
                                            <Image boxSize="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt="" />
                                        </Box>

                                        <Text marginLeft="30px" color="gray">Sign in with Google</Text>

                                    </Flex>
                                </Button>
                            </a>
                            <Box>
                                <Text color="gray" marginTop="25px">or with your email below</Text>
                            </Box>

                            <Input value={email} onChange={handleChange} width="90%" marginTop="25px" borderColor="grey" backgroundColor="white" placeholder='Work Email' />
                            <Input type="password"  width="90%" marginTop="25px" borderColor="grey" backgroundColor="white" placeholder='Password' />

                            <Input type="submit"  fontSize="1.2rem" textColor="white" colorScheme='green' marginTop="30px" width="90%" borderRadius="10px" borderColor="grey" backgroundColor="green" cursor="pointer" value="Sign in" />

                        </Box>
                    </Stack>
                </Stack>
                </form>
                {/* LINK ATTACH */}

                <div className="SigninATag">
                <Stack marginTop="20px">
                    <Flex justifyContent="space-evenly">
                        <a href="https://id.getharvest.com/password_reset/new">
                            Forgot password?
                        </a>
                        <a href="https://www.getharvest.com/terms-of-service">
                            Terms of service
                        </a>
                        <a href="https://www.getharvest.com/privacy-policy">
                            Privacy policy
                        </a>
                    </Flex>

                </Stack>
                </div>
            </div>
        )
    }

    export default Signin;