import "./styles/shooting-range.css";

import longRange from '../../images/range/range 1.jpg';
import medRange from '../../images/range/range 2.jpg';
import shortRange from '../../images/range/range3.jpg';
import training from '../../images/range/firing-line-1200x800.jpg';

const ShootingRange = () =>{
    return(
        <>
        <div className="shooting-range">
        <h1>Strzelnica</h1>
            <div className="shooting-range-part">
                <img src={training} alt='training' className="part-image" />
                <div className="part-content">
                    <h2>Co robimy?</h2>
                    <p>
                    Nasz obiekt to profesjonalna strzelnica otwarta. Szkolenia indywidualne i grupowe prowadzimy od poniedziałku do soboty w godzinach 8:00 - 20:00.
                    </p>
                    <p>
                    W niedziele organizujemy zawody sportowe i pikiniki kolekcjonerskie. 
                    </p>
                    <p>
                    Zapraszamy wszystkich początkujących, którzy chcą nauczyć się obsługi broni palnej, jak również nieco bardziej zaawansowanych chcących rozwinąć swoje umiejętności strzeleckie.
                    </p>
                </div>
            </div>
            <div className="shooting-range-part">
                <div className="part-content">
                    <h2>O Strzelnicy.</h2>
                    <p>
                        <ul>
                            Dysponujemy pięcioma profesjonalnymi osiami strzeleckimi:
                            <li>Oś długodystansowa o długości 200 metrów wyposażona w tarczownice i gongi.</li>
                            <li>Oś długodystansowa o długości 100 metrów wyposażona w tarczownice i gongi.</li>
                            <li>Oś średniodystansowa o długości 100 metrów wyposażona w tarczownice, gongi i popery.</li>
                            <li>Dwie osie taktyczno-dynamiczne o długości 25 m wyposażone w tarczownice i różne cele reaktywne</li>
                        </ul>
                    </p>
                </div>
                <img src={longRange} alt="" className="part-image" />
                <img src={medRange} alt="" className="part-image" />
                <div className="part-content">
                <p>
                    Osie 25m przeznaczone są do strzelania z pistoletów i strzelb. 
                    Cele znajdujące się na ich wyposażeniu wytrzymują strzelanie amunicją o energii do 1000J.
                </p>
                </div>

                <div className="part-content">
                <p>
                    Na osiach dynamicznych możlwe jest używanie własnych celów takich jak gaśnice, kaski, płyty drewnopodobne, puszki, plastikowe butelki oraz wszystko inne co mieści się w bezpieczym strzelaniu z uwzględnieniem rykoszetowania.
                </p>
                <p>Warto przy tym pamiętać o spakowaniu worków lub skrzynek na śmieci, które ułatwią sprzątanie i zabranie ze sobą zniszczonych celów.</p>
                </div>
                
                <img src={shortRange} alt="" className="part-image" />
            </div>
           <p>
            Pssst. Pamiętacie, że to wszystko nieprawda i tej strzelnicy nie ma? Było o tym w sekcji &Prime;O nas&Prime;.
            </p> 
        </div>
        </>
    )
}

export default ShootingRange;