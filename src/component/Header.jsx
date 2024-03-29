import React from 'react'
import { Drawer,
    DrawerBody,
    DrawerHeader,DrawerOverlay
,DrawerContent,
DrawerCloseButton ,
Button,
useDisclosure,

VStack,
HStack

} from '@chakra-ui/react'

import {Link} from "react-router-dom"
import {BiMenuAltLeft} from "react-icons/bi"


const Header = () => {
    const {isOpen,onClose,onOpen}= useDisclosure()
  return( <>
<Button zIndex={'overlay'}
pos={"fixed"} top={"4"} left={"4"} colorScheme='purple'
p={"0"} w={"10"} h={'10'} borderRadius={'full'}
 onClick={onOpen}
 ><BiMenuAltLeft size={20} /></Button>
<Drawer isOpen={isOpen} placement='left' onClose={onClose}>
    <div>
       <DrawerOverlay>
    <DrawerContent>
    <DrawerCloseButton/>
    <DrawerHeader>
Video Hub
    </DrawerHeader>
  
    <DrawerBody>
<VStack alignItems={'flex-start'} >
  <Button onClick={onClose} variant={'ghost'} colorScheme='pink'>
   <Link to={"/"}>Home</Link>
    
  </Button>
  <Button onClick={onClose} variant={'ghost'} colorScheme='pink'>
   <Link to={"/videos"}>Videos</Link>
    
  </Button>
  <Button onClick={onClose} variant={'ghost'} colorScheme='pink'>
   <Link to={"/videos?category=free"}>Free Videos</Link>
    
  </Button>
  <Button onClick={onClose} variant={'ghost'} colorScheme='pink'>
   <Link to={"/upload"}>Upload</Link>
    
  </Button>
</VStack>
<HStack pos={"absolute"} bottom={'4'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
  <Button onClick={onClose} colorScheme='facebook'>
    <Link  to={'/login'}>
      Log In
    </Link>
  </Button>
  <Button onClick={onClose} colorScheme='facebook' variant={'outline'}>
    <Link to={'/signup'}>
  Sign Up
    </Link>
  </Button>
</HStack>
    </DrawerBody> 
    </DrawerContent>  
       </DrawerOverlay>
    </div>
</Drawer>
  </>)
}

export default Header