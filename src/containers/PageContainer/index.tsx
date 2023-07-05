import { Flex } from '@chakra-ui/react';
import { memo } from 'react';

import { ChildrenProps } from 'types/ChildrenProps';

export const PageContainer = memo(({ children }: ChildrenProps) => (
  <Flex flexDirection='column' width='100%' height='100%'>
    {children}
  </Flex>
));
