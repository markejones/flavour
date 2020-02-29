import { IAPIResponse } from '../types';
import { I18n } from '../../i18n/types';

export interface IAPICreatureFamily {
  key: {
    href: string;
  };
  name: I18n;
  id: number;
}

export interface IAPICreatureFamiliesIndexResponse extends IAPIResponse {
  creature_families: IAPICreatureFamily[];
}
