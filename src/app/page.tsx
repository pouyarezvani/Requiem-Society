'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';

export default function Home() {
	const [ play, { stop, pause } ] = useSound( '/sounds/milkshake.mp3' );
	const [ isPlaying, setIsPlaying ] = useState( true );

	useEffect( () => {
		if ( isPlaying ) {
			play();
		} else {
			pause();
		}
	}, [ isPlaying, play ] );
	
	
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<div
				className={'p-2 rounded-3xl cursor-pointer fixed bottom-[15px] left-[15px] hover:animate-pulse bg-gray-700'}
				onClick={() => setIsPlaying( !isPlaying )}>
				<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
					<path strokeLinecap='round' strokeLinejoin='round' d='M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z'/>
				</svg>
			</div>
			<div className={'text-center flex flex-col justify-center w-full items-center'}>
				<h1 className={'text-[190px] font-bold tracking-[0.00em] leading-[3rem] font-bebas'}>
					Requiem Society
				</h1>
				<p className={'mt-[50px] text-[30px] text-zinc-400'}>
					Exclusive. Club.
				</p>
				<Image
					src={'/gifs/rs.gif'}
					height={600}
					width={700}
					alt={`A cute animal!`}
					unoptimized={true}
					className={'rounded-2xl mt-10'}
				/>
				<p className={'mt-[80px] text-[27px]'}>
					IT'S NOT GOOD, IT'S GREAT.
				</p>
				<p className={'mt-1 text-[22px] text-gray-400'}>
					Find a place to lose you.
				</p>
				
				<h1 className={'mt-4 text-[50px] bold'}>
					Volume 001 - Requiem for a Prelude
				</h1>
				<p className={'mt-[60px] text-[22px] w-[1000px] '}>
					Music, culture and art, inseparable. Purity and euphoria for night 001.
				</p>
				<p className={'mt-2 text-[22px] w-[1000px]'}>
					We're coming together to form something that can't be done alone.
				</p>
				<p className={'mt-[80px] text-[27px] text-green-400 font-pixel'}>
					Location: San Francisco
				</p>
				<p className={'text-[27px] text-green-400 font-pixel'}>
					Date: May 18th, 2024
				</p>
				<p className={'text-[27px] text-green-400 font-pixel'}>
					Line-up: TBA
				</p>
				<button className={'mt-[80px] bg-white hover:bg-purple-700 text-black font-bold py-2 px-4 rounded'}>
					Request for an invitation
				</button>
				<p className={'mt-[400px] text-[22px] w-[1000px]'}>
					Our vision is to create a vibrant community where individuals from diverse backgrounds come together to
					celebrate their unique talents and perspectives. Through our social events, we aim to foster a sense of
					belonging, inspire creativity, and cultivate meaningful connections that transcend barriers and unite
					uniqueness.
				</p>
			
			
			</div>
		</main>
	);
}
