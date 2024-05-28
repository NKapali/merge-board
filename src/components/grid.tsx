'use client';

import 'gridstack/dist/gridstack.min.css';
import 'gridstack/dist/gridstack-extra.css';
import { GridStack } from 'gridstack';
import { useEffect, useState } from 'react';
import Items from '@/data/items';

export default function Grid() {
  /*
   ** Initialize Gridstack inside useEffect so that DOM is rendered when its initialized
   * Grid stack Doc: https://github.com/gridstack/gridstack.js/tree/master/doc
   * Grid stack example: https://github.com/Inder2108/react-gridstack-example/blob/master/src/App.js
   * Change grid columns: https://github.com/gridstack/gridstack.js#change-grid-columns
   */
  useEffect(() => {
    const grid = GridStack.init({ column: 4 });
    grid.enableResize(false);
  });

  const [showItems, setShowItems] = useState(false);

  function handleClick(e: { preventDefault: () => void }) {
    setShowItems(true);
  }

  return (
    <div className="grid-stack bg-blue-200" gs-row="2">
      <div
        className="grid-stack-item border-dark bg-lime-300"
        gs-w="1"
        gs-h="1"
      >
        <div className="grid-stack-item-content">
          {showItems ? (
            <Items />
          ) : (
            <button onClick={handleClick}>Add Item</button>
          )}
          {/* <button>Remove Item</button>
          <button>Update Item</button> */}
        </div>
      </div>
    </div>
  );
}
