import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Wrap,
  WrapItem,
  useColorModeValue,
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from './logo'
import NextLink from 'next/link'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inActiveColor = useColorModeValue('gray.200', 'whiteAlpha.900')

  return (
    <NextLink href={href}>
      <Box
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inActiveColor}
      >
        {children}
      </Box>
    </NextLink>
  )
}

const NavBar = props => {
  const { path } = props

  return (
    <Box
      position={'fixed'}
      as="nav"
      w={'100%'}
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align={'center'} mr={5}>
          <Heading as={'h1'} size={'lg'} letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems={'center'}
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href={'/works'} path={path}>
            Works
          </LinkItem>
        </Stack>
      </Container>
    </Box>
  )
}

export default NavBar
