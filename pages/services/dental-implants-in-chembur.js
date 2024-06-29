
import { MainLayout } from '../../components/layout';

import DentalImplantsInChembur from '../../components/Services/DentalImplantsInChembur';

export default function Services() {
    return (
        <>
            <DentalImplantsInChembur />

        </>
    )
}
Services.getLayout = (page) => <MainLayout>{page}</MainLayout>;

