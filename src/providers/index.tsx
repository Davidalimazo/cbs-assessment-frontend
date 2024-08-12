'use client';

import store from '@/datasource/store';
import { ToastContainer } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import ReactQueryProvider from './ReactQueryProvider';
import { Provider as ReduxProvider } from 'react-redux';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <ReactQueryProvider>
      <ReduxProvider store={store}>{children}</ReduxProvider>
      <ToastContainer bodyClassName='toast-body' />
    </ReactQueryProvider>
  );
};

export default Providers;
