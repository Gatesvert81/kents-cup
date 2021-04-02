import Layout from '../Component/MainComponents/Layout'
import '../styles/globals.css'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { AnimateSharedLayout } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </Layout>
  )
}

export default MyApp
