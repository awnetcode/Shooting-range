import './styles/price-list.css';

const PriceList = () =>{
    return(
        <>
        <h1>Nasz cennik:</h1>
        <ul className="ammo-price-list">Za wystrzeloną amunicję:
            <li className="ammo-price">.22 LR <span className="price">1 PLN</span></li>
            <li className="ammo-price">9x19 <span className="price">2.50 PLN</span></li>
            <li className="ammo-price">.38 spec. / 7.62x25 / 7.56 Browning / 9 Browning <span className="price">4 PLN</span></li>
            <li className="ammo-price">.45 ACP / .357 Magnum <span className="price">5 PLN</span></li>
            <li className="ammo-price">7.62x39 / .223 Rem<span className="price">5 PLN</span></li>
            <li className="ammo-price">.308 Win / 30-06 Springfield <span className="price">9 PLN</span></li>
            <li className="ammo-price">12/70 Śrut <span className="price">3 PLN</span></li>
            <li className="ammo-price">12/70 Loftka <span className="price">6 PLN</span></li>
            <li className="ammo-price">12/70 Slug <span className="price">8 PLN</span></li>
            <li className="ammo-price">7.62 Nagant <span className="price">13 PLN</span></li>
            <li className="ammo-price">40-70 Gov.<span className="price">22 PLN</span></li>
            <li className="ammo-price">.50 AE <span className="price">32 PLN</span></li>
        </ul> 
        <ul className="ammo-price-list">Za stanowisko:
            <li className="ammo-price">30 min<span className="price">20 PLN</span></li>
            <li className="ammo-price">60 min<span className="price">40 PLN</span></li>
            <li className="ammo-price">2 godziny<span className="price">60 PLN</span></li>
            <li className="ammo-price">3 godziny<span className="price">70 PLN</span></li>
            <li className="ammo-price">Opieka instruktora<span className="price">20 PLN / godz.</span></li>
            <li className="ammo-price">Cel reaktywny<span className="price">30 PLN / godz.</span></li>
        </ul>  
        <p>W przypadku strzelania z broni i amunicji obiektowej opieka instruktorska i opłata za wejście jest w cenie wystrzelonej amunicji.</p>
        </>
    )
}

export default PriceList;