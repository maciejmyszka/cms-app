import { Flex } from '@chakra-ui/react';
import { ChildrenProps } from '../../types/ChildrenProps';
import { memo } from 'react';

export const NavigationContainer = memo(({ children }: ChildrenProps) => (
  <Flex
    width='100%'
    alignItems='center'
    px='5.4rem'
    borderBottom='1px solid #F1F0F0'
    justifyContent='space-between'
    height='13.7vh'
  >
    {children}
  </Flex>
));
