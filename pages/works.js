import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'

import Section from '../components/layouts/section'
import { WorkGridItem } from '../components/layouts/grid-item'
import { createClient } from '@sanity/client'

const configuredSanityClient = createClient({
  dataset: `${process.env.SANITY_DATABASE}`,
  projectId: `${process.env.SANITY_PROJECT_ID}`,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2023-04-03',
})

const Works = ({ data }) => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {data.map(project => {
          return (
            <Section delay={0.3} key={project._id}>
              <WorkGridItem
                id={project._id}
                title={project.project_title}
                thumbnail={project.cover_photo}
              >
                {project.project_subtitle}
              </WorkGridItem>
            </Section>
          )
        })}

        {/* <Section delay={0.3}>
          <WorkGridItem id="yam" title={'Yam'} thumbnail={'/images/yoru.jpg'}>
            Yam App
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>

      <Divider my={6} />
      {/* <Section delay={0.3}>

        <Heading as="h3" fontSize={20} mb={4}>
          Old Works
        </Heading>

       
      </Section> */}
    </Container>
  )
}

export async function getServerSideProps() {
  const response = await configuredSanityClient.fetch(
    `{
			"projects": *[_type == "project"]
		}`
  )

  let data = response.projects

  return {
    props: {
      data,
    },
  }
}

export default Works
// export { getServerSideProps } from '../components/chakra'
