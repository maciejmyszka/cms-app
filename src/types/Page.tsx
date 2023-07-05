import { SectionsEnum } from 'enums/SectionsEnum';

export interface Page {
  url: string;
  id: string;
}

export interface PageSection {
  img?: string;
  text?: string;
  type: SectionsEnum;
  author?: string;
}

export interface PageDetails {
  id: string;
  url: string;
  sections: PageSection[];
}
