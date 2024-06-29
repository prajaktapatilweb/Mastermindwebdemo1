
import { MainLayout } from '../components/layout';

import Blog from '../components/Blog';

export default function Home() {
    return (
        <>
            <Blog></Blog>

        </>
    )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

