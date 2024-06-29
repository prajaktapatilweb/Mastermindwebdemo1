
import { MainLayout } from '../../components/layout';
import DentalFillingsInChembur from '../../components/Services/DentalFillingsInChembur';


export default function Services() {
    return (
        <>
            <DentalFillingsInChembur />

        </>
    )
}
Services.getLayout = (page) => <MainLayout>{page}</MainLayout>;

