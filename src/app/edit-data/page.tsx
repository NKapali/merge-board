import EditJsonForm from '@/components/edit-json';
import * as jsonData from '@/data/assignment.json';
import Link from 'next/link';
import { Fragment } from 'react';

export default async function EditPage() {
  const allItems = await jsonData;
  const parsedData = JSON.parse(JSON.stringify(allItems));

  return (
    <div className="ml-4">
      <Link
        href="/"
        className="text-black hover:bg-[#003bc3] hover:text-white p-2"
      >
        Back to board
      </Link>
      <h1 className="text-4xl">Edit data</h1>
      <EditJsonForm data={parsedData} />
    </div>
  );
}
