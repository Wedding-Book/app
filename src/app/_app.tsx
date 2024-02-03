import RootLayout from '@/app/layout';

const MyApp = ({Component, pageProps}: {Component: any, pageProps: any}) => {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}
export default MyApp;