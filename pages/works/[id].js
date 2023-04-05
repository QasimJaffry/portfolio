import { Box, Container, Link, List, ListItem } from '@chakra-ui/react'
import { Meta, Title, WorkImage } from '../../components/layouts/work'

import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import P from '../../components/layouts/paragraph'
import { sanityClient } from '../../sanity'

export async function getServerSideProps(context) {
  const { id } = context.params

  const response = await sanityClient.fetch(
    `{"project": *[_type == "project" && _id == "${id}"][0]}`
  )

  let data = response.project

  return {
    props: {
      data,
    },
  }
}

export default function Work({ data }) {
  return (
    <Layout title={data.project_title}>
      <Container>
        <Box mt={10}>
          <Title>{data.project_title}</Title>
          <P>{data.project_description}</P>
          <List ml={4} my={4}>
            {data?.website && (
              <ListItem>
                <Meta>Website</Meta>
                <Link href={`${data?.website}/`}>
                  {data?.website} <ExternalLinkIcon mx="2px" />
                </Link>
              </ListItem>
            )}

            {data?.android_link && (
              <ListItem>
                <Meta>Google Play</Meta>
                <Link href={`${data?.android_link}/`}>
                  {data?.android_link} <ExternalLinkIcon mx="2px" />
                </Link>
              </ListItem>
            )}

            {data?.ios_link && (
              <ListItem>
                <Meta>App Store</Meta>
                <Link href={`${data?.ios_link}/`}>
                  {data?.ios_link} <ExternalLinkIcon mx="2px" />
                </Link>
              </ListItem>
            )}

            {data?.platform && (
              <ListItem>
                <Meta>Platform</Meta>
                <span>{data.platform}</span>
              </ListItem>
            )}

            {data?.stack && (
              <ListItem>
                <Meta>Stack</Meta>
                <span>{data.stack}</span>
              </ListItem>
            )}

            {data?.features && (
              <ListItem>
                <Meta>Main Features</Meta>
                <span>{data.features}</span>
              </ListItem>
            )}

            {data?.blog && (
              <ListItem>
                <Meta>Blogpost</Meta>
                <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
                  How I’ve Attracted The First 500 Paid Users For My SaaS That
                  Costs $5/mo <ExternalLinkIcon mx="2px" />
                </Link>
              </ListItem>
            )}
          </List>

          {data.project_images && data.project_images.length > 0
            ? data.project_images.map(images => {
                return (
                  <WorkImage
                    key={images}
                    src={images}
                    alt={data.project_title}
                  />
                )
              })
            : null}
        </Box>
      </Container>
    </Layout>
  )
}

// export { getServerSideProps } from '../components/chakra'
