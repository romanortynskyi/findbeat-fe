import Role from '@/types/enums/role.enum'
import Model from './model'

interface UserModel extends Model {
  email: string
  firstName: string
  lastName: string
  role: Role
  token: string
}

export default UserModel
