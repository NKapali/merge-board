'use client';

import { Editor } from '@monaco-editor/react';
import { useState } from 'react';
import * as data from '@/data/assignment.json';
import { JsonEditor } from 'json-edit-react';
import { editData } from '@/actions/index';

interface EditJsonFormProps {
  itemData: {
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

export default function EditJsonForm({ itemData }: EditJsonFormProps) {
  return (
    <JsonEditor
      data={itemData}
      onUpdate={({ newData }) => {
        editData(newData);
      }}
    />
  );
}
