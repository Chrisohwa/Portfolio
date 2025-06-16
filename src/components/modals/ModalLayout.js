import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

const ModalLayout = ({ children, isOpen, onClose }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return isMobile ? (
    <Drawer
      trapFocus={false}
      isOpen={isOpen}
      onClose={onClose}
      placement="bottom"
    >
      <DrawerOverlay backdropFilter="auto" backdropBlur="2px" />
      <DrawerContent
        borderTopRadius="20px"
        bg="#fff"
        color="#000"
        fontFamily="Open Sans"
      >
        <DrawerBody p="30px 20px" overflowY="auto">
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  ) : (
    <Modal isCentered trapFocus={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropFilter="auto" backdropBlur="2px" />
      <ModalContent
        py="32px"
        px="0"
        overflowY="auto"
        borderRadius="8px"
        bg="#fff"
        fontFamily="Open Sans"
        color="#000"
      >
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalLayout;
