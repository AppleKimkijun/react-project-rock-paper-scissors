import {useState} from "react"
import './App.css';
import Box from "./component/Box"

//1. 박스 2개 (타이틀,사진,결과값)
//2. 가위 바위 보 버튼이 있다.
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
//5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다.
//6. 승패결과에 따라 텓리 색이 바뀐다 (이기면-초록, 지면-빨강, 비기면-검은색)


const choice = {
  rock:{
    name:"Rock",
    img:"img/rock.jpg",
  },
  scissors:{
    name:"Scissors",
    img: "img/scissors.jpg",
  },
  paper:{
    name:"Paper",
    img:"img/paper.jpg",
  },
  
};

const question = {
  questionImg:{
    name:"?",
    img:"img/question.jpg",
  }
}



function App() {
  const [userSelect,setUserSelect] = useState(question.questionImg);
  const [computerSelect,setComputerSelect] = useState(question.questionImg);
  const [result,setResult] = useState("");

  

  const play=(userChoice)=>{
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice],computerChoice));
    
  };

  const judgement = (user,computer) =>{
    // console.log("user", user, "computer", computer);

    //user == computer tie
    // user == rock, computer == "scissors" user win
    //user == "rock", computer == paper user loose
    //user == scissors, computer == "paper" user wind
    //user == scissors, computer == rock user loose
    //user == paper, computer == rock user win
    //user == paper, computer == scissors user loose

    // if(user.name == computer.name){
    //   return "tie"
    // }else if(user.name == "Rock"){
    //   if(computer == "Scissors"){
    //     return "win"
    //   }else {
    //     return "lose"
    //   }
    // }

    //삼항연산자
    if(user.name == computer.name){
      return "tie"
    }else if(user.name == "Rock")return computer.name == "Scissors"?"win":"lose"
    else if(user.name == "Scissors")return computer.name == "Paper"?"win":"lose"
    else if(user.name == "Paper")return computer.name == "Rock"?"win":"lose"
  }


  const randomChoice=()=>{

    let itemArray = Object.keys(choice);//객체의 키값만 뽑아서 어레이로 만들어주는 함수
    console.log("item array", itemArray);

    let randomItem = Math.floor(Math.random()* itemArray.length);

    let final = itemArray[randomItem]
    return choice[final];
  }



  return (
   <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className='bt'>
        <button onClick={() => play("scissors")}><img src="img/scissors-icon.png"/></button>
        <button onClick={() => play("rock")}><img src="img/rock-icon.png"/></button>
        <button onClick={() => play("paper")}><img src="img/paper-icon.png"/></button>
      </div>
   </div>
  );
}

export default App;
