import Role from '@/types/enums/role.enum'

import Model from './model'
import FileModel from './file.model'

interface UserModel extends Model {
  email: string
  firstName: string
  lastName: string
  username: string
  role: Role
  token: string
  image: FileModel | null
}

export default UserModel
