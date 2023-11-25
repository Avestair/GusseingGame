  import {React,useState,useEffect} from "react";
  import Navbar from "./Navbar";



  const Main = () => {
      const [isvisible, setIsvisible] = useState(true);
      const [isvisible1 , setIsvisible1] = useState(false);
      const [isvissble2 , setisvissble2] = useState(false);
      const [isvissible3 , setisvissble3] = useState(false);
      const [count, setCount] = useState(10);
      const [guess, setguess] = useState('');
      const [rngnum , setrngnum] = useState('');
      const [chances , setchances] = useState(3);
      const [score , setscore] = useState(0);
      const [failed , setfailed] = useState(0);
      const [isvisible4 , setisvisible4] = useState(false);
      const handleonkeydown = (event) => { 
       if (chances > 0) {
        
       
        if (event.key === 'Enter') {
          
        
        checknum();
        clear();
        }
      }
      else {
        setisvissble3(true);
      }
      }
      useEffect(() => {
          const interval = setInterval(() => {
              setCount(count => count - 1);
          }, 1000);
          
          return () => clearInterval(interval);
      }, []);

      useEffect(() => {
        setTimeout(() => {
          setIsvisible(false);
        }, 12000);
      }, []);


      useEffect(() => {
          setTimeout(() => {
              setIsvisible1(true);
              randomnum();
            }, 12000);
      }, []);

  function randomnum() {
    const rngnum = Math.floor((Math.random() * 10) + 1);
    setrngnum(rngnum);
    console.log(rngnum);
  }


  function checknum () {
  if (guess == rngnum) {
    setisvissble2(true);
    console.log("the answer is right.")
    setchances(3);
    setscore(score +1);
    console.log("failed :" + failed);
  }
  else {
    if (chances >= 1) {
      setchances(chances - 1);
      
    }
  }
  if (score >3) {
    window.alert("you are on a guessing spree!!");
  }
  if (failed >3) {
    hint();
  }
  if ( guess != rngnum) {
    setfailed(failed + 1);
  }
  }

  function clear () {
    setguess('');
  }

  function clear1() {
    setguess('');
    randomnum();
    setisvissble2(false);
    setchances(3);
    setfailed(0);
    setisvisible4(false);
    setisvissble3(false);
  }

  function loseclear() {
    setguess('');
    randomnum();
    setisvissble2(false);
    setchances(3);
    setisvisible4(false);
    setisvissble3(false);
  }
  
  function hint() {
      setisvisible4(true);
  }


      return(
        <div>
                    <Navbar chances={chances} score={score}  />
        <div className="grid pt-8 gap-4">
        <div>

          <h1 className="text-black font-bold font-PixelifySans text-3xl text-center">NUMBER GUESSING GAME</h1>
        </div>

        <div className="grid">
    {count > 0 ? 
      <h1 className="font-bold font-PixelifySans text-xl text-center ">{count}</h1>
      : <div id="box" className={`font-bold font-PixelifySans text-2xl text-center ${isvisible ? '' : 'hidden'}`}>
          <p>START!</p>
        </div>
  }
  </div>

        <div className={`grid transi ${isvisible1 ? '' : 'hidden'}`}>
          <label htmlFor="input" className="font-PixelifySans justify-self-center p-2 relative right-[68px]">try yourself!!</label>
          <div className="flex justify-center">
          <input id="input" type="number" className="border-2 rounded-xl w-[250px] h-[35px] p-2 border-gray-400 justify-self-center" placeholder="enter your guess..."
          value={guess}
          onChange={event => setguess(event.target.value) }
          onKeyDown={handleonkeydown}
          />
        </div>
        <p className={`font-bold font-PixelifySans text-center ${isvisible4 ? '' : 'hidden'}`}>the answer is: {rngnum}</p>
        </div>

        <div  className={`text-black font-bold text-2xl font-PixelifySans text-center gap-2 grid ${isvissble2 ? '' : 'hidden'}`}>
          <p>The answer was correct.Hooray!!</p>
          <div className="flex gap-2 justify-center">
          <p>Wanna play again?</p>
          <button onClick={clear1} className="border-2 border-green-600 bg-[#00df9a] text-lg">Yes</button>
          </div>
        </div>
        <div  className={`text-black font-bold text-2xl font-PixelifySans text-center gap-2 grid ${isvissible3 ? '' : 'hidden'}`}>
          <p>GAME OVER!</p>
          <div className="flex gap-2 justify-center">
          <p>Wanna reset the game?</p>
          <button onClick={loseclear} className="border-2 border-green-600 bg-[#00df9a] w-[40px] text-lg">Yes</button>
        </div>
        </div>
        </div>
        </div>
      )
  } 




  export default Main;