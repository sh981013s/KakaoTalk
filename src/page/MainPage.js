import Banner from "../component/Banner";
import Friends from "../contents/Friends";
import LeftMenu from "../component/LeftMenu";
import Header from "../component/Header";


function MainPage() {
    return (

        <>
            <div>
                <Header/>
                <Friends/>
            </div>
            <LeftMenu/>


            <Banner/>
        </>
    );
}

export default MainPage;
