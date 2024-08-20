"use client";
import { ClientSideSuspense, LiveblocksProvider, RoomProvider } from "@liveblocks/react/suspense";
import Loader from "@/components/Loader";
import { ReactNode } from "react";
import { getClerkUsers } from "@/lib/actions/user.actions";
const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <LiveblocksProvider
      authEndpoint={"/api/liveblocks-auth"}
      resolveUsers={async ({ userIds }) => {
        const users = await getClerkUsers({ userIds });
        return users;
      }}
    >
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
};

export default Provider;
