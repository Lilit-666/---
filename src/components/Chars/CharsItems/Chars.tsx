import React from 'react';
import styles from './Chars.module.css';

interface CharacteristicsProps {
    city: string;
    age: number;
    breastsSize: number;
    weight: number;
    height: number;
    clothesSize: number;
    shoesSize: number;
    intimHair: string;
    hairColor: string;
    look: string;
    nationality: string;
    physique: string;
    region: string;
    metro: string;
    restrictedAge: string;
    socials: string;
    lastActivity: string;
}

export default function Chars
(
    {
        city,
        age,
        breastsSize,
        weight,
        height,
        clothesSize,
        shoesSize,
        intimHair,
        hairColor,
        look,
        nationality,
        physique,
        region,
        metro,
        restrictedAge,
        socials,
        lastActivity,
    } : CharacteristicsProps
) {
  return (
    <div className={styles.wrapper}>
        <div className={styles.charsList}>
            <div className={styles.charsListItem}>
                <div className={styles.charsListItemTitle}>Город</div>
                <div className={styles.charsListItemValue}>{city}</div>
            </div>
            <div className={styles.charsListItem}>
                <div className={styles.charsListItemTitle}>Возраст</div>
                <div className={styles.charsListItemValue}>{age}</div>
            </div>
            <div className={styles.charsListItem}>
                <div className={styles.charsListItemTitle}>Размер груди</div>
                <div className={styles.charsListItemValue}>{breastsSize}</div>
            </div>
            <div className={styles.charsListItem}>
                <div className={styles.charsListItemTitle}>Вес</div>
                <div className={styles.charsListItemValue}>{weight}</div>
            </div>
            <div className={styles.charsListItem}>
                <div className={styles.charsListItemTitle}>Рост</div>
                <div className={styles.charsListItemValue}>{height}</div>
            </div>
            <div className={styles.charsListItem}>
                <div className={styles.charsListItemTitle}>Размер одежды</div>
                <div className={styles.charsListItemValue}>{clothesSize}</div>
            </div>
            <div className={styles.charsListItem}>
                <div className={styles.charsListItemTitle}>Размер обуви</div>
                <div className={styles.charsListItemValue}>{shoesSize}</div>
            </div>
            <div className={styles.charsListItem}>
                <div className={styles.charsListItemTitle}>Интимная стрижка</div>
                <div className={styles.charsListItemValue}>{intimHair}</div>
            </div>
            <div className={styles.charsListItem}>
                <div className={styles.charsListItemTitle}>Цвет волос</div>
                <div className={styles.charsListItemValue}>{hairColor}</div>
            </div>
            <div className={styles.charsListItem}>
                <div className={styles.charsListItemTitle}>Внешность</div>
                <div className={styles.charsListItemValue}>{look}</div>
            </div>
            <div className={styles.charsListItem}>
                <div className={styles.charsListItemTitle}>Национальность</div>
                <div className={styles.charsListItemValue}>{nationality}</div>
            </div>
            <div className={styles.charsListItem}>
                <div className={styles.charsListItemTitle}>Телостожение</div>
                <div className={styles.charsListItemValue}>{physique}</div>
            </div>
            <div className={styles.charsListItem}>
                <div className={styles.charsListItemTitle}>Район</div>
                <div className={styles.charsListItemValue}>{region}</div>
            </div>
            <div className={styles.charsListItem}>
                <div className={styles.charsListItemTitle}>Метро</div>
                <div className={styles.charsListItemValue}>{metro}</div>
            </div>
            <div className={styles.charsListItem}>
                <div className={styles.charsListItemTitle}>Не моложе</div>
                <div className={styles.charsListItemValue}>{restrictedAge}</div>
            </div>
            <div className={styles.charsListItem}>
                <div className={styles.charsListItemTitle}>Отвечаю на</div>
                <div className={styles.charsListItemValue}>{socials}</div>
            </div>
            <div className={styles.charsListItem}>
                <div className={styles.charsListItemTitle}>Дата последней активности</div>
                <div className={styles.charsListItemValue}>{lastActivity}</div>
            </div>
        </div>
    </div>
  );
}
