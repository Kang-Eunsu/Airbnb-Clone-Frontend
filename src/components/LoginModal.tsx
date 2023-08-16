import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack, useDisclosure } from "@chakra-ui/react";
import SocialLogin from "./SocialLogin";
import { FaLock, FaUserNinja } from "react-icons/fa";


interface LoginModalProps {
    isOpen: boolean;
    onClose:() => void;
}
export default function LoginModal({isOpen, onClose}: LoginModalProps){
    return (
        <Modal onClose={onClose} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Log in</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack>
                        <InputGroup>
                            <InputLeftElement children={<Box color="gray.500"><FaUserNinja/></Box>}/>
                            <Input variant={"filled"} placeholder="Username" />
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