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
    const grid = GridStack.init({
      column: 7,
    });
    grid.enableResize(false);
  });

  return (
    <Fragment>
      <div className="grid-stack bg-slate-500 tdx">
        {Array(63).fill(<GridItems />)}
      </div>
    </Fragment>
  );
}
