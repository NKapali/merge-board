import Image from 'next/image';
import Wardrobe from '@/images/wardrobe.svg';
import { Fragment, use, useState } from 'react';

interface GridItemsProps {
  content: string;
}

export default function GridItems(props: GridItemsProps) {
  console.log('Coming data', props.content);
  const [showItems, setShowItems] = useState(true);

  // // Callback function to child component so to get the content added via add button.
  // const [dataFromChild, setDataFromChild] = useState('');

  // function handleDataFromChild(data: any) {
  //   setDataFromChild(data);
  //   // console.log('Data Parent:', dataFromChild);
  // }

  return (
    <Fragment>
      <div className="grid-stack-item-content flex justify-center">Test</div>
    </Fragment>
  );
}
