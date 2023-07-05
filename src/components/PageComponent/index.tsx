import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { HeroComponent } from '../HeroComponent';
import { TestimonyComponent } from '../TestimonyComponent';
import { NewsletterComponent } from '../NewsletterComponent';
import { LogoIcon } from '../../assets/LogoIcon';
import { PageDetails } from '../../types/Page';
import { SectionsEnum } from '../../enums/SectionsEnum';
import { useSelector } from 'react-redux';
import { pagesState } from '../../slices/pagesSlice';

interface Props {
  pageId: string;
}

export const PageComponent = ({ pageId }: Props) => {
  const [pageContent, setPageContent] = useState<PageDetails | null>(null);
  const { pages } = useSelector(pagesState);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get<PageDetails>(
          `${process.env.REACT_APP_API_URL}/page/${pageId}`,
          {
            headers: {
              Authorization: `Basic ${btoa(
                `${process.env.REACT_APP_API_USERNAME}:${process.env.REACT_APP_API_PASSWORD}`
              )}`,
            },
          }
        );
        setPageContent(response.data);
      } catch (err) {
        console.error(`Error: ${err}`);
      }
    })();
  }, [pageId]);

  return (
    <Flex flexDirection='column' width='100%' height='100%'>
      <Flex
        width='100%'
        alignItems='center'
        px='6rem'
        borderBottom='1px solid #F1F0F0'
        justifyContent='space-between'
        height='14vh'
      >
        <Flex gap='7rem'>
          <Box cursor='pointer' onClick={() => navigate('/')}>
            <LogoIcon />
          </Box>

          <Flex gap='2rem' alignItems='center'>
            {pages.slice(1).map(({ url, id }) => (
              <Text
                key={id}
                textTransform='capitalize'
                color='#231E1E'
                fontSize='24px'
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
          padding='2rem 5rem'
          fontSize='24px'
        >
          Contact us
        </Button>
      </Flex>

      {pageContent?.sections?.map(({ type, text, img, author }, index) => {
        if (type === SectionsEnum.HERO)
          return <HeroComponent key={index} text={text} img={img} />;

        if (type === SectionsEnum.TESTIMONIAL)
          return <TestimonyComponent key={index} text={text} author={author} />;

        if (type === SectionsEnum.NEWSLETTER)
          return <NewsletterComponent key={index} />;
      })}
    </Flex>
  );
};
