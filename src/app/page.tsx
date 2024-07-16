import { getServerSession } from 'next-auth/next'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import Intro from '@/components/intro/intro'
import { authOptions } from './api/auth/[...nextauth]/route'

import styles from './styles'

const Index = async () => {
  const session = await getServerSession(authOptions)

  if (session?.user) {
    return (
      // <SignedInHeader  />
      <>home</>
    )
  }

  return (
    <>
      <main>
        <Box sx={styles.container}>
          <Intro />
        </Box>
      </main>

      <section>
        <Box sx={styles.secondSection}>
          <Container>
            
          </Container>
        </Box>
      </section>
    </>
  )
}

export default Index