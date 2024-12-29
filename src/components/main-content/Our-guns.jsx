import './styles/our-guns.css';
import Guns from '../Guns-data';

const OurGuns = () =>{

    return(
        <>
        <div className="guns-area">
        {Guns.map((gun, index) => (
            <div className="gun-area" key={index}>
                <img className='gun-image' src={gun.image} alt={ gun.name } />
                <div className="gun-data">
                <h2 key={ gun.name }>{ gun.name }</h2>
                <span>Rodzaj: {gun.type}</span>
                <span>Kaliber: {gun.caliber}</span>
                <span>Zasięg: {gun.range} m</span>
                <span>Przyrządy celownicze: {gun.sights}</span>
                <span>Cena: {gun.pricePerRound} PLN / strzał</span>
                </div>
            </div>
        )
        )}
        </div>
        Guns are Awesome!
        </>
    )
}

export default OurGuns;