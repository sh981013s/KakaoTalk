import logo from './logo.svg';
import './App.css';
import {Button, Input, Menu, Popover, Select} from "antd";
import {useEffect, useState} from "react";
import {Option} from "antd/es/mentions";
import {countryTelNum} from "./utils/column";

function App() {

	//가라데이터

	const arrayList = [{name: 'robot1'}, {name: 'robot2'}, {name: 'robot3'}, {name: 'robot4'}]

	const [current, setCurrent] = useState('mail');
	const [text, setText] = useState('');
	const [datalist, setDatalist] = useState([]);
	const [buttonState, setButtonState] = useState(true);


	const [searchText, setSearchText] = useState('');
	const [selectVelue, setSelectValue] = useState(82);


	useEffect(() => {
		setDatalist(arrayList)
	}, [])

	const handleClick = (e) => {
		setCurrent(e.key)
	}

	useEffect(() => {
		console.log(text, 'texttext')
	}, [text])

	const content = (
		<div style={{height: 500, borderRadius: 20}}>
			<Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
				<Menu.Item key="mail">
					Navigation One
				</Menu.Item>
				<Menu.Item key="sample">
					Navigation One
				</Menu.Item>
			</Menu>
			{
				current === 'mail' ?
					<>asdfasldkfjlasd;.</>
					:
					<>safmaslndf</>
			}

		</div>
	);

	const searchEvent = () => {
		const resultData = arrayList.filter((value) => value.name === text)
		if (resultData.length !== 0) {
			setButtonState(false)
		} else {
			setButtonState(true)
		}
		setDatalist(resultData)
	}


	const searchContacts = () =>{
		console.log(searchText,'::::')
		console.log(selectVelue,'::::')
	}
	return (
		<>


			<Input value={text} onChange={(e) => setText(e.target.value)} onPressEnter={searchEvent} suffix={<span onClick={()=>{setText('')}}>asdf</span>}/>
			<div style={{textAlign: 'center'}}>
			    <Popover placement="bottomRight" content={content} trigger="click">
			        <Button>눌러</Button>
			    </Popover>

			    {datalist.map((value)=>{
			        return <div>{value.name}</div>
			    })}
			</div>
			<Button style={{backgroundColor : buttonState ? '' : 'yellow'}} disabled={buttonState}>{buttonState ? 'Add Friends' : '다이다이'}</Button>

			<div style={{width: 500}}>
				<Select style={{width: 100}} value={selectVelue} onChange={(e)=> setSelectValue(e)}>

					{countryTelNum.map((value) =>
						<Option value={value.tel}>{value.country}</Option>
					)}


				</Select><Input style={{width: 'calc(100% - 100px)'}} value={searchText} onChange={(e)=>setSearchText(e.target.value)} onPressEnter={searchContacts}/>
			</div>

		</>
	)
}

export default App;