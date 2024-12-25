function MyProfile({color}) {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99992 1.83337C6.25325 1.83337 4.83325 3.25337 4.83325 5.00004C4.83325 6.71337 6.17325 8.10004 7.91992 8.16004C7.97325 8.15337 8.02659 8.15337 8.06659 8.16004C8.07992 8.16004 8.08659 8.16004 8.09992 8.16004C8.10659 8.16004 8.10659 8.16004 8.11325 8.16004C9.81992 8.10004 11.1599 6.71337 11.1666 5.00004C11.1666 3.25337 9.74659 1.83337 7.99992 1.83337Z"
        fill={color}
      />
      <path
        d="M11.3866 9.9333C9.52664 8.6933 6.49331 8.6933 4.61997 9.9333C3.77331 10.5 3.30664 11.2666 3.30664 12.0866C3.30664 12.9066 3.77331 13.6666 4.61331 14.2266C5.54664 14.8533 6.77331 15.1666 7.99997 15.1666C9.22664 15.1666 10.4533 14.8533 11.3866 14.2266C12.2266 13.66 12.6933 12.9 12.6933 12.0733C12.6866 11.2533 12.2266 10.4933 11.3866 9.9333Z"
        fill={color}
      />
    </svg>
  );
}

export default MyProfile;
