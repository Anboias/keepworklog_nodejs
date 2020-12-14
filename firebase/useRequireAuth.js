import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from './useAuth';

export const useRequireAuth = () => {
  const auth = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (auth.user === null) {
      // router.push('/login');
    } else {
      // console.log('useRequireAuth: logged in. User: ', auth.user);
      // router.push('/'); // DON'T! Infinite loop
    }
  }, [auth, router]);
  return auth;
};
