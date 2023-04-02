import { Box, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'

import { Global } from '@emotion/react'
import { createClient } from '@sanity/client'
import { useNextSanityImage } from 'next-sanity-image'

// import Image from 'next/image'

const configuredSanityClient = createClient({
  dataset: `${process.env.SANITY_DATABASE}`,
  projectId: `${process.env.SANITY_PROJECT_ID}`,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2023-04-03',
})

export const GridItem = ({ children, href, title, thumbnail }) => {
  return (
    <Box w="100%" align="center">
      <LinkBox cursor={'pointer'}>
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />

        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>

        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

export const WorkGridItem = ({ children, id, title, thumbnail }) => {
  const imageProps = useNextSanityImage(configuredSanityClient, thumbnail)

  return (
    <Box
      w="100%"
      align={'center'}
      // maxWidth={{ base: '40%', md: '90%' }}
      // maxHeight={{ base: '40%', md: '%' }}
    >
      <LinkBox cursor={'pointer'} href={`/works/${id}`}>
        <Image
          // src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          borderStyle="solid"
          src={imageProps.src}
          loader={imageProps.loader}
          borderWidth={1}
          borderRadius="12px"
        />

        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

export const GridItemStyle = () => {
  return (
    <Global
      styles={`.grid-item-thumbnail {
        border-radius: 12px
    }`}
    />
  )
}
