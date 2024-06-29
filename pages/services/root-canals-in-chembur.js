
import { MainLayout } from '../../components/layout';

import RootCanalsInChembur from '../../components/Services/RootCanalsInChembur';

export default function Services() {
    return (
        <>
            <RootCanalsInChembur />

        </>
    )
}
Services.getLayout = (page) => <MainLayout>{page}</MainLayout>;

