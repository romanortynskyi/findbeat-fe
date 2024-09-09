import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import Intro from '@/components/intro/intro'
import getCurrentUser from '@/utils/get-current-user'

import styles from './styles'

const Index = async () => {
  const user = await getCurrentUser()
  
  if (user) {
    return (
      <main>
        
      </main>
    )
  }

  return (
    <>
      <main>
        <Box sx={styles.guestContainer}>
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