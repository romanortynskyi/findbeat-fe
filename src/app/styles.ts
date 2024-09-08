interface HeaderContainerStyleParams {
  isAbsolute: boolean
  backgroundColor: string
}

const styles = {
  headerContainer: (headerContainerStyleParams: HeaderContainerStyleParams) => ({
    backgroundColor: headerContainerStyleParams.backgroundColor,
    maxWidth: '1500px !important',
    position: headerContainerStyleParams.isAbsolute ? 'absolute' : 'relative',
    zIndex: 2,
    width: '100%',
  }),
  container: (backgroundColor: string) => ({
    maxWidth: '1500px !important',
    backgroundColor,
    height: '100vh',
  }),
  userContainer: {
    backgroundColor: 'basic.white',
    height: '100vh',
    width: '100%',
  },
  guestContainer: {
    backgroundColor: 'backgroundColor',
    height: '100vh',
    position: 'absolute',
    top: 100,
    width: '100%',
  },
  secondSection: {
    backgroundColor: 'backgroundColor',
  },
}

export default styles
