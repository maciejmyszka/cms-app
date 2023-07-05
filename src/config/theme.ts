import { extendTheme } from '@chakra-ui/react';

export const components = {
  Button: {
    variants: {
      main: {
        background: 'soap',
        borderRadius: '2rem',
        fontSize: ['14px', '16px', '18px', '20px', '22px'],
        fontWeight: 'normal',
        _hover: {
          background: 'soap',
        },
        _disabled: {
          background: 'soap',
        },
      },
    },
  },
  Text: {
    variants: {
      hero: {
        color: 'raisin_black',
        fontSize: ['22px', '32px', '42px', '52px', '62px'],
        fontWeight: '600',
        lineHeight: ['52px', '62px', '72px', '82px', '92px'],
        textAlign: ['center', 'center', 'center', 'left', 'left'],
      },
      newsletter: {
        color: 'raisin_black',
        fontSize: ['30px', '35px', '45px', '50px', '55px'],
        textAlign: 'center',
        fontWeight: '500',
      },
      message: {
        textAlign: 'center',
        fontSize: '19px',
      },
    },
  },
};

export const colors = {
  white: '#FFFFFF',
  raisin_black: '#231E1E',
  isabelline: '#F1F0F0',
  spanish_gray: '#989898',
  apple: '#5EDC4B',
  soap: '#DAC2F2',
};

export const theme = extendTheme({
  colors,
  components,
});
