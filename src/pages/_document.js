import { fillStyle } from '@/styles/styles'
import { Html, Head, Main, NextScript } from 'next/document'
import Home from '.'

export default function Document() {
  return (
    <Html lang="en" style={fillStyle}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
