import {Input} from "antd";
import {useEffect, useState} from "react";

function Friends() {



    const [text, setText] = useState('');
    const [realList, setRealList] = useState([]);
    const [copyList, setCopyList] = useState([]);


    const ArrayList = [
        {name: 'robot1'},
        {name: 'robot2'},
        {name: 'robot3'},
        {name: 'robot4'},
        {name: 'robot5'},
    ];

    useEffect(()=>{
        console.log(':::')
       setRealList(ArrayList);
       // setCopyList(ArrayList);
    },[])




    useEffect(() => {
        const resultData = copyList.filter(value => value.name.includes(text))
        setRealList(resultData);
    }, [text])


    return (
        <>
            <Input placeholder="Basic usage" style={{width: '50%'}} onChange={(e) => {
                setText(e.target.value)
            }}/>
            {realList.map(value => <div>{value.name}</div>)}
        </>
    );
}

export default Friends;