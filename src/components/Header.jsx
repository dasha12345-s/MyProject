import myImg from '../img/opportunity.png';

const infoDescription = ['Self-quantification is the art of tracking yourself, with an aim to improve self-awareness through numbers.', 'Self-tracking giving you a clearer vision of yourself, and therefore also equip you with the tools you need to make changes.', 'Self-tracking can help us recall our behavior with greater accuracy and see ourselves more clearly'];

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

export default function Header(){
  const description = infoDescription[genRandomInt(2)]; 

  return (
    <header>
       <div className='image'>
       <img src={myImg} alt="Stylized" />
        </div> 
        <h1> Art of tracking yourself</h1>
        <p>
          {description}
        </p>
      </header>
  );
}
