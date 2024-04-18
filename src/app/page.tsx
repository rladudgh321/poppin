import Intro from './mainpageComponents/Intro';
import MainPicture from './mainpageComponents/MainPicture';

export default function Home() {
  const images = ['https://plus.unsplash.com/premium_photo-1664116928414-2ab998603666?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1691434474131-01f982a2dab1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1712371962512-bfb8588dfebd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ]
  return (
    <main>
      <MainPicture images={images} />
      <Intro />
  
    </main>
  );
}
