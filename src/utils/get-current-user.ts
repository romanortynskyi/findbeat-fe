import { getServerSession } from 'next-auth'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import UserModel from '@/types/interfaces/models/user.model'

const getCurrentUser = async (): Promise<UserModel | null> => {
  const session = await getServerSession(authOptions)
  
  if (session) {
    return {
      id: session.user.id,
      email: session.user.email,
      firstName: session.user.firstName,
      lastName: session.user.lastName,
      role: session.user.role,
      token: session.user.token,
      username: session.user.username,
      image: session.user.image,
      createdAt: new Date(session.user.createdAt),
      updatedAt: new Date(session.user.updatedAt),
    }
  }

  return null
}

export default getCurrentUser
