import { BioSection, BioYear } from '../components/layouts/bio'
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5'

import { GridItem } from '../components/layouts/grid-item'
import Layout from '../components/layouts/article'
import NextLink from 'next/link'
import Paragraph from '../components/layouts/paragraph'
import Section from '../components/layouts/section'
import { createClient } from '@sanity/client'
import { useNextSanityImage } from 'next-sanity-image'

const configuredSanityClient = createClient({
  dataset: `${process.env.SANITY_DATABASE}`,
  projectId: `${process.env.SANITY_PROJECT_ID}`,
  useCdn: process.env.NODE_ENV === 'production',
})

const Page = ({ data }) => {
  const {
    name,
    profile_photo,
    profession,
    short_description,
    full_description,
  } = data
  // const query = encodeURIComponent(`*[ _type == "data" ]`)
  // const url = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${query}`
  // const response = await fetch(url).then(res => res.json())

  // console.log(response, 'respo')
  const imageProps = useNextSanityImage(configuredSanityClient, profile_photo)

  return (
    <Layout>
      <Container>
        <Box
          borderRadius={'lg'}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align={'center'}
        >
          {short_description}
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box>
            <Heading as="h2">{name}</Heading>

            <p>{profession}</p>
          </Box>

          <Box
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            maxWidth={{ base: '40%', md: '25%' }}
            maxHeight={{ base: '40%', md: '25%' }}
            align={'center'}
            margin={'auto'}
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              borderRadius="full"
              src={imageProps.src}
              loader={imageProps.loader}
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>{full_description}</Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1996</BioYear>
            Born in Lahore, Pakistan
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Completed Bachelors in Computer Science from Comsats University,
            Lahore
          </BioSection>

          <BioSection>
            <BioYear>2015</BioYear>
            Completed Fsc Pre-Engineering from Forman Christian College, Lahore
          </BioSection>

          <BioSection>
            <BioYear>2013</BioYear>
            Completed O-Levels from Divisional Public School, Lahore
          </BioSection>
        </Section>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            I love
          </Heading>
          <Paragraph>Art, Music, Gaming, Machine Learning </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/craftzdog" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @craftzdog
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/inkdrop_app" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  @inkdrop_app (English)
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/craftzdog" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  @craftzdog (日本語)
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/craftzdog" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @craftzdog
                </Button>
              </Link>
            </ListItem>
          </List>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://www.youtube.com/devaslife"
              title="Dev as Life"
              thumbnail={'/images/yoru.jpg'}
            >
              My YouTube channel (&gt;150k subs)
            </GridItem>
            <GridItem
              href="https://www.inkdrop.app/"
              title="Inkdrop"
              thumbnail={'/images/yoru.jpg'}
            >
              A Markdown note-taking app
            </GridItem>
          </SimpleGrid>

          <Heading as="h3" variant="section-title">
            Newsletter
          </Heading>
          <p>
            Join me on a behind-the-scenes coding journey. Weekly updates on
            projects, tutorials, and videos
          </p>

          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="https://www.devas.life/"
              scroll={false}
              leftIcon={<EmailIcon />}
              colorScheme="teal"
            >
              Sign up my newsletter here
            </Button>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

console.log(process.env.SANITY_PROJECT_ID, 'process.env.SANITY_PROJECT_ID')

export async function getServerSideProps() {
  const response = await configuredSanityClient.fetch(
    `{
			"aboutMeData": *[_type == "aboutMe"][0] {
        ...,
				profile_photo {
					asset->{
						...,
						metadata
					}
				}
			}
		}`
  )

  let data = response.aboutMeData

  return {
    props: {
      data,
    },
  }
}

//   const query = encodeURIComponent(`*[ _type == "aboutMe" ] profile_photo {
//     asset->{
//       ...,
//       metadata
//     }
//   }
// }`)
//   const url = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${query}`
//   const response = await fetch(url).then(res => res.json())
//   console.log(response, 'responseresponse')
//   return {
//     props: {
//       data: response.result,
//     },
//   }
// }

export default Page

// export { getServerSideProps } from '../components/chakra'
