// import Modal from 'antd/es/modal/Modal';
// import { useEffect, useState } from 'react';
//
// function KakaoModal(props) {
// 	const [showModal, setShowModal] = useState(false);
// 	const [tmp, setContents] = useState('');
// 	console.log(props.showModal, 'showModal');
//
// 	useEffect(() => {
// 		setShowModal(props.showModal);
// 		setContents(props.tmp);
// 	}, [props.showModal]);
//
// 	return (
// 		<Modal
// 			title={<span>친구 추가</span>}
// 			visible={showModal}
// 			onOk={() => setShowModal(false)}
// 			onCancel={() => setShowModal(false)}
// 		>
// 			{tmp}
// 		</Modal>
// 	);
// }
//
// export default KakaoModal;
