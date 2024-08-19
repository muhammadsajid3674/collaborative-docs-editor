"use client";
import { ClientSideSuspense, LiveblocksProvider, RoomProvider } from "@liveblocks/react/suspense";
import Loader from "@/components/Loader";
import { ReactNode } from "react";
const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <LiveblocksProvider authEndpoint={"/api/liveblocks-auth"}>
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
};

export default Provider;
