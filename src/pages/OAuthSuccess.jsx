import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function OAuthSuccess() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = searchParams.get('accessToken');
        const refreshToken = searchParams.get('refreshToken');

        if(accessToken && refreshToken) {
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            navigate('/app/dashboard', { replace: true });
        }else {
            navigate('/?error=auth_failed', { replace: true });
        }
    }, [searchParams, navigate]);
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-zinc-800 text-zinc-900 dark:text-white">
            <div className="text-center">
                <p className="text-lg font-semibold animate-pulse">Authenticating with Google...</p>
            </div>
        </div>
    )
}

export default OAuthSuccess;