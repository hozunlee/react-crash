import { useEffect, useRef } from 'react';
import { useSession } from '../hooks/session-context';

export const Login = () => {
  const { login } = useSession();

  const inputIdRef = useRef(null);
  const inputUserNameRef = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    login(inputIdRef.current?.value, inputUserNameRef.current?.value);
  };

  useEffect(() => {
    inputUserNameRef.current.value = '홍길동';
    inputIdRef.current.focus();
  }, []);
  return (
    <>
      <h3> 로그인입니다 </h3>
      <form onSubmit={submit}>
        <label htmlFor='user-id'>
          UserId:
          <input ref={inputIdRef} type='number' id='user-id' defaultValue='0' />
        </label>
        <label htmlFor='user-name'>
          userName:
          <input ref={inputUserNameRef} type='text' id='user-name' />
        </label>
        <button type='submit'>로그인</button>
      </form>
    </>
  );
};
