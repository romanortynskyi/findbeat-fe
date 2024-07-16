const styles = {
  container: {
    position: 'relative',
  },
  title: {
    position: 'absolute',
    top: 167,
    left: 50,
  },
  subtitle: {
    position: 'absolute',
    top: 281,
    left: 50,
    maxWidth: 450,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 20,
    left: 50,
    width: 'calc(100% - 70px)',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  joinContainer: {
    position: 'absolute',
    top: 'calc(50% + 50px)',
    right: 50,
    transform: 'translateY(-50%)',
  },
  newToFindbeat: {
    mb: '19px',
  },
  chatButton: {
    height: 50,
    width: 50,
    borderRadius: 20,
    backgroundColor: 'primary.main',
    '&:hover': {
      backgroundColor: 'primary.dark',
    },
  },
  chatIcon: {
    width: 30,
    height: 30,
    color: 'basic.black',
  },
}

export default styles
