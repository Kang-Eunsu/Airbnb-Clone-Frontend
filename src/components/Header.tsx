import { Box, Button, Divider, HStack, IconButton, Stack, useColorMode, useColorModeValue, useDisclosure} from "@chakra-ui/react";
import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";
import SignUpModal from "./SignUpModal";

export default function Header(){
    const{ isOpen:isLoginOpen, onClose: onLoginClose, onOpen: onLoginOpen} = useDisclosure();
    const{ isOpen:isSignUpOpen, onClose: onSignUpClose, onOpen:onSignUpOpen} = useDisclosure();
    const { toggleColorMode } = useColorMode();
    const logoColor = useColorModeValue("red.500", "red.200"); // light 모드일 때 red.500 반환, dark 모드일 때 red.200 반환
    const Icon = useColorModeValue(FaMoon, FaSun);
    return (
        <Box>
            <Stack direction={{
                sm: "column",
                md: "row",
            }} 
            alignItems={"center"}
            spacing={{
                sm:3,
                md:4,
            }}
            justifyContent={"space-between"} py={"5"} px={"10"} borderBottomWidth={"1"}>
                <Box color={logoColor}>
                    <Link to="/">
                        <FaAirbnb size={"48"}/>
                    </Link>
                </Box>
                <HStack spacing={"1rem"}>
                    <IconButton 
                        onClick={toggleColorMode} 
                        variant={"ghost"} 
                        aria-label="Toggle Dark Mode" 
                        icon={ <Icon /> }>
                    </IconButton>
                    <Button onClick={onLoginOpen}>Log in</Button>
                    <Button onClick={onSignUpOpen} colorScheme="red">Sign up</Button>
                </HStack>
                <LoginModal isOpen={isLoginOpen} onClose={onLoginClose}/>
                <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose}/>
            </Stack>
            <Divider />
        </Box>
        
    )
}