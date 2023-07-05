import { memo } from 'react';
import { Flex } from '@chakra-ui/react';

import { ChildrenProps } from 'types/ChildrenProps';

export const NewsletterContainer = memo(({ children }: ChildrenProps) => (
  <Flex
    px={['3rem', '12%', '18%', '22%', '26.8%']}
    py={['3rem', '4rem', '5rem', '0', '0']}
    flexDirection='column'
    justifyContent={['center', 'center', 'center', 'flex-start', 'flex-start']}
    gap={['2rem', '2.5rem', '3rem', '3.6rem']}
    height={['auto', 'auto', 'auto', '70.5vh', '70.5vh']}
  >
    {children}
  </Flex>
));
