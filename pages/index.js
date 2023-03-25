import { BioSection, BioYear } from '../components/layouts/bio'
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Paragraph from '../components/layouts/paragraph'
import Section from '../components/layouts/section'

const Page = () => {
  return (
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
    </Container>
  )
}

export default Page
