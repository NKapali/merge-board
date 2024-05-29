'use client';

import 'gridstack/dist/gridstack.min.css';
import 'gridstack/dist/gridstack-extra.css';
import { GridStack } from 'gridstack';
import { Fragment, useEffect, useState } from 'react';
import GridItems from './grid-items';

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
    // console.log(grid.getGridItems());

    // if (grid.getGridItems().length) {
    //   console.log('Yes');
    // }
  });

  return (
    <div className="grid-stack bg-slate-500 tdx" gs-row="2">
      {/* Optional content prop, used to display cabinets or a button */}
      <GridItems content="Broom" />
      <GridItems />
      <GridItems />
      <GridItems />
      <GridItems />
      <GridItems />
      <GridItems />
      <GridItems />
    </div>
  );
}
