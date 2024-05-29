import Image from 'next/image';
import Wardrobe from '@/images/wardrobe.svg';
import { Fragment, use, useState } from 'react';
import Items from '@/data/items';

interface GridItemsProps {
  content?: string;
}

export default function GridItems(props: GridItemsProps) {
  // console.log(props.content);
  const [showItems, setShowItems] = useState(true);

  // Callback function to child component so to get the content added via add button.
  const [dataFromChild, setDataFromChild] = useState('');

  function handleDataFromChild(data: any) {
    setDataFromChild(data);
    console.log('Data Parent:', dataFromChild);
  }

  return (
    <Fragment>
      <div
        className="grid-stack-item border-8 border-indigo-600 bg-blue-800"
        gs-w="1"
        gs-h="1"
      >
        <div className="grid-stack-item-content flex justify-center">
          {dataFromChild ? (
            <Image src={Wardrobe} alt="logo" />
          ) : (
            <div>
              {showItems ? (
                <Items sendDataToParent={handleDataFromChild} />
              ) : (
                // <p> Items will come here</p>
                <button
                  onClick={() => setShowItems(!showItems)}
                  className="text-white"
                >
                  Add Item
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}
