"use client";

import { SessionProvider } from "next-auth/react";

const NextJsProvider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default NextJsProvider;
