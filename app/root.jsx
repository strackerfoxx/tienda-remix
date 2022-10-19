const {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} = require("@remix-run/react");


import Header from './components/header'
import Footer from './components/footer'

import styles from './styles/index.css'
import styleG from '~/styles/guitarras.css'
import styleB from '~/styles/blog.css'
import styleC from '~/styles/curso.css'


export const meta = () => ({
  charset: "utf-8",
  title: "Guitar LA remix",
  viewport: "width=device-width,initial-scale=1",
});

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap'
    },
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'stylesheet',
      href: styleG
    },
    {
      rel: 'stylesheet',
      href: styleB
    },
    {
      rel: 'stylesheet',
      href: styleC
    },
    
  ]
}

export default function App() {
  return (
    <Document>
        <Outlet/>
    </Document>
  );
}

function Document({children}){

  return(
    <html lang="es">
        <head>  
            <Meta/>
            <Links/>
        </head>
        <body>
          <Header />
            {children}
          <Footer/>
            <Scripts />
            <LiveReload/>
        </body>
    </html>
  )
}