import { Flex } from '@chakra-ui/react';
import { memo } from 'react';

import { ChildrenProps } from 'types/ChildrenProps';

export const TestimonyContainer = memo(({ children }: ChildrenProps) => (
  <Flex
    bg='raisin_black'
    px='14.7rem'
    flexDirection='column'
    gap='6rem'
    height='90vh'
    justifyContent='center'
  >
    {children}
  </Flex>
));
