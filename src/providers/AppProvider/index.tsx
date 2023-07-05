import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import { ErrorBoundaryProvider } from 'providers/ErrorBoundaryProvider';
import { store } from 'config/store';
import { LoadingPage } from 'views/LoadingPage';
import { Routing } from 'routes';
import { theme } from 'config/theme';

export const AppProvider = () => (
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <ErrorBoundaryProvider>
        <Suspense fallback={<LoadingPage />}>
          <Routing />
        </Suspense>
      </ErrorBoundaryProvider>
    </ChakraProvider>
  </Provider>
);
