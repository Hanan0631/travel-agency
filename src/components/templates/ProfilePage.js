"use client";

import { useGetUserProfile } from "@/services/queries";
import AccountInfo from "@/ui/organism/AccountInfo";
import PersonalInfo from "@/ui/organism/PersonalInfo";
import BankAccountInfo from "@/ui/organism/BankAccountInfo";

function ProfilePage() {
  const { data } = useGetUserProfile();
  console.log(data);

  return (
    <div>
      <AccountInfo data={data} />
      <PersonalInfo data={data} />
      <BankAccountInfo data={data}/>
    </div>
  );
}

export default ProfilePage;
