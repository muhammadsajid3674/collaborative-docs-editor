'use client'
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { createDocument } from "@/lib/actions/room.actions";
import { useRouter } from "next/navigation";

const AddDocumentBtn = ({ email, userId }: AddDocumentBtnProps) => {
  const router = useRouter();
  const addDocumentHandler = async () => {
    try {
      const room = await createDocument({ email, userId });
      if (room) router.push(`/document/${room.id}`);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <Button className="gradient-blue flex gap-1 shadow-md" type="submit" onClick={addDocumentHandler}>
      <Image src={"/assets/icons/add.svg"} alt="add" width={24} height={24} />
      <p className="hidden sm:block">Start a blank document</p>
    </Button>
  );
};

export default AddDocumentBtn;
