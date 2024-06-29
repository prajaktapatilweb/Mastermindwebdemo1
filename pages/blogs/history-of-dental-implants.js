
import { MainLayout } from '../../components/layout';

import Blog1DentalImplant from '../../components/Blog/Blog1DentalImplant';

export default function Home() {
    return (
        <>
            <Blog1DentalImplant></Blog1DentalImplant>

        </>
    )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

