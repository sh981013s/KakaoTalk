import Modal from 'antd/es/modal/Modal';
import { useEffect, useState } from 'react';

function KakaoModal(props) {
	const [showModal, setShowModal] = useState(false);
	const [contents, setContents] = useState('');
	console.log(props.showModal, 'showModal');

	useEffect(() => {
		setShowModal(props.showModal);
		setContents(props.contents);
	}, [props.showModal]);

	return (
		<Modal
			title={<span>친구 추가</span>}
			visible={showModal}
			onOk={() => setShowModal(false)}
			onCancel={() => setShowModal(false)}
		>
			{contents}
		</Modal>
	);
}

export default KakaoModal;
