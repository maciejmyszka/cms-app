import { Button, Text } from '@chakra-ui/react';
import { FallbackProps } from 'react-error-boundary';

export const ErrorBoundary = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <>
      <Text>{`App crashed: ${error?.message ?? ''}`}</Text>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </>
  );
};
