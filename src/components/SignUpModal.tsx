import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack, useDisclosure } from "@chakra-ui/react";
import SocialLogin from "./SocialLogin";
import { FaEnvelope, FaLock, FaUserNinja, FaUserSecret } from "react-icons/fa";


interface LoginModalProps {
    isOpen: boolean;
    onClose:() => void;
}
export default function SignUpModal({isOpen, onClose}: LoginModalProps){
    return (
        <Modal onClose={onClose} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Sign Up</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack>
                        <InputGroup>
                            <InputLeftElement children={<Box color="gray.500"><FaUserSecret/></Box>}/>
                            <Input variant={"filled"} placeholder="Name" />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={<Box color="gray.500"><FaUserNinja/></Box>}/>
                            <Input variant={"filled"} placeholder="Username" />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={<Box color="gray.500"><FaEnvelope/></Box>}/>
                            <Input variant={"filled"} placeholder="Email" />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={<Box color="gray.500"><FaLock /></Box>} />
                            <Input variant={"filled"} placeholder="Password" />
                        </InputGroup>
                        <Button mt={4} colorScheme="red" width="100%">
                            Log in
                        </Button>
                    </VStack>
                    <SocialLogin />
                </ModalBody>
                
            
            </ModalContent>
        </Modal>
    )
}