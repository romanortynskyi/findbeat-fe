import { useMemo } from 'react'
import { useRouter } from 'next/navigation'

import SignOutCommand from '@/commands/implementations/auth/sign-out.command'
import Path from '@/types/enums/path.enum'

const useSignOutUseCase = () => {
  const router = useRouter()
  const signOutCommand = useMemo(() => new SignOutCommand(), [])

  const execute = async () => {
    await signOutCommand.execute()

    router.replace(Path.Index)
    router.refresh()
  }

  return { execute }
}

export default useSignOutUseCase
