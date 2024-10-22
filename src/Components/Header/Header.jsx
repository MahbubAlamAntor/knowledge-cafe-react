import Profile from '../../assets/images/profile.png'


const Header = () => {
    return (
        <header className='flex justify-between items-center my-4 border-b-2'>
            <h2 className='font-bold text-2xl'>Knowledge Kafe</h2>
            <img src={Profile} alt="" />
        </header>
    );
};

export default Header;