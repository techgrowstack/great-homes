import '@mantine/core/styles.css';
import '@/styles/globals.css';

import { Inter } from 'next/font/google';

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import type { ChildrenProps } from '@/types';
import { theme } from '@/config/maintineTheme';
import { ReduxProvider } from '@/providers/ReduxProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
});

export default async function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${inter.className}`}>
        <ReduxProvider>
          <MantineProvider theme={theme}>
            {children}
          </MantineProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
