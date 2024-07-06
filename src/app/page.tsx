import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import Intro from '@/components/intro/intro'

import styles from './styles'

const Index = () => {
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