import { atom } from 'recoil';
import { pictureData } from '../dummyData';
import { newsData } from '../dummyData/newsData';

export const PictureAtom = atom({
  key:'picture',
  default:pictureData
});

export const PictureActiveAtom = atom({
  key:'active',
  default: 0 as number
});

export const NewsAtom = atom({
  key:'news',
  default: newsData
})

export const EngAtom = atom({
  key:'eng',
  default: false
})