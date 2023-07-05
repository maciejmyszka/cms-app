import { SectionsEnum } from 'enums/SectionsEnum';
import { HeroComponent } from 'components/HeroComponent';
import { NewsletterComponent } from 'components/NewsletterComponent';
import { TestimonyComponent } from 'components/TestimonyComponent';

export const displaySection = (
  type: SectionsEnum,
  key: number,
  text?: string,
  img?: string,
  author?: string
) => {
  switch (type) {
    case SectionsEnum.HERO:
      return <HeroComponent key={key} text={text} img={img} />;
    case SectionsEnum.TESTIMONIAL:
      return <TestimonyComponent key={key} text={text} author={author} />;
    case SectionsEnum.NEWSLETTER:
      return <NewsletterComponent key={key} />;
    default:
      return null;
  }
};
