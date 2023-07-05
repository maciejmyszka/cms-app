import { Flex } from '@chakra-ui/react';
import { memo } from 'react';

import { ChildrenProps } from 'types/ChildrenProps';

export const TestimonyContainer = memo(({ children }: ChildrenProps) => (
  <Flex
    bg='raisin_black'
    px={['3rem', '4rem', '4rem', '10rem', '14.7rem']}
    py={['3rem', '4rem', '4rem', '0', '0']}
    flexDirection='column'
    gap={['2rem', '3rem', '4rem', '5rem', '6rem']}
    height={['auto', 'auto', 'auto', '90vh', '90vh']}
    justifyContent='center'
  >
    {children}
  </Flex>
));
