
import { MainLayout } from '../../components/layout';

import TeethBracesInChembur from '../../components/Services/TeethBracesInChembur';

export default function Services() {
    return (
        <>
            <TeethBracesInChembur />

        </>
    )
}
Services.getLayout = (page) => <MainLayout>{page}</MainLayout>;

