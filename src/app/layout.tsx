import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const inter = Inter( { subsets: [ 'latin' ] } );

export const metadata: Metadata = {
	title      : 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout( {
	children,
}: Readonly<{
	children: ReactNode;
}> ) {
	return (
		<html lang='en'>
		<head>
			{/*<!-- Google font -->*/}
			<link rel='preconnect' href='https://fonts.googleapis.com'/>
			<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous'/>
			<link href='https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Charis+SIL:ital,wght@0,400;0,700;1,400;1,700&family=Kode+Mono:wght@400..700&family=Pixelify+Sans:wght@400..700&display=swap' rel='stylesheet'/>
			<title>Requiem</title>
		</head>
		<body className={inter.className}>{children}</body>
		</html>
	);
}
