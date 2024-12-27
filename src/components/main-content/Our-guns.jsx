import './styles/our-guns.css';
import Guns from '../Guns-data';

const OurGuns = () =>{

    {Guns.map((gun, index) => {
        console.log(gun);
        console.log(index);
        gun.name;
    })}
    return(
        <>
        Guns are Awesome!
        <img src={Guns[3].image} alt="" />
        </>
    )

}

export default OurGuns;