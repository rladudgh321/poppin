import { atom } from 'recoil';
import { pictureData } from '../dummyData';

export const PictureAtom = atom({
  key:'picture',
  default:pictureData
});

export const PictureActiveAtom = atom({
  key:'active',
  default:null as number | null
});