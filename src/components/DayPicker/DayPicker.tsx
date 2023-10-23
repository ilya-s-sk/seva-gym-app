import { DialogHTMLAttributes, FunctionComponent, useRef, useState } from "react";
import styles from './styles.module.css';

interface Props {
  activeDay: string;
  days: string[];
  whenOptionPicked: (date?: string) => void;
}

export const DayPicker: FunctionComponent<Props> = ({
  activeDay,
  days,
  whenOptionPicked,
}) => {
  const dialogRef = useRef(null)

  function openDialog() {
    if (dialogRef.current) {
      (dialogRef.current as HTMLDialogElement).showModal();
    }
  }

  function pickOption(option?: string): void {
    whenOptionPicked(option);
    if (dialogRef.current) {
      (dialogRef.current as HTMLDialogElement).close();
    }
  }

  return (
    <section className={styles.section}>
      <button className={styles.daySelect} onClick={openDialog}>{activeDay}</button>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
      >
        <p className={styles.option} onClick={() => pickOption()}>Сегодня</p>
        {
          days.map((day, index) => (
            <p
              key={index}
              className={styles.option}
              onClick={() => pickOption(day)}
            >{day}</p>
          ))
        }
      </dialog>
    </section>
  )
}
