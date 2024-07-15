import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../globals.css';

import NavBar from '@/components/nav-bar';
import Providers from '@/components/providers/providers';
import SearchBar from '@/components/search-bar';

const inter = Inter({ subsets: ['latin'] });

export { metadata } from '@/constants/data';

export default function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    return (
        <html lang={locale}>
            <body className={inter.className}></body>
            <Providers>
                <div className="flex gap-4 flex-col-reverse sm:flex-row p-4">
                    <NavBar />
                    <div className="basis-[100%]">
                        <SearchBar />
                        {children}
                    </div>
                </div>
            </Providers>
        </html>
    );
}
