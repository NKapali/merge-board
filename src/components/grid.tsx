'use client';

import 'gridstack/dist/gridstack.min.css';
import 'gridstack/dist/gridstack-extra.css';
import { GridStack } from 'gridstack';
import { Fragment, useEffect, useState } from 'react';
import GridItems from './grid-items';
import { items } from '@/data/assigment.json';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

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

  const allItems = items;
  // Get only Broom Cabinents
  const broomCabinentAll = allItems.filter((bc, index) =>
    bc?.chainId.includes('BroomCabinet')
  );

  // Get only unique items
  const broomCabinent = Array.from(
    new Set(broomCabinentAll.map((a) => a?.itemId))
  ).map((id) => {
    return broomCabinentAll.find((a) => a?.itemId === id);
  });

  // console.log('All brooms:', broomCabinent);

  const [selected, setSelected] = useState(broomCabinent[0]);
  const [selectedData, setSelectedData] = useState('');
  console.log(selectedData);

  // console.log(selected);
  function handleClick() {
    setSelectedData(selected!.itemType);
    alert(selected?.itemType);
  }
  return (
    <Fragment>
      <div className="grid-stack bg-slate-500 tdx" gs-row="2">
        {/* Optional content prop, used to display cabinets or a button
        <GridItems content="Broom" />
        {/* https://hackernoon.com/how-to-pass-components-via-props-in-react */}
        {/* <GridItems />
        <GridItems />
        <GridItems />
        <GridItems />
        <GridItems />
        <GridItems />
        <GridItems /> */}
        <div
          className="grid-stack-item border-8 border-indigo-600 bg-blue-800"
          gs-w="1"
          gs-h="1"
        >
          {/* Conditionally render list or the cabinet */}
          {selectedData === '' ? (
            <div className="grid-stack-item-content flex justify-center">
              <div className="mx-auto w-52 pt-20">
                <button className="mb-3 text-white" onClick={handleClick}>
                  Add here
                </button>
                <Listbox value={selected} onChange={setSelected}>
                  <ListboxButton
                    className={clsx(
                      'relative w-full rounded-lg bg-white/5 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white',
                      'flex focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                    )}
                  >
                    {selected?.itemType}
                    <ChevronDownIcon
                      className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                      aria-hidden="true"
                    />
                  </ListboxButton>
                  <Transition
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <ListboxOptions
                      anchor="bottom"
                      className="w-[var(--button-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none"
                    >
                      {broomCabinent.map((item) => (
                        <ListboxOption
                          key={item?.itemId}
                          value={item}
                          className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                        >
                          <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                          <div className="text-sm/6 text-white">
                            {item?.itemType}
                          </div>
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </Transition>
                </Listbox>
              </div>
            </div>
          ) : (
            <GridItems content={selectedData} />
          )}
        </div>
      </div>
    </Fragment>
  );
}
