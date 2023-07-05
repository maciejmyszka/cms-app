import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { LogoIcon } from 'assets/LogoIcon';
import { pagesState } from 'slices/pagesSlice';
import { NavigationContainer } from 'containers/NavigationContainer';

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
              color='raisin_black'
              fontSize='22px'
              onClick={() => navigate(url)}
              cursor='pointer'
            >
              {url.slice(1)}
            </Text>
          ))}
        </Flex>
      </Flex>

      <Button variant='main'>Contact us</Button>
    </NavigationContainer>
  );
};
