import { items } from '@/data/assignment.json';
import Link from 'next/link';

export default function HiddenItems() {
  const hiddenitems = items.filter((item) =>
    item?.visibility.includes('hidden')
  );

  return (
    <div className="ml-4">
      <Link
        href="/"
        className="text-black hover:bg-[#003bc3] hover:text-white p-2"
      >
        Back to board
      </Link>
      <h1 className="text-4xl m-4">Hidden items</h1>
      <ul className="m-4 bg-blue-200">
        {hiddenitems.map((item) => (
          <li className="p-2" key={item?.itemId}>
            {item?.itemType}
          </li>
        ))}
      </ul>
    </div>
  );
}
