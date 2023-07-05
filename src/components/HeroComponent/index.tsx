import { Flex, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { HeroContainer } from 'containers/HeroContainer';

interface Props {
  img?: string;
  text?: string;
}

export const HeroComponent = memo(({ text, img }: Props) => (
  <HeroContainer>
    <Flex width={['100%', '100%', '100%', '48%', '48%']} alignItems='center'>
      <Text variant='hero'>{text}</Text>
    </Flex>

    <Flex width={['100%', '100%', '100%', '48%', '48%']} height='100%'>
      <Flex
        backgroundImage={`url("${img}")`}
        width='100%'
        height='100%'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
      />
    </Flex>
  </HeroContainer>
));
