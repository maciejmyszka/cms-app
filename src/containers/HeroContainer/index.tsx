import { Flex } from '@chakra-ui/react';
import { memo } from 'react';

import { ChildrenProps } from 'types/ChildrenProps';

export const HeroContainer = memo(({ children }: ChildrenProps) => (
  <Flex
    height='92vh'
    padding={['3rem', '4rem', '4rem', '7rem 10rem', '10.8rem 15rem']}
    flexDirection={['column', 'column', 'column', 'row', 'row']}
    gap={['3rem', '3rem', '3rem', '3%', '3%']}
  >
    {children}
  </Flex>
));
