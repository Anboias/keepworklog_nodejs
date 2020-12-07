import { signOut } from '../firebase/useAuth';
import { useRequireAuth } from '../firebase/useRequireAuth';

const DashBoardPage = () => {
    const auth = useRequireAuth()
    if (!auth.user) return null;
    return (
        <div className="">
            <div className="">
                <div className="">
                    <h2 className="">
                        {`Welcome ${auth.user.name}!`}
                    </h2>
                    <p className="">
                        {`You are logged in with ${auth.user.email}`}
                    </p>
                </div>
                <button
                    onClick={() => auth.signOut()}
                    className=""
                >Sign out</button>
            </div>
        </div>
    );
};
export default DashBoardPage;