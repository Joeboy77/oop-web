'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getUserStatus, getUserEmail } from '@/lib/utils/auth';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token) {
      const status = getUserStatus();
      const email = getUserEmail();
      
      if (status === 'approved') {
        router.push('/dashboard');
      } else if (status === 'pending' || status === 'rejected') {
        if (email) {
          sessionStorage.setItem('pendingEmail', email);
        }
        router.push('/onboarding/pending');
      } else {
        router.push('/dashboard');
      }
    } else {
      router.push('/login');
    }
  }, [router]);

  return null;
}
