'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <div>
      <div className='h-screen items-center flex flex-col gap-y-4 justify-center'>
        <h1 className='text-6xl font-bold'>404</h1>
        <h2 className='text-base font-bold'>Page not found!</h2>
        <p className='text-sm text-[#344563]'>
          Sorry...we can&apos;t find what you are looking for.
        </p>{' '}
        <div className='mt-6'>
          <Button title='Back to Previous Page' onClick={goBack} />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
