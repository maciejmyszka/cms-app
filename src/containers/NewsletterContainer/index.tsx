import { memo } from 'react';
import { Flex } from '@chakra-ui/react';

import { ChildrenProps } from 'types/ChildrenProps';

export const NewsletterContainer = memo(({ children }: ChildrenProps) => (
  <Flex px='27.8%' flexDirection='column' gap='3.6rem' height='70.5vh'>
    {children}
  </Flex>
));
