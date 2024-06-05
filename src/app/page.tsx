import Grid from '@/components/grid';
import Link from 'next/link';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <div className="header flex justify-between items-center p-3 m-auto">
        <h1 className="text-4xl">Merge board</h1>
        <div className="nav">
          <Link
            href="/hidden-items"
            className="text-black hover:bg-[#003bc3] hover:text-white p-2"
          >
            Hidden items
          </Link>
          <Link
            href="/bubble-items"
            className="text-black hover:bg-[#003bc3] hover:text-white p-2"
          >
            Bubble items
          </Link>
          <Link
            href="/edit-data"
            className="text-black hover:bg-[#003bc3] hover:text-white p-2"
          >
            Edit Data
          </Link>
        </div>
      </div>
      <Grid />
      <div className="content"></div>
    </Fragment>
  );
}
