import Navbar from '@/components/Navbar';
import connectMongoDB from '@/libs/connectdb';
import Welcome from '../components/Welcome';

export default function Home() {
  connectMongoDB();
  return (
    <div>
      <Welcome/>
    </div>
  )
}


