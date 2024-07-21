const styles = {
  avatar: ({
    width,
    height,
    src,
    isClickable,
    hasBorder,
  }: AppAvatarStylesAvatarParams) => ({
    width,
    height,
    backgroundColor: 'basic.white',
    '& img': {
      padding: src ? 0 : '10px',
    },
    cursor: isClickable ? 'pointer' : 'auto',
    border: hasBorder ? '3px solid #333436' : 'none',
  }),
}

export default styles
