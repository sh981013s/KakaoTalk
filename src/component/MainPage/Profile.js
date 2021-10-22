
// Profile 컴포넌트
export default function Profile({name}, type){
	return (
		<>
		<div>
			{name}
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
