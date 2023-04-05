import { Flex, Text, useColorModeValue } from '@chakra-ui/react'

import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold,
font-size: 18px,
display: inline-flex,
align-items: center,
height: 20px,
line-height: 20px,
padding: 10px;

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.rotate:hover  {
  animation: rotation 2s infinite linear;
}


`

const Logo = () => {
  const logoImg = `/images/logo${useColorModeValue('', '-dark')}.png`

  return (
    <Link href={'/'}>
      <LogoBox>
        <Flex align={'center'}>
          <Image
            className="rotate"
            src={logoImg}
            width={70}
            height={70}
            alt={'logo'}
          />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily={'M PLUS Rounded 1c'}
            fontWeight={'bold'}
            ml={2}
          >
            Qasim
          </Text>
        </Flex>
      </LogoBox>
    </Link>
  )
}

export default Logo
