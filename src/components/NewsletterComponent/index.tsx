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
      <Text variant='newsletter' mt='10.8rem'>
        Sign up for Newsletter
      </Text>

      <Flex gap='1.5rem' mt='1.7rem'>
        <Input
          type='text'
          border='none'
          borderRadius='2.5rem'
          bg='isabelline'
          placeholder='Type your email'
          p='2.1rem 2.7rem'
          fontSize='22px'
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />

        <Button
          padding='2.1rem 6.7rem'
          variant='main'
          onClick={onButtonClick}
          isDisabled={!value}
        >
          Submit
        </Button>
      </Flex>

      <Text variant='message' color={isSuccess ? 'apple' : 'red'} mt='0.7rem'>
        {message}
      </Text>
    </NewsletterContainer>
  );
};
