import glock19 from '../images/glock 19.jpg';
import colt1911 from '../images/1911.jpg';
import akWithScope from '../images/AK with scope.jpg';
import gsg1911 from '../images/GSG 1911.jpg';
import rossiLeverAction from '../images/rossi Lever Action.jpg';
import saaRevolver from '../images/SAA revolver.jpg';
import sbrAR from '../images/SBR AR.avif';

const Guns = [
    {
        name: 'Glock 19',
        type: 'Pistolet samopowtarzalny',
        sights: 'Muszka i szczerbinka',
        caliber: '9x19 Para',
        pricePerRound: '2.50',
        image: glock19,
        range: '5-25'
    },
    {
        name: 'Colt 1911',
        type: 'Pistolet samopowtarzalny',
        sights: 'Muszka i szczerbinka',
        caliber: '.45 ACP',
        pricePerRound: '5',
        image: colt1911,
        range: '5-25'
    },
    {
        name: 'AK',
        type: 'Karabinek samopowtarzalny',
        sights: 'Luneta',
        caliber: '7.62x39',
        pricePerRound: '5',
        image: akWithScope,
        range: '25-100'
    },
    {
        name: 'GSG 1911',
        type: 'Pistolet samopowtarzalny',
        sights: 'Muszka i szczerbinka',
        caliber: '.22 LR',
        pricePerRound: '1',
        image: gsg1911,
        range: '5-25'
    },
    {
        name: 'Rossi Puma',
        type: 'Karabin powtarzalny',
        sights: 'Luneta',
        caliber: '40/70 Gov.',
        pricePerRound: '9',
        image: rossiLeverAction,
        range: '25-100'
    },
    {
        name: 'Colt Single Action Army',
        type: '',
        sights: 'Muszka i szczerbinka',
        caliber: '.357 Magnum',
        pricePerRound: '5',
        image: saaRevolver,
        range: '5-25'
    },
    {
        name: 'AR - 15 Anderson',
        type: 'Karabinek samopowtarzalny',
        sights: 'Kolimator',
        caliber: '.223 Rem',
        pricePerRound: '5',
        image: sbrAR,
        range: '25-100'
    }
]

export default Guns;

