import '../styles/main.css';

import AboutUs from './main-content/About-us';
import ShootingRange from './main-content/Shooting-range';
import Reservation from './main-content/Reservation';
import Statute from './main-content/Statute';
import PriceList from './main-content/Price-list';
import OurGuns from './main-content/Our-guns';
import SimpleForm from './main-content/Form-action';

// eslint-disable-next-line react/prop-types
const Main = ({content}) =>{


    switch(content){
        case 'aboutUs':
            content = <AboutUs />
            break;
        case 'range':
            content = <ShootingRange />
            break;
        case 'reservation':
            content = <Reservation />
            break;
        case 'statute':
            content = <Statute />
            break;
        case 'priceList':
            content = <PriceList />
            break;
        case 'guns':
            content = <OurGuns />
            break;
        case 'form':
            content = <SimpleForm />
            break;

        default: content = <ShootingRange />
    }

    return(
        <>
        <main className='page-content'>
{content}
        </main>
        </>
    )
}

export default Main;