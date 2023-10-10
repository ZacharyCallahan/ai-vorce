import ProfileNav from '../components/ui/profile/ProfileNav';

const layout = ({children}) => {
    return (
        <div className='flex justify-between  m-auto w-11/12 pt-32'>
            {children}
            <ProfileNav />
        </div>
    );
}

export default layout;