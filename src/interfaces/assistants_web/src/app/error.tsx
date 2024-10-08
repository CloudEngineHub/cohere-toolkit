'use client';

import { useEffect } from 'react';

import { Button, Text } from '@/components/UI';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-y-8 text-volcanic-100 dark:bg-volcanic-100 dark:text-marble-950 dark:selection:bg-volcanic-300">
      <div className="flex items-center justify-center">
        <Text as="h1" styleAs="h3" className="mr-5 border-r pr-5 font-medium">
          500
        </Text>
        <Text>Whoops! Something went wrong.</Text>
      </div>
      <Button href="/" icon="arrow-left">
        Go back
      </Button>
    </div>
  );
}
