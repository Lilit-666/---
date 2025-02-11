import { FC } from 'react';
import { useTranslations } from 'next-intl';
import styles from './page.module.css';
import { MantineProvider } from '@mantine/core';

const Home: FC = () => {
    const t = useTranslations('main');

    return (
        <MantineProvider>
            <p className={styles.title}>{ t('title') }</p>
        </MantineProvider>
    );
};

export default Home;
