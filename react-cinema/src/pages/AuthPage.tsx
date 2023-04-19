import { LayoutPage } from '../layout/LayoutHoc';

function AuthPage() {
    return ( 
        <>
            login
        </>
     );
}

const LayoutAuth = LayoutPage(AuthPage);

export default LayoutAuth;