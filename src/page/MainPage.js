import Banner from "../component/Banner";
import Friends from "../component/contents/Friends";
import LeftMenu from "../component/LeftMenu";
import Header from "../component/Header";
import {useState} from "react";
import '../resources/css/mainpage/MainPage.css';


function MainPage() {

    const [searchText, setSearchText] = useState('');

    const receive = (props) => {
        setSearchText(props);
    }

    return (
        <>
            <div>
                <Header receive={receive}/>
                <Friends searchText={searchText}/>
            </div>
            <LeftMenu/>


            <Banner/>
        </>
    );
}

export default MainPage;
