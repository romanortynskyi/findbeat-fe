interface UserMenuProps {
  isOpen: boolean,
  anchorElement: HTMLElement | null,
  onClose: () => void,
  onSignOut: () => void
}

export default UserMenuProps
