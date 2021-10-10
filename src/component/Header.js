import { CloseOutlined, UserAddOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useEffect, useState } from 'react';
import KakaoModal from './common/KakaoModal';
import { SearchIcon } from '../resources/styled/layout';

function Header(props) {
	const [text, setText] = useState('');
	const [showModal, setShowModal] = useState(false);
	const [trigger, setTrigger] = useState(false);

	useEffect(() => {
		props.receive(text);
	}, [text]);

	return (
		/*        <div>
            <SearchIcon onClick={() => setTrigger(!trigger)}/>
            <UserAddOutlined style={{fontSize: 40}} onClick={() => setShowModal(true)}/>
            {trigger && <>
                <Input placeholder="Basic usage" style={{width: '50%'}} onChange={(e) => {
                    setText(e.target.value)
                }}/>
                <CloseOutlined onClick={() => setTrigger(false)} style={{cursor: 'pointer'}}/>
            </>
            }
            <KakaoModal showModal={showModal} contents={'아 좋아'}/>
        </div>*/
		<header className="screenHeader">
			<h1 className='screenHeaderTitle'>Friends</h1>
			<div className="screenHeaderIcons">
				<span><i className="fas fa-search fa-lg"></i></span>
				<span><i className="fas fa-user-plus fa-lg"></i></span>
			</div>
		</header>
	);
}

export default Header;
