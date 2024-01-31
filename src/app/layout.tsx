import type {Metadata} from "next";
import React from 'react';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import {CssBaseline} from '@mui/material';

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
    <html lang="en">
      <body>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
      </body>
    </html>
  );
}
