import '../styles/navigation.css';

// eslint-disable-next-line react/prop-types
const Navigation = ({setContent}) =>{
    return(

        <>
        <ul className="navigation-list">
            <li className="navigation-link" onClick={() => setContent('aboutUs')}>O nas</li>
            <li className="navigation-link" onClick={() => setContent('range')}>Strzelnica</li>
            <li className="navigation-link" onClick={() => setContent('reservation')}>Rezerwacja</li>
            <li className="navigation-link" onClick={() => setContent('statute')}>Regulamin</li>
            <li className="navigation-link" onClick={() => setContent('priceList')}>Cennik</li>
            <li className="navigation-link" onClick={() => setContent('guns')}>Sprzęt</li>
        </ul>
        </>
    )
}

export default Navigation;