import PropTypes from 'prop-types'
import { wrapper } from '../redux/store'

import '../styles/global.sass'

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

App.getInitialProps = wrapper.getInitialAppProps(store => async ({ctx, Component}) => {

  return {
    pageProps: Component.getInitialProps ? await Component.getInitialProps({...ctx, store}) : {},
  }

})


export default wrapper.withRedux(App)