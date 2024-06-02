import { items } from '@/data/assignment.json';

export default function HiddenItems() {
  const hiddenitems = items.filter((item) =>
    item?.visibility.includes('hidden')
  );

  return (
    <div>
      <h1>Hidden items</h1>
      <ul className="m-4">
        {hiddenitems.map((item) => (
          <li className="p-2" key={item?.itemId}>
            {item?.itemType}
          </li>
        ))}
      </ul>
    </div>
  );
}
