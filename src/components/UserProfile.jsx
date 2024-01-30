import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (<>

            <h1>{user.name}</h1>
            {user.sub.includes('github') ?
                <a href={`https://www.github.com/${user.nickname}`}>github.com/{user.nickname}</a> :
                ""
            }

        </>))
};

export default UserProfile;