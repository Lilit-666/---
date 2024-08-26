import React from 'react';
import styles from './Name.module.css';
import Image from 'next/image';
import Chars from '@/components/Chars/CharsItems/Chars';
import CharsTags from '@/components/Chars/CharsTags/CharsTags';

export default function Name( {profile}: {profile: string}) {
  return (
    <div className={styles.wrapper}>
        <div className={styles.imgSide}>
            <div className={styles.imgMain}>
                <div className={styles.imgMainItem}>
                    <Image src={'https://placeholder.com/320x460'} alt={'name'}></Image>
                </div>
            </div>
            <div className={styles.imgItems}>
                <Image src={'https://placeholder.com/60'} alt={'name'}></Image>
                <Image src={'https://placeholder.com/60'} alt={'name'}></Image>
                <Image src={'https://placeholder.com/60'} alt={'name'}></Image>
                <Image src={'https://placeholder.com/60'} alt={'name'}></Image>
                <Image src={'https://placeholder.com/60'} alt={'name'}></Image>
                <Image src={'https://placeholder.com/60'} alt={'name'}></Image>
                <Image src={'https://placeholder.com/60'} alt={'name'}></Image>
                <Image src={'https://placeholder.com/60'} alt={'name'}></Image>
                <Image src={'https://placeholder.com/60'} alt={'name'}></Image>
                <Image src={'https://placeholder.com/60'} alt={'name'}></Image>
            </div>
        </div>

        <div className={styles.textSide}>
            <Chars
                city={'Москва'}
                age={18}
                breastsSize={3}
                weight={45}
                height={162}
                clothesSize={44}
                shoesSize={39}
                intimHair={'Полная депиляция'}
                hairColor={'Шатенка'}
                look={'Славянская'}
                nationality={'Русские'}
                physique={'Стройная'}
                region={'Якиманка'}
                metro={'Кутузовская, Октябрьская, Парк культуры'}
                restrictedAge={'18 лет (ограничение по возрасту)'}
                socials={'Звонки, Sms, Telegram, Whatsapp'}
                lastActivity={'02.07.2024'}
            />
            <CharsTags tags={['Индивидуалка', 'МБР', 'Эскорт', 'Целуюсь']} />
        </div>

        <div>
            <div className={styles.buttonBox}>
                <div className={styles.buttonPhoneBox}>
                    <Image src={'/public/NamePage/phone.svg'} alt={'phone'} />
                    <button className={styles.buttonPhone}>Показать телефон</button>
                </div>
                <div className={styles.buttonSocialsBox}>
                    <div className={styles.telegram}>
                        <Image src={'/public/NamePage/telegram.svg'} alt={'telegram'} />
                        <button className={styles.telegramBtn}>Telegram</button>
                    </div>
                    <div className={styles.whatsapp}>
                        <Image src={'/public/NamePage/wapp.svg'} alt={'whatsapp'} />
                        <button className={styles.whatsappBtn}>Whatsapp</button>
                        <b className={styles.profileNumber}>{profile}</b>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
