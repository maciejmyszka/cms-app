import { Flex, Text } from '@chakra-ui/react';

interface Props {
  img?: string;
  text?: string;
}

export const HeroComponent = ({ text, img }: Props) => {
  return (
    <Flex height='92vh' padding='10.8rem 15rem' gap='3%'>
      <Flex width='48%' alignItems='center'>
        <Text
          color='#231E1E'
          fontSize='62px'
          fontWeight='600'
          lineHeight='95px'
        >
          {text}
        </Text>
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
    </Flex>
  );
};
