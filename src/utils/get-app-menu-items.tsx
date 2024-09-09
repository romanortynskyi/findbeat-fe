import HomeIcon from '@mui/icons-material/Home'
import ExploreIcon from '@mui/icons-material/Explore'
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo'
import ChatIcon from '@mui/icons-material/Chat'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import LanguageIcon from '@mui/icons-material/Language'
import AppMenuItem from '@/types/interfaces/common/app-menu-item'

const styles = {
  icon: {
    color: 'basic.black',
    height: 40,
    width: 40,
  },
}

const getAppMenuItems = (t: any): AppMenuItem[] => [
  {
    href: '/',
    icon: <HomeIcon sx={styles.icon} />,
    title: t('home'),
  },
  {
    href: '/explore',
    icon: <ExploreIcon sx={styles.icon} />,
    title: t('explore'),
  },
  {
    href: '/videos',
    icon: <SlowMotionVideoIcon sx={styles.icon} />,
    title: t('videos'),
  },
  {
    href: '/chats',
    icon: <ChatIcon sx={styles.icon} />,
    title: t('chats'),
  },
  {
    href: '/create',
    icon: <AddCircleIcon sx={styles.icon} />,
    title: t('create'),
  },
  {
    href: '/connect',
    icon: <LanguageIcon sx={styles.icon} />,
    title: t('connect'),
  },
]

export default getAppMenuItems
