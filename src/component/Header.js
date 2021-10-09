import {CloseOutlined, SearchOutlined, UserAddOutlined} from "@ant-design/icons";
import {Input} from "antd";
import {useEffect, useState} from "react";
import KakaoModal from "./common/KakaoModal";

function Header(props) {
    const [text, setText] = useState('');
    const [showModal, setShowModal] = useState(false);

    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        props.receive(text)
    }, [text])

    return (
        <div>
            
            <SearchOutlined style={{fontSize: 40, cursor: 'pointer'}} onClick={() => setTrigger(!trigger)}/>
            <UserAddOutlined style={{fontSize: 40}} onClick={()=>setShowModal(true)}/>
            {trigger && <>
                <Input placeholder="Basic usage" style={{width: '50%'}} onChange={(e) => {
                    setText(e.target.value)
                }}/>
                <CloseOutlined onClick={() => setTrigger(false)} style={{cursor: 'pointer'}}/>
            </>
            }
            <KakaoModal showModal={showModal} contents={'아 좋아'}/>
        </div>
    );
}

export default Header;
