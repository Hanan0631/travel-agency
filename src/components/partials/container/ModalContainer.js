import styles from "./ModalContainer.module.css"

function ModalContainer({ children, modalIsOpen }) {
  if (!modalIsOpen) return;
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default ModalContainer;
