import { JsonEditor } from 'json-edit-react';
import BoardData from '@/data/assignment.json';
import EditJsonForm from '@/components/edit-json';
import { jsonData, editData } from '@/actions/index';
import { Editor } from '@monaco-editor/react';
import { edit } from 'ace-builds';
import * as data from '@/data/assignment.json';

interface editPageProps {
  params: {
    id: string;
  };
}

export default async function EditPage(props: editPageProps) {
  const pageId = parseInt(props.params.id);

  // fetch data!
  const allItems = await data;
  // console.log(allItems);
  const rightData = allItems.items.filter((item) => item?.itemId === pageId);

  const finalData = rightData[0];

  return (
    <div>
      <EditJsonForm itemData={finalData} />
    </div>
  );
}
