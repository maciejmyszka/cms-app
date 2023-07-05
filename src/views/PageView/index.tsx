import { memo, useEffect, useState } from 'react';
import { PageDetails } from 'types/Page';
import { Navigation } from 'components/Navigation';
import { PageContainer } from 'containers/PageContainer';
import { displaySection } from 'utils/displaySection';
import { getPageDetails } from 'services/PageDetailsService';

interface Props {
  pageId: string;
}

export const PageView = memo(({ pageId }: Props) => {
  const [pageContent, setPageContent] = useState<PageDetails | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getPageDetails(pageId);

      if (data) {
        setPageContent(data);
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
});
