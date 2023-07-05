import { extendTheme } from '@chakra-ui/react';

export const components = {
  Button: {
    variants: {
      main: {
        background: 'soap',
        borderRadius: '2rem',
        padding: '2.07rem 4.8rem',
        fontSize: '22px',
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
        fontSize: '62px',
        fontWeight: '600',
        lineHeight: '95px',
      },
      newsletter: {
        color: 'raisin_black',
        fontSize: '55px',
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
