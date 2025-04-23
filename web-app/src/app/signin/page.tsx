'use client';
import SignIn from "../../components/SignIn";
import { useRouter } from 'next/navigation';

const SignInPage = () => {
    const router = useRouter();
    const handleAddUser = (userData : any) => {
        console.log('User signed in: ', userData);
        router.push('/profile');
    };

    return <SignIn onAddUser={handleAddUser}/>;
};

export default SignInPage;