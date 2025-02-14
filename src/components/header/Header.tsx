'use client';

import {
    Box,
    Container,
    Portal,
    Modal,
    Button,
    Text
} from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';
import styles from './Header.module.css';
import { useState } from 'react';
import Link from 'next/link';

const cities = [
  { label: 'Москва', value: 'Москва' },
  { label: 'Санкт-Петербург', value: 'Санкт-Петербург' },
  { label: 'Казань', value: 'Казань' },
  // ...
];

type LinkItem = {
    label: string;
    path: string;
  };

  type HeaderProps = {
    links: LinkItem[];
  };

export const Header = ({ links }: HeaderProps) => {

    const [opened, setOpened] = useState(false);
    const [selectedCity, setSelectedCity] = useState('Москва');

    const handleCityChange = (city: string) => {
        setSelectedCity(city);
        setOpened(false);
      };

    const pinned = useHeadroom({ fixedAt: 120 });

return (
    <Portal>
        <Box className={`headerBox ${pinned ? 'pinned' : 'not-pinned'}`}>
            <Container size={'xl'}>
                <div className={styles.headerTop}>
                    <div className={styles.region}>
                        <div className={styles.regionText}>
                            <Text>Ваш регион:</Text>
                            <Text fw={700}>{selectedCity}</Text>
                            <Button className={styles.btn} onClick={() => setOpened(true)}>Другой город</Button>
                        </div>

                        <Modal
                            centered
                            size="md"
                            className={styles.modal}
                            opened={opened}
                            onClose={() => setOpened(false)}
                            title="Выберите город"
                            padding="xl"
                            radius="md"
                        >
                            {cities.map((city) => (
                                <Button
                                key={city.value}
                                onClick={() => handleCityChange(city.value)}
                                >
                                {city.label}
                                </Button>
                            ))}
                        </Modal>
                    </div>

                    <div className={styles.business}>
                        <Link className={styles.link} href={'/'}>Cутенерам</Link>
                        <Link className={styles.link} href={'/'}>Студиям</Link>
                        <Link className={styles.link} href={'/'}>B2B</Link>
                        <Link className={styles.link} href={'/'}>Сотрудничество с нами</Link>
                    </div>

                    <div className={styles.lang}>
                        <Text fw>Язык:
                            <Button>RU</Button>
                            /
                            <Button>EN</Button>
                    </div>
                </div>
            </Container>
        </Box>
    </Portal>
  );
};
