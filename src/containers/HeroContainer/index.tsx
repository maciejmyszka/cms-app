import { Flex } from '@chakra-ui/react';
import { memo } from 'react';

import { ChildrenProps } from 'types/ChildrenProps';

export const HeroContainer = memo(({ children }: ChildrenProps) => (
  <Flex height='92vh' padding='10.8rem 15rem' gap='3%'>
    {children}
  </Flex>
));
