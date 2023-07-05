import { Flex } from '@chakra-ui/react';
import { memo } from 'react';

import { ChildrenProps } from 'types/ChildrenProps';

export const NavigationContainer = memo(({ children }: ChildrenProps) => (
  <Flex
    width='100%'
    alignItems='center'
    px={['1rem', '2rem', '3rem', '4rem', '5.4rem']}
    py={['1rem', '2rem', '0', '0', '0']}
    borderBottom='1px solid'
    borderColor='isabelline'
    justifyContent={[
      'center',
      'center',
      'space-between',
      'space-between',
      'space-between',
    ]}
    height={['auto', 'auto', '13.7vh', '13.7vh', '13.7vh']}
    flexDirection={['column', 'row', 'row', 'row', 'row']}
    gap={['1rem', '1rem', '0', '0', '0']}
    flexWrap='wrap'
  >
    {children}
  </Flex>
));
