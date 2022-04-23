import { AppProps } from 'next/app'
import { ThemeProvider, Theme, StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../lib/theme'
import React, { useEffect } from 'react'
import Footer from '@/components/Footer/Footer'
import { Box } from '@mui/material'
import NavBar from '@/components/NavBar/NavBar'

declare module '@mui/styles/defaultTheme' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DefaultTheme extends Theme {}
}

// Determines if we are running on server or in client.
const isServerSideRendered = () => {
    return typeof window === 'undefined'
}

/**
 * Accessibility tool - outputs to devtools console on dev only and client-side only.
 * @see https://github.com/dequelabs/axe-core-npm
 */
if (process.env.NODE_ENV !== 'production' && !isServerSideRendered()) {
    import('react-dom').then((ReactDOM) => {
        import('@axe-core/react').then((axe) => {
            axe.default(React, ReactDOM, 1000, {})
        })
    })
}

const Wrapper: React.FunctionComponent = ({ children }) => {
    return (
        <Box
            paddingTop={20}
            display="flex"
            flexDirection="column"
            width="100%"
            height="100%"
            justifyContent="space-between"
        >
            <NavBar />
            <Box paddingBottom={5}>{children}</Box>
            <Footer />
        </Box>
    )
}

const App = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles)
        }
    }, [])

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <style jsx global>{`
                    html {
                        height: 100%;
                        width: 100%;
                    }
                    body {
                        height: 100%;
                        width: 100%;
                    }
                    #__next {
                        height: 100%;
                        width: 100%;
                    }
                `}</style>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Wrapper>
                    <Component {...pageProps} />
                </Wrapper>
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default App
