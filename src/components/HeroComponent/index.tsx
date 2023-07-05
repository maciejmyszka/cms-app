import { Flex, Text } from '@chakra-ui/react';

interface Props {
  img?: string;
  text?: string;
}

export const HeroComponent = ({ text, img }: Props) => {
  return (
    <Flex height='95vh' padding='11rem 15rem' gap='4%'>
      <Flex width='48%' alignItems='center'>
        <Text color='#231E1E' fontSize='58px'>
          {text}
        </Text>
      </Flex>

      <Flex width='48%'>
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
