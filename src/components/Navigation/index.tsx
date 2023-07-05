import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { LogoIcon } from '../../assets/LogoIcon';
import { useSelector } from 'react-redux';
import { pagesState } from '../../slices/pagesSlice';
import { useNavigate } from 'react-router-dom';
import { NavigationContainer } from '../../containers/NavigationContainer';

export const Navigation = () => {
  const navigate = useNavigate();
  const { pages } = useSelector(pagesState);

  return (
    <NavigationContainer>
      <Flex gap='8.2rem'>
        <Box cursor='pointer' onClick={() => navigate('/')}>
          <LogoIcon />
        </Box>

        <Flex gap='4rem' alignItems='center'>
          {pages.slice(1).map(({ url, id }) => (
            <Text
              key={id}
              textTransform='capitalize'
              color='#231E1E'
              fontSize='22px'
              onClick={() => navigate(url)}
              cursor='pointer'
            >
              {url.slice(1)}
            </Text>
          ))}
        </Flex>
      </Flex>

      <Button
        background='purple'
        borderRadius='2rem'
        padding='2.07rem 4.8rem'
        fontSize='22px'
        fontWeight='normal'
      >
        Contact us
      </Button>
    </NavigationContainer>
  );
};
