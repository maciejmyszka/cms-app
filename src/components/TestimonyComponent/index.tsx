import { Text } from '@chakra-ui/react';
import { memo } from 'react';

import { QuotationIcon } from 'assets/QuotationIcon';
import { TestimonyContainer } from 'containers/TestimonyContainer';

interface Props {
  text?: string;
  author?: string;
}

export const TestimonyComponent = memo(({ text, author }: Props) => (
  <TestimonyContainer>
    <QuotationIcon />

    <Text
      color='isabelline'
      fontSize={['14px', '19px', '24px', '29px', '34px']}
      width='90%'
    >
      {text}
    </Text>

    <Text
      color='spanish_gray'
      fontSize={['14px', '19px', '24px', '29px', '34px']}
    >
      {author}
    </Text>
  </TestimonyContainer>
));
