import { FC } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import UserMenuProps from './types/interfaces/user-menu.props'

const UserMenu: FC<UserMenuProps> = (props) => {
  const {
    isOpen,
    anchorElement,
    onClose,
    onSignOut,
  } = props

  return (
    <Menu
      open={isOpen}
      anchorEl={anchorElement}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoFocus={false}
    >
      <MenuItem>Settings</MenuItem>
      <MenuItem onClick={onSignOut}>Sign out</MenuItem>
    </Menu>
  )
}

export default UserMenu
