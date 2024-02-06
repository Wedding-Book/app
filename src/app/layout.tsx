import type {Metadata} from "next";
import React from 'react';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import {ThemeProvider} from '@mui/material/styles';
import theme from '../theme';
import {CssBaseline} from '@mui/material';
import Providers from '@/components/providers/providers';

export const metadata: Metadata = {
  title: "WeddingBook",
  description: "Your wedding dreams will come true with our help. Let's create your wedding book!",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
    <body style={{backgroundColor: '#F6F7F3'}}>
    <AppRouterCacheProvider options={{enableCssLayer: true}}>
      <ThemeProvider theme={theme}>
          <Providers>
            <CssBaseline/>
            {children}
          </Providers>
      </ThemeProvider>
    </AppRouterCacheProvider>
    </body>
    </html>
  );
}
