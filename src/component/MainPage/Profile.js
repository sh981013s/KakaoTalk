// Profile 컴포넌트
import basic from '../../resources/img/basic_profile.jpg';


export default function Profile({ name, state }, type) {
	return (
		<>
			<div className="profileEntire">
				<div className="profileHeader">
					<i className="far fa-user-circle" />
					<i className="far fa-star" />
				</div>
				<div className="profileInfo">
					<div class="profileImg">
						<img
							src={basic}
							alt="lol"
							className="userComponentAvatar userComponentAvatarXl"
						/>
					</div>
					<h2>{name}</h2>
					{state ? <p>{state}</p> : null}
				</div>
				<hr />
			</div>
			<Tester type={type} />
		</>
	);
}

const Tester = ({ type }) => {
	console.log(type, ':::');
	return (
		<>
			{type === 'friends' ? (
				<div className="profileAction">
					<div>
						<i className="fas fa-comment" />
						1:1 Chat
					</div>
					<div>
						<i className="fas fa-phone-alt" />
						Call
					</div>
					<div>
						<i className="fas fa-comment-alt" />
						KakaoStory
					</div>
				</div>
			) : (
				<div>나</div>
			)}
		</>
	);
};
