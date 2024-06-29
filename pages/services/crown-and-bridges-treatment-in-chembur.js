
import { MainLayout } from '../../components/layout';

import CrownNBridges from '../../components/Services/CrownNBridges';

export default function Services() {
    return (
        <>
            <CrownNBridges />

        </>
    )
}
Services.getLayout = (page) => <MainLayout>{page}</MainLayout>;

