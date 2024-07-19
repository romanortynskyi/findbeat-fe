const styles = {
  avatar: ({
    width,
    height,
    src,
    isClickable,
  }: AppAvatarStylesAvatarParams) => ({
    width,
    height,
    backgroundColor: 'basic.white',
    '& img': {
      padding: src ? 0 : '10px',
    },
    cursor: isClickable ? 'pointer' : 'auto',
  }),
}

export default styles
