import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import styles from './logo.styles'

const Logo = () => {
  return (
    <Box sx={styles.container}>
      <Image
        src='/logo.png'
        alt='logo'
        height={100}
        width={100}
        style={{ marginRight: 20 }}
      />
      <Typography>FINDBEAT</Typography>
    </Box>
  )
}

export default Logo
