import { useGetTransactions } from "@/services/queries";
import { e2p, sp } from "@/utils/replaceNumber";
import styles from "./TransactionsPage.module.css";

function TransactionsPage() {
  const { data, isPending } = useGetTransactions();
  console.log(data);

  if (isPending) return;

  return (
    <div className={styles.table}>
      <div className={styles.header}>
        <p>تاریخ و ساعت</p>
        <p className={styles.desktopOnly}>مبلغ(تومان)</p>
        <p>نوع تراکنش</p>
        <p>شماره سفارش</p>
      </div>
      {data?.data.map((item) => (
        <div className={styles.row} key={item.id}>
          <p>
            {new Date(item.createdAt)
              .toLocaleTimeString("fa-IR")
              .split(":")[0] +
              ":" +
              new Date(item.createdAt)
                .toLocaleTimeString("fa-IR")
                .split(":")[1]}{" "}
            -{new Date(item.createdAt).toLocaleDateString("fa-IR")}
          </p>
          <p>{sp(item.amount)}</p>
          <p className={styles.desktopOnly}>ثبت نام در تور گردشگری</p>
          <p>{e2p(12054902)}</p>
        </div>
      ))}
    </div>
  );
}

export default TransactionsPage;
