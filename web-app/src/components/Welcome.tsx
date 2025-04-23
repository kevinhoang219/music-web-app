'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Pic1 from '../assets/recordswHeadphones.jpg';
import Pic2 from '../assets/coffee.jpg';
import Pic3 from '../assets/girlListening.jpg';

const Welcome = () => { 
    const router = useRouter();
    const goToSignup = () => {
      router.push('/signup');
    }; 

    return (
      <div className='px-10 mt-10'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className= 'text-6xl font-bold text-red-700'>Jukebox </h1>
            <p className='text-left text-l mt-3 mb-5'>Have fun with music, create playlists, and view your favorite artists, genres, and songs!</p>
            <div className="max-w-xs text-center bg-white p-4 rounded-xl border border-gray-400">
              <button onClick={goToSignup} className="bg-red-700 text-white hover:bg-red-400 hover:text-white px-3 py-2 rounded">
                Sign Up
              </button>
            </div>
        </div>

        <div className="border-t-4 border-red-700 my-12 w-3/4 mx-auto"></div>
        <h1 className='flex items-center justify-center mt-10 mb-4 text-5xl font-bold text-red-700'>Features</h1>
        
        <div className="min-h-full flex items-center justify-center">
          <div className="border border-gray-400 shadow bg-white bg-opacity-80 p-8 rounded-lg shadow-md max-w-md w-full text-center m-4">
            <Image src={Pic1} alt="records and headphones" className='w-max justify-self-center p-5'/>
            <h1 className="text-xl font-bold text-gray-800 text-center">Search Music</h1>
            <div>
              <p className='text-center'>Discover new songs, artists, and genres</p>
            </div>
          </div>

          <div className="border border-gray-400 shadow bg-white bg-opacity-80 p-8 rounded-lg shadow-md max-w-md w-full text-center m-4">
            <Image src={Pic3} alt="girl listening to music" className='w-max justify-self-center p-5'/>
            <h1 className="text-xl font-bold text-gray-800 text-center">Make Playlists</h1>
            <div>
              <p className='text-center'>Create new playlists based on your unique tastes</p>
            </div>
          </div>
        </div>
      </div>
    )};
export default Welcome;