import { Fragment, Helmet, Suspense, lazy } from "libraries";
import { AiOutlineSearch, AiOutlinePlus } from "libraries/icon";
import Loading from "components/atom/Loading";

const HeaderTitle = lazy(() => import('components/molecule/HeaderTitle'));
const TextSearch = lazy(() => import('components/atom/TextSearch'));
const Button = lazy(() => import('components/atom/Button'));

const Driver = () => {

    return (
        <Fragment>
            <Helmet>
                <title>Shipper Driver Management</title>
            </Helmet>
            <Suspense fallback={<Loading />}>
                <HeaderTitle
                    title="Driver Management"
                    description="Daftar Driver yang bekerja dengan Anda"
                >
                    <TextSearch
                        placeholder="Cari Driver"
                        icon={<AiOutlineSearch className="icon font__size--18 color__primary" />}
                    />
                    <Button style={'primary'}>
                        <span className="text__transform--uppercase">Tambah Driver</span>
                        <AiOutlinePlus className="font__size--18 margin__left--8px" />
                    </Button>
                </HeaderTitle>
            </Suspense>
        </Fragment>
    )
};

export default Driver;