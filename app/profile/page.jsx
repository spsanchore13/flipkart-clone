"use client";
import { useSession } from "next-auth/react";

import { Stack } from "@chakra-ui/react";
import PersonalInfo from "@components/Profile/PersonalInfo";
import ProfileTabs from "@components/Profile/ProfileTabs";

const Profile = () => {
  const { data: session } = useSession();

  return (
    <Stack display="flex" flexDirection="row" p={5}>
      <ProfileTabs />
      <PersonalInfo user={session?.user} />
    </Stack>
  );
};

export default Profile;
