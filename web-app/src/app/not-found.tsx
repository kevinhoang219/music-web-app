import Link from 'next/link';
import Content from '../components/Content';
 
export default async function NotFound() {

  return (
      <Content>
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md max-w-md w-full text-center">
              
                <h2 className="text-5xl font-bold text-red-700 p-5" >Not Found</h2>
                <p>Could not find requested page</p>
                 <Link href="/" className='underline hover:text-red-700'>Home page</Link> 
                </div>
            </div>
        </Content>

  )
}