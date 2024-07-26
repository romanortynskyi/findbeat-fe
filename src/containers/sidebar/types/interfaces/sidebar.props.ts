import { ReactNode } from 'react'

import UserModel from '@/types/interfaces/models/user.model'

interface SidebarProps {
  children: ReactNode
  user: UserModel | null
}

export default SidebarProps
