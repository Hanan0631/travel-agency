//core
import { e2p } from "@/utils/replaceNumber";

//styles
import styles from "./UserProfile.module.css";

function UserProfile({ mobile }) {
  return (
    <div className={styles.userProfile}>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 2C9.88 2 7.75 4.13 7.75 6.75C7.75 9.32 9.76 11.4 12.38 11.49C12.46 11.48 12.54 11.48 12.6 11.49C12.62 11.49 12.63 11.49 12.65 11.49C12.66 11.49 12.66 11.49 12.67 11.49C15.23 11.4 17.24 9.32 17.25 6.75C17.25 4.13 15.12 2 12.5 2Z"
          fill="#28A745"
        />
        <path
          d="M17.58 14.15C14.79 12.29 10.24 12.29 7.42996 14.15C6.15996 15 5.45996 16.15 5.45996 17.38C5.45996 18.61 6.15996 19.75 7.41996 20.59C8.81996 21.53 10.66 22 12.5 22C14.34 22 16.18 21.53 17.58 20.59C18.84 19.74 19.54 18.6 19.54 17.36C19.53 16.13 18.84 14.99 17.58 14.15Z"
          fill="#28A745"
        />
      </svg>
      <span>{e2p(mobile)}</span>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.4201 8.95001L13.9001 15.47C13.1301 16.24 11.8701 16.24 11.1001 15.47L4.58008 8.95001"
          stroke="#28A745"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default UserProfile;
