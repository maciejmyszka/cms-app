import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import axios from 'axios';

export const NewsletterComponent = () => {
  const [value, setValue] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const onButtonClick = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/newsletter`,
        { email: value },
        {
          headers: {
            Authorization: `Basic ${btoa(
              `${process.env.REACT_APP_API_USERNAME}:${process.env.REACT_APP_API_PASSWORD}`
            )}`,
          },
        }
      );
      setMessage(response.data.message);

      if (response.statusText === 'OK') {
        setIsSuccess(true);
      }
    } catch (err: any) {
      setMessage(err.response.data.message);
      setIsSuccess(false);
    }
  };

  return (
    <Flex
      px='28%'
      flexDirection='column'
      gap='4rem'
      height='70vh'
      justifyContent='center'
    >
      <Text color='#231E1E' fontSize='54px' textAlign='center'>
        Sign up for Newsletter
      </Text>

      <Flex gap='1rem'>
        <Input
          type='text'
          border='none'
          borderRadius='2rem'
          bg='#F1F0F0'
          placeholder='Type your email'
          p='2rem 2rem'
          fontSize='20px'
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />

        <Button
          bg='purple'
          borderRadius='2rem'
          padding='2rem 6rem'
          fontSize='20px'
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
      >
        {message}
      </Text>
    </Flex>
  );
};
