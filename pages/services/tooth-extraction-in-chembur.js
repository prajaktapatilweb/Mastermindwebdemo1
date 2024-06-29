
import { MainLayout } from '../../components/layout';

import ToothExtractionInChembur from '../../components/Services/ToothExtractionInChembur';

export default function Services() {
    return (
        <>
            <ToothExtractionInChembur />

        </>
    )
}
Services.getLayout = (page) => <MainLayout>{page}</MainLayout>;

