'use client';

import { JsonEditor } from 'json-edit-react';
import { editData } from '@/actions/index';

interface EditJsonFormProps {
  width: number;
  height: number;
  boardId: string;
  items: {
    itemId: number;
    itemType: string;
    chainId: string;
    pausedUntil: string;
    createdAt: string;
    visibility: string;
    itemLevel: number;
    isInsideBubble: boolean;
  };
}

export default function EditJsonForm(data: EditJsonFormProps) {
  return (
    <JsonEditor
      data={data}
      onUpdate={({ newData }) => {
        editData(newData);
      }}
    />
  );
}
