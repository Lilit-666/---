import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import '@/assets/scss/common.scss';

export const metadata: Metadata = {
    title:       'Create Next App',
    description: 'Generated by create next app',
};

export default async function RootLayout(
    { children, params: { locale } }: Readonly<{ children: React.ReactNode; params: { locale: string } }>)
{
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    { children }
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
