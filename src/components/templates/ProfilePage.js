"use client";

//components
import AccountInfo from "@/ui/organism/AccountInfo";
import PersonalInfo from "@/ui/organism/PersonalInfo";
import BankAccountInfo from "@/ui/organism/BankAccountInfo";

//core
import { useGetUserProfile } from "@/services/queries";

function ProfilePage() {
  const { data } = useGetUserProfile();

  return (
    <div>
      <AccountInfo data={data} />
      <PersonalInfo data={data} />
      <BankAccountInfo data={data} />
    </div>
  );
}

export default ProfilePage;
