import { BioSection, BioYear } from '../components/layouts/bio'
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoGitlab, IoLogoLinkedin } from 'react-icons/io5'

import Layout from '../components/layouts/article'
import NextLink from 'next/link'
import Paragraph from '../components/layouts/paragraph'
import Section from '../components/layouts/section'
import { sanityClient } from '../sanity'
import { useNextSanityImage } from 'next-sanity-image'

const Page = ({ data }) => {
  const {
    name,
    profile_photo,
    profession,
    short_description,
    full_description,
  } = data.about

  const { dob_year, hobbies, occupation } = data.bio
  const { education } = data
  const { social } = data

  const imageProps = useNextSanityImage(sanityClient, profile_photo)

  return (
    <Layout>
      <Container>
        <Box
          borderRadius={'lg'}
          bg={useColorModeValue('blue.100', 'blue.900')}
          p={3}
          mb={6}
          mt={10}
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
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
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
            <BioYear>{dob_year}</BioYear>
            {occupation}
          </BioSection>

          {education.map(edu => {
            return (
              <BioSection key={edu.year}>
                <BioYear>{edu.year}</BioYear>
                {edu.designation}
              </BioSection>
            )
          })}
        </Section>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            I love
          </Heading>
          <Box style={{ flexDirection: 'row', display: 'flex' }}>
            {hobbies.map((hob, index) => (
              <p style={{ marginLeft: 5 }} key={index}>
                {hob}
                {index === hobbies.length - 1 ? '' : ','}{' '}
              </p>
            ))}
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            My Socials
          </Heading>
          <List>
            {social.map((soc, index) => {
              return (
                <ListItem key={index}>
                  <Link href={soc.link} target="_blank">
                    <Button
                      variant="ghost"
                      colorScheme="blue"
                      leftIcon={
                        soc.social_icon == 'github' ? (
                          <IoLogoGithub />
                        ) : soc.social_icon == 'linkedin' ? (
                          <IoLogoLinkedin />
                        ) : soc.social_icon == 'gitlab' ? (
                          <IoLogoGitlab />
                        ) : soc.social_icon == 'gmail' ? (
                          <EmailIcon />
                        ) : null
                      }
                    >
                      {soc.social_name}
                    </Button>
                  </Link>
                </ListItem>
              )
            })}
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export async function getServerSideProps() {
  const response = await sanityClient.fetch(
    `{
			"personal": *[_type == "personal"][0]{about->, bio->, 
      
        "education": education[]->, 
       "social": social[]->} 
       
		}`
  )

  let data = response.personal

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
