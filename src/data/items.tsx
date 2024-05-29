import { items } from './assigment.json';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { Fragment, useEffect, useState } from 'react';

interface ItemProps {
  sendDataToParent: any;
}

export default function Items(props: ItemProps) {
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

  const [selected, setSelected] = useState(broomCabinent[0]);
  // console.log('Selected', selected);

  const [data, setData] = useState('');

  function handleClick() {
    setData(selected!.itemType);
    props.sendDataToParent(data);
    console.log('Setdata:', setData);
  }

  return (
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
                <div className="text-sm/6 text-white">{item?.itemType}</div>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </Listbox>
    </div>
  );
}
