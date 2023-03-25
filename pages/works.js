import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'

import Section from '../components/layouts/section'
import { WorkGridItem } from '../components/layouts/grid-item'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="inkdrop"
            title={'inkdrop'}
            thumbnail={'/images/yoru.jpg'}
          >
            A markdown ntoe app
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem id="yam" title={'Yam'} thumbnail={'/images/yoru.jpg'}>
            Yam App
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.3}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old Works
        </Heading>

        <WorkGridItem id="yam" title={'Yam'} thumbnail={'/images/yoru.jpg'}>
          Yam App
        </WorkGridItem>
      </Section>
    </Container>
  )
}

export default Works
