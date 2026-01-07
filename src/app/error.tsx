'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <main>
        <h2>Algo salió mal</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Intentar nuevamente</button>
      </main>
    </div>
  );
}
