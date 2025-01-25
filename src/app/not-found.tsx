'use client';

import { useEffect } from 'react';


interface NotFoundStateProps {
  error: Error;
}

const NotFound: React.FC<NotFoundStateProps> = ({ error }) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1>Uh No!! There was a problem</h1>
      <p>{error.message || 'Something went wrong.'}</p>
    </div>
  );
};

export default NotFound;
