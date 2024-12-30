import glock19 from '../images/glock 19.jpg';
import colt1911 from '../images/1911.jpg';
import akWithScope from '../images/AK with scope.jpg';
import gsg1911 from '../images/GSG 1911.jpg';
import rossiLeverAction from '../images/rossi Lever Action.jpg';
import saaRevolver from '../images/SAA revolver.jpg';
import sbrAR from '../images/SBR AR.avif';
import benelliM4 from '../images/benelli m4.jpg';
import benelliSport from '../images/Benelli sport ll.jpg';
import carlGustaf from '../images/Carl Gustaf.jpg';
import desertEagle from '../images/Desert eagle.jpg';
import greaseGun from '../images/Grease gun.jpg';
import ingram from '../images/ingram.jpg';
import mossberg500 from '../images/mossberg 500.jpg';
import mp40 from '../images/mp 40.jpg';
import nagant from '../images/Nagant.jpg';
import remington870 from '../images/Remington 870.jpg';
import sw686 from '../images/S&W 686.jpg';
import silverPigeon from '../images/Silver pigeon.jpg';
import tommy from '../images/Tommy.jpg';
import uzi from '../images/uzi.jpg';

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
        name: 'KBK AKM',
        type: 'Karabinek samopowtarzalny',
        sights: 'Luneta',
        caliber: '7.62x39',
        pricePerRound: '5',
        image: akWithScope,
        range: '25-200'
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
        type: 'Karabin powtarzalny (lever-action)',
        sights: 'Luneta',
        caliber: '40/70 Gov.',
        pricePerRound: '9',
        image: rossiLeverAction,
        range: '25-200'
    },
    {
        name: 'Colt Single Action Army',
        type: 'Rewolwer SA',
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
        range: '25-200'
    },
    {
        name: 'Benelli m4',
        type: 'Strzelba samopowtarzalna',
        sights: 'Przeziernik',
        caliber: '12/76',
        pricePerRound: '3-8',
        image: benelliM4,
        range: '5-50'
    },
    {
        name: 'Benelli Sport II',
        type: 'Strzelba samopowtarzalna',
        sights: 'Szyna z muszką',
        caliber: '',
        pricePerRound: '3-8',
        image: benelliSport,
        range: '5-50'
    },    
    {
        name: 'Carl Gustaf',
        type: 'Karabin powtarzalny (bolt-action)',
        sights: 'Luneta',
        caliber: '30-06 Springfield',
        pricePerRound: '9',
        image: carlGustaf,
        range: '25-200'
    },    
    {
        name: 'Dwa Desert Eagle',
        type: 'Pistolety samopowtarzalne',
        sights: 'Muszka i szczerbinka',
        caliber: '.50 Action Express',
        pricePerRound: '32',
        image: desertEagle,
        range: '5-25'
    },
    {
        name: 'Grease Gun',
        type: 'Pistolet Maszynowy (samopowtarzalny)',
        sights: 'Przeziernik',
        caliber: '.45 ACP',
        pricePerRound: '5',
        image: greaseGun,
        range: '25-50'
    },    
    {
        name: 'Ingram MAC 10',
        type: 'Pistolet Maszynowy (samopowtarzalny)',
        sights: 'Przeziernik',
        caliber: '.380 ACP',
        pricePerRound: '4',
        image: ingram,
        range: '5-25'
    },    
    {
        name: 'Mossberg 500',
        type: 'Strzelba powtarzalna (pump action)',
        sights: 'Luneta',
        caliber: '12/70',
        pricePerRound: '3-8',
        image: mossberg500,
        range: '5-50'
    },    
    {
        name: 'MP 40',
        type: 'Pistolet Maszynowy (samopowtarzalny)',
        sights: 'Muszka i szczerbinka',
        caliber: '9x19 Para',
        pricePerRound: '2.50',
        image: mp40,
        range: '25-50'
    },    
    {
        name: 'Nagant',
        type: 'Rewolwer SA/DA (oficerski)',
        sights: 'Muszka i szczerbinka',
        caliber: '7.62x38R',
        pricePerRound: '13',
        image: nagant,
        range: '5-25'
    },    
    {
        name: 'Remington 870',
        type: 'Strzelba powtarzalna',
        sights: 'Muszka',
        caliber: '12/76',
        pricePerRound: '3-8',
        image: remington870,
        range: '5-50'
    },    
    {
        name: 'Smith & Wesson 686',
        type: 'Rewolwer SA/DA',
        sights: 'Muszka i szczerbinka',
        caliber: '.357 Magnum',
        pricePerRound: '5',
        image: sw686,
        range: '5-25'
    },    
    {
        name: 'Beretta Silver Pigeon',
        type: 'Strzelba łamana (bock)',
        sights: 'Szyna z muszką',
        caliber: '12/70',
        pricePerRound: '3-8',
        image: silverPigeon,
        range: '5-50'
    },    
    {
        name: 'Tommy Gun',
        type: 'Pistolet Maszynowy (samopowtarzalny)',
        sights: 'Muszka i szczerbinka',
        caliber: '.45 ACP',
        pricePerRound: '5',
        image: tommy,
        range: '25-50'
    },    
    {
        name: 'Uzi',
        type: 'Pistolet Maszynowy (samopowtarzalny)',
        sights: 'Przeziernik',
        caliber: '9x19 Para',
        pricePerRound: '2.50',
        image: uzi,
        range: '25-50'
    }, 

]

export default Guns;

