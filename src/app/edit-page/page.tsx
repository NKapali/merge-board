import EditJsonForm from '@/components/edit-json';
import * as jsonData from '@/data/assignment.json';

export default async function EditPage() {
  const allItems = await jsonData;
  const parsedData = JSON.parse(JSON.stringify(allItems));

  return (
    <div>
      <EditJsonForm data={parsedData} />
    </div>
  );
}
