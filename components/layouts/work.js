import { Badge, Box, Heading, Image, Link } from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'
import { sanityClient } from '../../sanity'
import { useNextSanityImage } from 'next-sanity-image'

// import NextLink from 'next/link'

export const Title = ({ children }) => {
  return (
    <Box>
      {/* <NextLink href="/works"> */}
      <Link href="/works">Works</Link>
      {/* </NextLink> */}

      <span>
        &nbsp;
        <ChevronRightIcon />
        &nbsp;
      </span>
      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  )
}

export const WorkImage = ({ src, alt }) => {
  const imageProps = useNextSanityImage(sanityClient, src)
  return (
    <Image borderRadius={'lg'} w="full" src={imageProps.src} alt={alt} mb={4} />
  )
}

export const Meta = ({ children }) => {
  return (
    <Badge colorScheme="green" mr={2}>
      {children}
    </Badge>
  )
}
