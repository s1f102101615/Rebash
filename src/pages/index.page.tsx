import type { MessageModel } from '$/commonTypesWithClient/models';
import { AliwangwangOutlined, PlusOutlined, SearchOutlined, SendOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { AutoComplete, FloatButton, Input, Layout, Menu, Popconfirm, theme, Button, Divider } from 'antd';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from 'src/utils/apiClient';
import styles from './index.module.css';
import { Modal, Upload } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
const App: React.FC = () => {
  const [user] = useAtom(userAtom);
  const [roomId, setRoomId] = useState('');
  const [roomId2, setRoomId2] = useState('');
  const [aroom, setARoomId] = useState<string[]>([]);
  const [message, setaComment] = useState('');
  const [myId, setmyId] = useState<string>('');

  const [userasse, setuserasse] = useState<string[]>([]);
  const [messages, setMessages] = useState<MessageModel[]>([]);
  const [myMessages, setMyMessages] = useState<string[]>([]);
  const [otherMessages, setOtherMessages] = useState<string[]>([]);
  const router = useRouter(); // Next.js のルーターを取得
  const [roomId1, setRoomId1] = useState(''); // 状態変数 roomId を宣言
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaStreamRef = useRef<MediaStream | undefined>();
  const [showForm, setShowForm] = useState(false);
  const [searchRoomId, setSearchRoomId] = useState('');
  const [coment, setComent] = useState('');
  const [infoname, setInfoName] = useState('');
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editedMessage, setEditedMessage] = useState('');
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [editMenuVisible, setEditMenuVisible] = useState(false);
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
  const [value, setValue] = useState('');
  const [options, setOptions] = useState('');
  const [anotherOptions, setAnotherOptions] = useState<{ value: string }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [popconfirmVisible, setPopconfirmVisible] = useState(false);
  const [popsearchVisible, setsearchVisible] = useState(false);

  type MenuItem = Required<MenuProps>['items'][number];
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }
  // const { Header, Content, Footer, Sider } = Layout;
  // const roomNames = aroom;
  // const items = roomNames.map((roomName, index) => ({
  //   key: String(index + 1),
  //   icon: React.createElement(AliwangwangOutlined),
  //   label: roomName,
  //   onClick: () => {
  //     LookRoom(roomName);
  //   },
  // }));
  const items: MenuProps['items'] = [
    getItem('Navigation One', 'sub1', <MailOutlined />, [
      getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
      getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    ]),

    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),

    { type: 'divider' },

    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),

    getItem('Group', 'grp', null, aroom.map((room, index) => getItem(room, `group-${index}`)), 'group'),
  ];

  const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error',
    },
  ]);

  // const handlePreview = async (file: UploadFile) => {
  //   if (!file.url && !file.preview) {
  //     file.preview = await getBase64(file.originFileObj as RcFile);
  //   }

  //   setPreviewImage(file.url || (file.preview as string));
  //   setPreviewOpen(true);
  //   setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  // };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleCancel = () => setPreviewOpen(false);

  const getPanelValue = (searchText: string) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };

  const onChange = (data: string) => {
    setValue(data);
  };

  const mockVal = (str: string, repeat = 1) => ({
    value: str.repeat(repeat),
  });

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    const initializeVideo = async () => {
      mediaStreamRef.current = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStreamRef.current;
      }
    };

    const cleanupMediaStream = () => {
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks()[0].stop();
      }
    };

    initializeVideo();

    return () => {
      cleanupMediaStream();
    };
  }, []);

  const Roomlist = useCallback(async () => {
    const roomlist = await apiClient.roomlist.$post();
    console.log(roomlist);
    setARoomId(roomlist.roomId);
  }, []);

  const createUserdata = useCallback(async () => {
    const user1 = await apiClient.roomlist.$post();
    console.log(user1);
    if (user1 === null) {
      console.log('a');
      await apiClient.create.$post();
    } else {
      if (user === null) {
        console.log(user);
      } else {
        const userId = user.id;
        const userroom = await apiClient.usercheck.$post({ body: { userId } });
        console.log(userroom);
      }
    }
  }, [user]);
  // const inputRoomId = (e: ChangeEvent<HTMLInputElement>) => {
  //   setRoomId(e.target.value);
  // };
  // const serchRoomId = (e: ChangeEvent<HTMLInputElement>) => {
  //   setSearchRoomId(e.target.value);
  // };
  // const inputComment = (e: ChangeEvent<HTMLInputElement>) => {
  //   setaComment(e.target.value);
  // };
  const handleConfirm = async () => {
    setRoomId(inputValue);
    console.log('User input:', inputValue);
    if (!user) return;
    const userId = user.id;
    const a = await apiClient.user.post({ body: { roomId, userId } });
    const b = await apiClient.roomcreate.post({ body: { roomId, userId } });
    console.log(roomId);
    setARoomId(a.body.roomId);
  };
  const serchId = async () => {
    if (!user) return;
    const userId = user.id;
    console.log(searchRoomId);
    const a = await apiClient.serchroom.post({ body: { searchRoomId, userId } });
    await apiClient.userroomcreate.post({ body: { searchRoomId, userId } });
    console.log(a.body.user);
    // const userasse = a.user
    console.log(roomId);
    setRoomId2(a.body.roomid);
    setuserasse(a.body.user);
    await Roomlist();
  };

  const inputcomment = async () => {
    if (!user) return;
    console.log(value);
    const sender_id = user.id;
    const content = value;
    const name = user.displayName;
    if (name === undefined) {
      console.log('usernameなし');
    } else {
      const a = await apiClient.message.post({ body: { roomId, sender_id, content, name } });
    }
    await LookMessage();
  };

  const LookRoom = async (roomId3: string) => {
    console.log(roomId3);
    setRoomId(roomId3);
    await apiClient.room.post({ body: { roomId3 } });
    if (user === null) {
      console.log('error');
    } else {
      const userId = user.id;
      console.log(userId);
      const a = await apiClient.roomuser.post({ body: { roomId3 } });
      console.log(a.body.user);
      setuserasse(a.body.user);
    }

    const messages = await apiClient.message_get2.$post({ body: { roomId3 } });
    console.log(messages);
    if (messages === undefined) {
      console.log('messagesがありません');
    } else {
      setMessages(messages);
      setmyId(user?.id || '');
    }
  };

  const LookMessage = async () => {
    const messages = await apiClient.message_get.$post({ body: { roomId } });
    if (messages === undefined) {
      console.log('messagesがありません');
    } else {
      setMessages(messages);
      setmyId(user?.id || '');
    }
  };

  // const handleInfo = async (messageId: string) => {
  //   try {
  //     const infomessage = await apiClient.infomessage.$post({ body: { messageId } });
  //     setInfoName(infomessage.sender_Id);
  //     // console.log(infoname)
  //     await LookMessage();
  //   } catch (error) {
  //     await LookMessage();
  //   }
  // };

  // const handleDelete = async (messageId: string) => {
  //   try {
  //     await apiClient.deleteMessage.$post({ body: { messageId } });
  //     await LookMessage();
  //   } catch (error) {
  //     await LookMessage();
  //   }
  // };

  // const handleToggleForm = () => {
  //   setShowForm(!showForm);
  // };

  // const handleEdit = (messageId: string, contentmess: string) => {
  //   setEditingMessageId(messageId);
  //   setEditedMessage(contentmess);
  //   setContextMenuVisible(false);
  //   setEditMenuVisible(true);
  //   setComent(contentmess);
  // };
  // const handleSaveEdit = async () => {
  //   setEditMenuVisible(false);
  //   if (editingMessageId === null) {
  //     console.log('id2なし');
  //   }
  //   {
  //     await apiClient.edit.$post({ body: { editingMessageId, editedMessage } });
  //     await LookMessage();
  //     setEditingMessageId(null);
  //     setEditedMessage('');
  //   }
  // };
  // const handleRightClick =
  //   (messageId: string, contentmess: string) =>
  //     (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //       e.preventDefault();
  //       setContextMenuVisible(true);
  //       setSelectedMessageId(messageId);
  //       setContextMenuPosition({ x: e.clientX, y: e.clientY });
  //       setEditingMessageId(messageId);
  //       setEditedMessage(contentmess);
  //       setComent(contentmess);
  //     };

  useEffect(() => {
    createUserdata();
    Roomlist();
  }, [Roomlist, createUserdata]);

  return (
    <Layout hasSider>
      <p>User: {user?.id}</p>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
            <p>long content</p>
            {messages
              .sort((a, b) => a.sent_at - b.sent_at)
              .map((message, index) => (
                <React.Fragment key={message.id2}>
                  {index !== 0 && <Divider orientation="left" plain />}
                  <div
                    className={`${styles.commentBubble} ${message.sender_Id === myId ? styles.myMessage : styles.otherMessage
                      }`}
                  >
                    <div className={styles.username}>{message.username}</div>
                    <div className={styles.content}>{message.contentmess}</div>
                  </div>
                </React.Fragment>
              ))}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
      <div style={{ position: 'relative' }}>
        <AutoComplete
          style={{ position: 'fixed', width: 800, height: 600, top: 750, right: 330 }}
          // value={inputValue}
          // options={autoCompleteOptions}
          onSelect={onSelect}
          onSearch={onChange}
          placeholder="input here"
        />
        <br />
        <br />
      </div>
      <Button icon={<SendOutlined />} style={{ position: 'fixed', top: 750, right: 300 }} type="primary" onClick={() => inputcomment()} />
      <FloatButton icon={<SearchOutlined />} type="primary" style={{ position: 'fixed', top: 800, left: 75 }} />
      <Popconfirm
        title={
          <Input
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            onPressEnter={handleConfirm}
            placeholder="RoomIdを入力してください"
          />
        }
        visible={popconfirmVisible}
        onVisibleChange={(visible) => setPopconfirmVisible(visible)}
        onConfirm={handleConfirm}
        onCancel={() => setPopconfirmVisible(false)}
        okText="Add"
        cancelText="Cancel"
        placement="left"
      >
        <FloatButton icon={<PlusOutlined />} type="primary" style={{ top: 730, left: 75 }} />
      </Popconfirm>
      <Popconfirm
        title={
          <Input
            value={searchRoomId}
            onChange={(e) => setSearchRoomId(e.target.value)}
            onPressEnter={serchId}
            placeholder="RoomIdを入力してください"
          />
        }
        visible={popconfirmVisible}
        onVisibleChange={(visible) => setsearchVisible(visible)}
        onConfirm={serchId}
        onCancel={() => setsearchVisible(false)}
        okText="Search"
        cancelText="Cancel"
        placement="left"
      >
        <FloatButton icon={<SearchOutlined />} type="primary" style={{ top: 800, left: 75 }} />
      </Popconfirm>
      {/* <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-circle"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </> */}
    </Layout>
  );
};

export default App;
