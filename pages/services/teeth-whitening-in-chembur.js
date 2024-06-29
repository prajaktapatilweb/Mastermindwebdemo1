
import { MainLayout } from '../../components/layout';

import TeethWhiteningInChembur from '../../components/Services/TeethWhiteningInChembur';

export default function Services() {
    return (
        <>
            <TeethWhiteningInChembur />

        </>
    )
}
Services.getLayout = (page) => <MainLayout>{page}</MainLayout>;

