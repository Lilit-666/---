import { FC } from 'react';
import { useTranslations } from 'next-intl';
import styles from './page.module.css';
import { MantineProvider } from '@mantine/core';
import { Header } from '@/components/header/Header';

const Home: FC = () => {
    const t = useTranslations('main');

    return (
        <MantineProvider>
            <Header links={[]} />
        </MantineProvider>
    );
};

export default Home;
