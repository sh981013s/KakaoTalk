
// Profile 컴포넌트
import basic from '../../resources/img/basic_profile.jpg';

export default function Profile({name, desc}, type){
	return (
		<>
		<div className='profileEntire'>
			<div className='profileHeader'>
				<i className="far fa-user-circle" />
				<i className="far fa-star" />
			</div>
			<div className='profileInfo'>
				<div class='profileImg'>
					<img
							 src={basic}
							 alt="lol"
							 className="userComponentAvatar userComponentAvatarXl"
					/>
				</div>
				<h2>{name}</h2>
				{
					desc ?
						<p>{desc}</p>
						: null
				}
			</div>
			<hr/>

		</div>
			<Tester type={type}/>
		</>
	)
}


const Tester = ({type}) =>{
	console.log(type,':::')
	return (
		<>
			{type === 'friends' ?
				<div>
					<i className='fas fa-comment'></i>
				</div>
				:
				<div>
					나
				</div>
			}
		</>
	)
}
