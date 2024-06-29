import { MainLayout } from '../components/layout';
import Trainer from '../components/home/Trainer';

export default function Home() {
    return (
        <>
            <Trainer></Trainer>
        </>
    )
}
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

