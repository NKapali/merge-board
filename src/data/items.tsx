import { items } from './assigment.json';

export default function Items() {
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

  return broomCabinent.map((items) => (
    <li key={items?.itemType}> {items?.itemType} </li>
  ));
}
