import { FC } from 'react';
import { useTranslations } from 'next-intl';

const Home: FC = () => {
    const t = useTranslations('main');

    return (
        <div className={'home'}>
            { t('title') }
            { t('name') }
        </div>
    );
};

export default Home;
