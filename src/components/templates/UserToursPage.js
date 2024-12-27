"use client";

//components
import UserTourCard from "@/ui/organism/UserTourCard";

//core
import { useGetUserTours } from "@/services/queries";

//styles
import styles from "./UserTourPage.module.css";

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
