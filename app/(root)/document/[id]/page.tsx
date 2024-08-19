import React from "react";
import { Editor } from "@/components/editor/Editor";
import CollaborativeRoom from "@/components/CollaborativeRoom";

const Document = () => {
  return (
    <main className="flex w-full flex-col">
      <CollaborativeRoom />
      {/* <Editor /> */}
    </main>
  );
};

export default Document;
