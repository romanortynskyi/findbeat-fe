const styles = {
  link: {
    width: '100%',
  },
  button: (isSelected: boolean) => ({
    width: '100%',
    color: 'basic.black',
    backgroundColor: isSelected ? 'primary.main' : 'basic.white',
    '&:hover': {
      backgroundColor: isSelected ? 'primary.dark' : 'white.dark',
    },
    justifyContent: 'flex-start',
  }),
}

export default styles
