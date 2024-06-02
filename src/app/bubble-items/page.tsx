import { items } from '@/data/assignment.json';

export default function BubbleItems() {
  const bubbleItems = items.filter((item) => item?.isInsideBubble === true);

  return (
    <div>
      <h1>Bubble items</h1>
      <ul className="m-4">
        {bubbleItems.map((item) => (
          <li className="p-2" key={item?.itemId}>
            {item?.itemType}
          </li>
        ))}
      </ul>
    </div>
  );
}
