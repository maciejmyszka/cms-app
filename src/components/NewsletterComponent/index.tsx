import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';

import { postNewsletter } from 'services/NewsletterService';
import { NewsletterContainer } from 'containers/NewsletterContainer';

export const NewsletterComponent = () => {
  const [value, setValue] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const onButtonClick = async () => {
    const response = await postNewsletter(value);

    if (response.statusText === 'OK') {
      setIsSuccess(true);
      setMessage(response.data.message);
    } else {
      setIsSuccess(false);
      setMessage(response);
    }
  };

  return (
    <NewsletterContainer>
      <Text variant='newsletter' mt={['0', '0', '0', '10.8rem', '10.8rem']}>
        Sign up for Newsletter
      </Text>

      <Flex
        gap={['0.5rem', '1rem', '1.5rem']}
        mt={['0', '0', '0', '1.7rem', '1.7rem']}
        flexDirection={['column', 'column', 'column', 'row', 'row']}
      >
        <Input
          type='text'
          border='none'
          borderRadius='2.5rem'
          bg='isabelline'
          placeholder='Type your email'
          p={[
            '1.4rem 2.7rem',
            '1.6rem 2.7rem',
            '1.8rem 2.7rem',
            '2rem 2.7rem',
            '2.1rem 2.7rem',
          ]}
          fontSize={['14px', '16px', '18px', '20px', '22px']}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />

        <Button
          padding={[
            '1.4rem 3rem',
            '1.6rem 4rem',
            '1.8rem 5rem',
            '2rem 4rem',
            '2.1rem 6.7rem',
          ]}
          variant='main'
          onClick={onButtonClick}
          isDisabled={!value}
        >
          Submit
        </Button>
      </Flex>

      <Text
        variant='message'
        color={isSuccess ? 'apple' : 'red'}
        mt={['0rem', '0rem', '0rem', '0.7rem', '0.7rem']}
      >
        {message}
      </Text>
    </NewsletterContainer>
  );
};
