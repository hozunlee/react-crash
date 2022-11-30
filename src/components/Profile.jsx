import { useSession } from '../hooks/session-context';

const Profile = () => {
  const { session, logout } = useSession();

  return (
    <>
      <div>프로필입니다</div>
      <div>
        My name is {session.loginUser.name}
        <small>({session.loginUser.id})</small>
      </div>
      <button onClick={logout}>로그아웃</button>
    </>
  );
};

export default Profile;
