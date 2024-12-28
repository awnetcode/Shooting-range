import glock19 from '../images/glock 19.jpg';
import colt1911 from '../images/1911.jpg';
import akWithScope from '../images/AK with scope.jpg';
import gsg1911 from '../images/GSG1911.avif';
import handgunsTable from '../images/handguns table.jpg';
import rossiLeverAction from '../images/rossi Lever Action.jpg';
import saaRevolver from '../images/SAA revolver.jpg';
import sbrAR from '../images/SBR AR.avif';

const Guns = [
    {
        name: 'Glock 19',
        caliber: '9x19 Para',
        pricePerRound: '2.50',
        image: glock19
    },
    {
        name: 'Colt 1911',
        caliber: '.45 ACP',
        pricePerRound: '5',
        image: colt1911
    },
    {
        name: 'AK',
        caliber: '7.62x39',
        pricePerRound: '5',
        image: akWithScope
    },
    {
        name: 'GSG 1911',
        caliber: '.22 LR',
        pricePerRound: '1',
        image: gsg1911
    },
    {
        name: 'Rossi Puma',
        caliber: '40/70 Gov.',
        pricePerRound: '9',
        image: rossiLeverAction
    },
    {
        name: 'Colt Single Action Army',
        caliber: '.357 Magnum',
        pricePerRound: '5',
        image: saaRevolver
    },
    {
        name: 'AR - 15 Anderson',
        caliber: '.223 Rem',
        pricePerRound: '5',
        image: sbrAR
    },
    {
        name: 'I dużo więcej',
        caliber: 'Wiele różnych',
        pricePerRound: '1 - 10',
        image: handgunsTable
    },
]

export default Guns;

