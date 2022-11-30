import { useSession } from '../hooks/session-context';
import { Login } from './Login';
import Profile from './Profile';

const My = () => {
  const { session, removeCartItem } = useSession();
  // console.log('@@MY>>>', session);
  return (
    <>
      <h2>My</h2>
      <div>Login</div>
      {session?.loginUser ? <Profile /> : <Login />}
      <ul>
        {session?.cart?.map((item) => (
          <li key={item.id}>
            {item.name} ({item.price})
            <button onClick={() => removeCartItem(item.id)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default My;
