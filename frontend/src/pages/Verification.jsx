import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
} from "@chakra-ui/react";


const VerificationButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <button
        type="button"
        onClick={onOpen}
        className="inline-flex items-center justify-center px-4 py-2 mr-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
    >
        Start
    </button>

    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quae,
                delectus sequi doloremque quibusdam repellendus aliquam explicabo,
                sunt ipsum laudantium numquam nesciunt quia accusamus quos non porro
                at. Similique, est.
            </ModalBody>

            <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
</>
  
  )
}

export default VerificationButton
