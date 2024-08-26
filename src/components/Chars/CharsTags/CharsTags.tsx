import React from 'react';
import styles from './CharsTags.module.css';
export default function CharsTags({ tags }: { tags: string[] }) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.charsTags}>
          <div className={styles.charsTagsTitle}>Теги</div>
          <div className={styles.charsTagsList}>
            {tags.map((tag, index) => (
              <div key={index} className={styles.charsTagsListItem}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
