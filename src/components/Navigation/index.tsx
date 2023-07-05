import { Button, Flex, Text } from '@chakra-ui/react';
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
      <Flex
        gap={['1rem', '2rem', '2rem', '5.2rem', '8.2rem']}
        flexWrap={['wrap', 'nowrap', 'nowrap', 'nowrap', 'nowrap']}
        justifyContent={['center', 'auto', 'auto', 'auto', 'auto']}
      >
        <Flex
          cursor='pointer'
          onClick={() => navigate('/')}
          width={['100%', '100%', '100%', 'auto', 'auto']}
          justifyContent='center'
        >
          <LogoIcon />
        </Flex>

        <Flex gap={['1rem', '2rem', '3rem', '4rem']} alignItems='center'>
          {pages.slice(1).map(({ url, id }) => (
            <Text
              key={id}
              textTransform='capitalize'
              color='raisin_black'
              fontSize={['14px', '16px', '18px', '20px', '22px']}
              onClick={() => navigate(url)}
              cursor='pointer'
            >
              {url.slice(1)}
            </Text>
          ))}
        </Flex>
      </Flex>

      <Button
        variant='main'
        padding={[
          '1rem 2rem',
          '1.5rem 2.5rem',
          '1.5rem 3rem',
          '2rem 4rem',
          '2.07rem 4.8rem',
        ]}
        fontSize={['14px', '16px', '18px', '20px', '22px']}
      >
        Contact us
      </Button>
    </NavigationContainer>
  );
};
