import { useEffect, useState } from 'react';
import axios from 'axios';
import { PageDetails } from '../../types/Page';
import { Navigation } from '../../components/Navigation';
import { PageContainer } from '../../containers/PageContainer';
import { displaySection } from '../../utils/displaySection';

interface Props {
  pageId: string;
}

export const PageView = ({ pageId }: Props) => {
  const [pageContent, setPageContent] = useState<PageDetails | null>(null);

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
    <PageContainer>
      <Navigation />

      {pageContent?.sections?.map(({ type, text, img, author }, index) =>
        displaySection(type, index, text, img, author)
      )}
    </PageContainer>
  );
};
