import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { postNewsletter } from '../../services/NewsletterService';

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
    <Flex px='27.8%' flexDirection='column' gap='3.6rem' height='70vh'>
      <Text
        color='#231E1E'
        fontSize='59px'
        textAlign='center'
        mt='10.4rem'
        fontWeight='500'
      >
        Sign up for Newsletter
      </Text>

      <Flex gap='1.5rem' mt='1.5rem'>
        <Input
          type='text'
          border='none'
          borderRadius='2.5rem'
          bg='#F1F0F0'
          placeholder='Type your email'
          p='2.1rem 2.7rem'
          fontSize='22px'
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />

        <Button
          bg='purple'
          borderRadius='2.5rem'
          padding='2rem 6.7rem'
          fontSize='22px'
          fontWeight='normal'
          onClick={onButtonClick}
          isDisabled={!value}
        >
          Submit
        </Button>
      </Flex>

      <Text
        textAlign='center'
        fontSize='20px'
        color={isSuccess ? 'green' : 'red'}
        mt='0.4rem'
      >
        {message}
      </Text>
    </Flex>
  );
};
