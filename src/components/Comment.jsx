import { Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        className={styles.avatar}
        src="https://github.com/TecJP.png"
        alt="Foto do João Pedro"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Pedro</strong>
              <time
                title="20 de Setembro às 07:45h"
                dateTime="2022-09-20 07:45:24"
              >
                Cerca de 1h atrás
              </time>
              <button title="Deletar comentário">
                <Trash size={20} />
              </button>
            </div>
          </header>
          <p>Muito bom Devon. parabéns!!</p>
        </div>
        <footer></footer>
      </div>
    </div>
  );
}
