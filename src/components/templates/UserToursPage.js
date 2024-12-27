"use client";

import { useGetUserTours } from "@/services/queries";
import styles from "./UserTourPage.module.css";
import UserTourCard from "@/ui/organism/UserTourCard";

function UserToursPage() {
  const { data, isPending } = useGetUserTours();
  if (isPending) return;
  return (
    <div className={styles.container}>
      {data?.data.map((tour) => (
        <UserTourCard key={tour.id} tourData={tour} />
      ))}
    </div>
  );
}

export default UserToursPage;
