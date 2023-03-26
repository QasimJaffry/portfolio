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

const Page = ({ book }) => {
  // const query = encodeURIComponent(`*[ _type == "book" ]`)
  // const url = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${query}`
  // const response = await fetch(url).then(res => res.json())

  // console.log(response, 'respo')

  console.log(book, 'PARAMS')

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
          Hello, I&apos;m a full-stack developer based in Pakistan!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant={'page-title'}>
              Qasim Hassan
            </Heading>

            <p>Digital Craftzman </p>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/yoru.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Im a freelancer <Link to="/works/inkdrop">Inkdrop</Link>.
          </Paragraph>
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

export async function getServerSideProps() {
  const query = encodeURIComponent(`*[ _type == "book" ]`)
  const url = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${query}`
  const response = await fetch(url).then(res => res.json())
  console.log(response, 'responseresponse')
  return {
    props: {
      book: response.result,
    },
  }
}

export default Page

// export { getServerSideProps } from '../components/chakra'
