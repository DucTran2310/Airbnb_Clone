import ClientOnly from './components/ClientOnly';
import Modal from './components/modals/Modal';
import Navbar from './components/navbar/Navbar';
import './globals.css';

import { Nunito } from 'next/font/google';

export const metadata = {
    title: 'Airbnb',
    description: 'Airbnb Clone',
}

const font = Nunito({
    subsets: ['latin'],
});

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
            <body className={font.className}>
                <ClientOnly>
                    <Modal actionLabel='Submit' title={"AdStar"} isOpen/>
                    <Navbar />
                </ClientOnly>
                <div className="pb-20 pt-28">
                    {children}
                </div>
            </body>
        </html>
    )
}