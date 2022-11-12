import styles from '../styles/Home.module.css';

const Home = ()=>{
    return (
    <div className="unselectable h-[100vh] bg-[#030100] flex justify-center ">
        <Navbar />
    </div>);
}

const Navbar = ()=>{
    return (
        <div className="flex flex-row px-4 w-full h-16 items-center bg-zinc-900">
            
            <div className="h-full flex px-10 items-center justify-center">
                <div className="flex justify-center items-center font-semibold text-orange-500 text-2xl rounded-sm w-40 h-10">
                    crunchyroll
                </div>

                <div className={styles.navbarElement}>
                    <h1>Browse</h1>
                </div>  
                <div className={styles.navbarElement}>
                    <h1 >Manga</h1>
                </div>  
                <div className={styles.navbarElement}>
                    <h1 >Store</h1>
                </div>  
                <div className={styles.navbarElement}>
                    <h1 >News</h1>
                </div>  
            </div>
            
            <div className="h-full flex px-10 items-center justify-center">

            </div>
        </div>

    );
}

export default Home;