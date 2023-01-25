import '../styles/globals.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Layout from '../components/Layout/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
