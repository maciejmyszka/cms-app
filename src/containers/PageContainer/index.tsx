import { Flex } from '@chakra-ui/react';
import { ChildrenProps } from '../../types/ChildrenProps';
import { memo } from 'react';

export const PageContainer = memo(({ children }: ChildrenProps) => (
  <Flex flexDirection='column' width='100%' height='100%'>
    {children}
  </Flex>
));
