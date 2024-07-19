import { getServerSession } from 'next-auth/next'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import Intro from '@/components/intro/intro'
import Header from '@/containers/header'
import UserModel from '@/types/interfaces/models/user.model'
import { authOptions } from './api/auth/[...nextauth]/route'

import styles from './styles'
import Role from '@/types/enums/role.enum'

const Index = async () => {
  const session = await getServerSession(authOptions)

  const user: UserModel = {
    id: session?.user.id ?? -1,
    email: session?.user?.email ?? '',
    firstName: session?.user?.firstName ?? '',
    lastName: session?.user?.lastName ?? '',
    role: session?.user?.role ?? Role.User,
    token: session?.user?.token ?? '',
    createdAt: new Date(session?.user?.createdAt ?? ''),
    updatedAt: new Date(session?.user?.updatedAt ?? ''),
  }

  if (user.id > 0) {
    return (
      <main>
        <Container sx={styles.headerContainer}>
          <Header user={user} />
        </Container>
      </main>
    )
  }

  return (
    <>
      <main>
        <Box sx={styles.guestContainer}>
          <Container sx={styles.headerContainer}>
            <Header user={user} />
          </Container>

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