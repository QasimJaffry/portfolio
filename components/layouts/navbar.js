import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from './logo'
import NextLink from 'next/link'
import ThemeToggleButton from './themeToggleButton'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inActiveColor = useColorModeValue('gray.900', 'whiteAlpha.900')

  return (
    <NextLink href={href}>
      <Box
        p={2}
        borderRadius={10}
        bg={active ? '#6CB4EE' : undefined}
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
      zIndex={1}
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

        <Box flex={1} align={'right'}>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant={'outline'}
                aria-label={'Options'}
              />
              <MenuList>
                <NextLink href={'/'} passHref>
                  <MenuItem>About</MenuItem>
                </NextLink>

                <NextLink href={'/works'} passHref>
                  <MenuItem>Works</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default NavBar
