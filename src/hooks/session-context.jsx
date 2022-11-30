import { createContext, useContext, useState } from 'react';

const SampleSession = {
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

// 공급자 쪽
// SessionContext 을 가지고 provider를 만들 예정
const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(SampleSession);

  const login = (id, name) => {
    setSession({ ...session, loginUser: { id, name } });
  };

  const logout = () => {
    setSession({ ...session, loginUser: null });
  };

  const removeCartItem = (itemId) => {
    console.log('itemId :>> ', itemId);
    const temp = session.cart.filter((item) => item.id !== itemId);
    setSession({ ...session, cart: temp });
  };

  return (
    <SessionContext.Provider value={{ session, login, logout, removeCartItem }}>
      {children}
    </SessionContext.Provider>
  );
};

// 사용하는 쪽
// useContext를 사용하는 컴포넌트에서 한다면 SessionContext도 가져와야하기 때문에 중복됨
export const useSession = () => useContext(SessionContext);
