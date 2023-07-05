import { Flex, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { HeroContainer } from 'containers/HeroContainer';

interface Props {
  img?: string;
  text?: string;
}

export const HeroComponent = memo(({ text, img }: Props) => (
  <HeroContainer>
    <Flex width='48%' alignItems='center'>
      <Text variant='hero'>{text}</Text>
    </Flex>

    <Flex width='49%'>
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
