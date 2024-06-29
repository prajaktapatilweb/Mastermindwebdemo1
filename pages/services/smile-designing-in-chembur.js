
import { MainLayout } from '../../components/layout';

import SmileDesigningInChembur from '../../components/Services/SmileDesigningInChembur';

export default function Services() {
    return (
        <>
            <SmileDesigningInChembur />

        </>
    )
}
Services.getLayout = (page) => <MainLayout>{page}</MainLayout>;

