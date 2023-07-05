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

    <Text color='isabelline' fontSize='34px' width='90%'>
      {text}
    </Text>

    <Text color='spanish_gray' fontSize='34px'>
      {author}
    </Text>
  </TestimonyContainer>
));
