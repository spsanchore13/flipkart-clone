import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

import Login from "./Login";
import Register from "./Register";

const AuthModal = ({ isOpen, onClose }) => {
  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <Modal size="3xl" onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody p={0} borderRadius={10}>
          {isNewUser ? (
            <Register setIsNewUser={setIsNewUser} />
          ) : (
            <Login setIsNewUser={setIsNewUser} />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AuthModal;
