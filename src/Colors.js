export const colors = [
  {
    backgroundColor: 'rgb(94, 113, 213)',
    background: 'linear-gradient(to top, #a3bded 0%, #6991c7 100%)',
    color: 'white',
    boxShadow: '0px -10px 5px 3px rgba(0,0,0,0.75)', 
    border: '15px rgba(154,183,231,0.3)',
    btnBg: 'rgba(154,183,231,0.3)'
  },
  {
    backgroundColor: '#994ba0',
    background: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
    color: 'white',
    boxShadow: '-10px 7px 5px 3px rgba(0,0,0,0.75)', 
    border: '15px rgba(154,183,231,0.3)',
    btnBg: 'rgba(154,183,231,0.3)'
  },
  {
    backgroundColor: '#5c74c5',
    background: 'linear-gradient(to top, #a7a6cb 0%, #8989ba 52%, #8989ba 100%)',
    color: 'white',
    boxShadow: '0px -10px 5px 3px rgba(0,0,0,0.75)', 
    border: '15px rgba(154,183,231,0.3)',
    btnBg: 'rgba(154,183,231,0.3)'
  },
  {
    backgroundColor: 'rgb(33, 168, 247)',
    background: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
    color: 'white',
    boxShadow: '-5px -10px 5px 3px rgba(0,0,0,0.75)', 
    border: '15px rgba(154,183,231,0.3)',
    btnBg: 'rgba(154,183,231,0.3)'    
  },
  {
    backgroundColor: 'rgb(64, 157, 249)',
    background: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
    color: 'white',
    boxShadow: '5px 0px 5px 3px rgba(0,0,0,0.75)', 
    border: '15px rgba(154,183,231,0.3)',
    btnBg: 'rgba(120, 151, 202, 0.8)'
  },
  {
    backgroundColor: 'rgb(39, 231, 234)',
    background: 'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',
    color: 'white',
    boxShadow: '-10px -7px 5px 3px rgba(0,0,0,0.75)', 
    border: '15px rgba(154,183,231,0.3)',
    btnBg: 'rgba(154,183,231,0.3)'
  },
  {
    backgroundColor: '#704c70',
    background: 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
    color: 'white',
    boxShadow: '0px -10px 5px 3px rgba(0,0,0,0.75)', 
    border: '15px rgba(154,183,231,0.3)',
    btnBg: 'rgba(154,183,231,0.3)'
  },
  {
    backgroundColor: '#977ce0',
    background: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
    color: 'white',
    boxShadow: '-10px 10px 5px 3px rgba(0,0,0,0.75)', 
    border: '15px rgba(154,183,231,0.3)',
    btnBg: 'rgba(93, 144, 228, 0.7)'
  },
  {
    backgroundColor: '#8BC6EC',
    background: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
    color: 'white',
    boxShadow: '0px -3px 5px 5px rgba(0,0,0,0.75)', 
    border: '15px rgba(154,183,231,0.3)',
    btnBg: 'rgb(120, 151, 202)'
  },
  {
    backgroundColor: 'rgb(87, 228, 195)',
    background: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
    color: 'white',
    boxShadow: '-10px 0px 5px 3px rgba(0,0,0,0.75)', 
    border: '15px rgba(154,183,231,0.3)',
    btnBg: 'rgba(154,183,231,0.6)'
  },
  {
    backgroundColor: 'rgb(234, 95, 15)',
    background: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
    color: 'white',
    boxShadow: '5px 0px 5px 3px rgba(0,0,0,0.75)', 
    border: '15px rgba(154,183,231,0.3)',
    btnBg: 'rgba(154,183,231,0.3)'
  },
  {
    backgroundColor: '#3a9ca3',
    background: 'linear-gradient(to right, #a1c4fd 0%, #c2e9fb 100%)',
    color: 'white',
    boxShadow: '10px 0px 5px 3px rgba(0,0,0,0.75)', 
    border: '15px rgba(154,183,231,0.3)',
    btnBg: 'rgba(154,183,231,0.3)'
  },
  {
    backgroundColor: '#9176e0',
    background: 'linear-gradient(to left, #ff8177 0%,#ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)',
    color: 'white',
    boxShadow: '-10px -7px 5px 3px rgba(0,0,0,0.75)', 
    border: '15px rgba(154,183,231,0.3)',
    btnBg: 'rgba(154,183,231,0.9)'
  },
  {
    backgroundColor: '#58a799',
    background: 'linear-gradient(to right, #84fab0 0%, #8fd3f4 100%)',
    color: 'white',
    boxShadow: '7px -7px 5px 3px rgba(0,0,0,0.75)', 
    border: '15px rgba(154,183,231,0.3)',
    btnBg: 'rgba(154,183,231,0.3)'
  },
  {
    backgroundColor: '#6c84b9',
    background: 'linear-gradient(to right, #e0c3fc 0%, #8ec5fc 100%)',
    color: 'white',
    boxShadow: '7px -7px 5px 3px rgba(0,0,0,0.75)', 
    border: '15px rgba(154,183,231,0.3)',
    btnBg: 'rgba(154,183,231,0.3)'
  }
];

export function randomBackgroundColor(){
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};