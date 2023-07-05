import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { QuotationIcon } from '../../assets/QuotationIcon';

interface Props {
  text?: string;
  author?: string;
}

export const TestimonyComponent = ({ text, author }: Props) => {
  return (
    <Flex
      bg='#231E1E'
      px='15rem'
      flexDirection='column'
      gap='6rem'
      height='90vh'
      justifyContent='center'
    >
      <QuotationIcon />
      <Text color='#F1F0F0' fontSize='34px' width='90%'>
        {text}
      </Text>
      <Text color='#989898' fontSize='34px'>
        {author}
      </Text>
    </Flex>
  );
};
