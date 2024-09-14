import UserModel from '@/types/interfaces/models/user.model'
import UserHeaderMenuActions from './user-header-menu-actions'

interface UserHeaderProps {
  user: UserModel
  menuActions: UserHeaderMenuActions
}

export default UserHeaderProps
