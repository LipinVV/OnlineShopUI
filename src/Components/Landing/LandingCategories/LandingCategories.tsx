import {Link} from "react-router-dom";
import './landingCategories.scss';

export const LandingCategories = () => {



    return (
        <div className='landing-categories'>
            <Link className='landing-categories__link' to='/chairs'>Office Chair</Link>
            <Link className='landing-categories__link' to='/desks'>Office Desk</Link>
        </div>
    )
}