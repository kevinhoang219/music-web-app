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
            <h1 className= 'text-6xl font-bold text-orange-500'>TuneTribe </h1>
            <p className='text-left text-l mt-3 mb-5'>Have fun connecting over music with your friends and view your favorite artists, genres, and songs!</p>
            <div className="max-w-xs text-center bg-white p-4 rounded-xl border border-gray-400">
              <p className="font-semibold text-black">
                Sign up today to connect with these users and create playlists
              </p>
              <button onClick={goToSignup} className="bg-orange-500 text-white hover:bg-orange-300 hover:text-white px-3 py-2 rounded mt-2">
                Sign Up
              </button>
            </div>
        </div>

        <div className="border-t-4 border-orange-500 my-12 w-3/4 mx-auto"></div>
        <h1 className='flex items-center justify-center mt-10 mb-4 text-5xl font-bold text-orange-500'>Features</h1>
        
        <div className="min-h-full flex items-center justify-center">
          <div className="border border-gray-400 shadow bg-white bg-opacity-80 p-8 rounded-lg shadow-md max-w-md w-full text-center m-4">
            <Image src={Pic1} alt="records and headphones" className='w-max justify-self-center p-5'/>
            <h1 className="text-xl font-bold text-gray-800 text-left">Leaderboard</h1>
            <div className="mt-12">
              <p className='text-left'>See how your listening habits compare to your fellow users</p>
            </div>
          </div>

          <div className="border border-gray-400 shadow bg-white bg-opacity-80 p-8 rounded-lg shadow-md max-w-md w-full text-center m-4">
            <Image src={Pic2} alt="coffee cup" className='w-max justify-self-center p-5'/>
            <h1 className="text-xl font-bold text-gray-800 text-left">Connect with Friends</h1>
            <div className="mt-12">
              <p className='text-left'>Show off your amazing music taste and compare with friends</p>
            </div>
          </div>

          <div className="border border-gray-400 shadow bg-white bg-opacity-80 p-8 rounded-lg shadow-md max-w-md w-full text-center m-4">
            <Image src={Pic3} alt="girl listening to music" className='w-max justify-self-center p-5'/>
            <h1 className="text-xl font-bold text-gray-800 text-left">Make playlists</h1>
            <div className="mt-12">
              <p className='text-left'>Create new playlists based on your unique tastes and share them with others</p>
            </div>
          </div>
        </div>
      </div>
    )};
export default Welcome;