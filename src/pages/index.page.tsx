import { useAtom } from 'jotai';
import type { ChangeEvent, FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { Loading } from 'src/components/Loading/Loading';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { apiClient } from 'src/utils/apiClient';
import { userAtom } from '../atoms/user';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [roomId, setRoomId] = useState('');
  const [chat, setChat] = useState([]);
  // const [roomIdasse, setRooomIdasse] = useState(['a', 'b']);
  const inputRoomId = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomId(e.target.value);
    console.log(user);
  };
  const inputId = async (e: FormEvent) => {
    e.preventDefault();
    console.log('a');
    if (!user) return;
    const a = await apiClient.user.post({ body: { roomId } });
    console.log(a);
  };
  useEffect(() => {
    console.log('a');
  }, []);

  if (!user) return <Loading visible />;

  return (
    <>
      <BasicHeader user={user} />
      <div className={styles.title} style={{ marginTop: '160px' }}>
        Welcome to Rebash
      </div>
      <form style={{ textAlign: 'center', marginTop: '80px' }} onSubmit={inputId}>
        <input value={roomId} type="text" onChange={inputRoomId} />
        <input type="submit" value="  in  " />
      </form>
    </>
  );
};

export default Home;
