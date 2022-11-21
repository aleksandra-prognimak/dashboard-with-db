import { BasicData } from '../types/basicData';
import { client } from '../utils/fetchClient';

export const getData = () => {
  return client.get<BasicData>('/');
};
