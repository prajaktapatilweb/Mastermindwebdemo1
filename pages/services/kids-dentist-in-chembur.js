
import { MainLayout } from '../../components/layout';

import KidsDentistInChembur from '../../components/Services/KidsDentistInChembur';

export default function Services() {
    return (
        <>
            <KidsDentistInChembur />

        </>
    )
}
Services.getLayout = (page) => <MainLayout>{page}</MainLayout>;

