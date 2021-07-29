import { useState } from 'react';
import './App.css';
let timer = null;
let totalTime = 3000
/**
 * 通过定时器快速递增变量progress实现进度增加，变量每次改变都会驱动视图重新计算渲染
 * 肉眼可见的卡顿
 */
function App() {
  const [progress,setProgress] = useState(0)
  const [isPlay,setIsPlay] = useState(false)
 
  // setProgress的递增逻辑
  const handleProgress = pre => {
	if(pre<100) return pre+1
	else {
		alert('播放结束')
		return 0;
	}
  }
  
  const handleVideo = ()=>{
	  setIsPlay(!isPlay)
	  isPlay
	  ?clearInterval(timer)
	  :timer = setInterval(() => setProgress(handleProgress), totalTime/100);
  }

  const replay = ()=>{
	setIsPlay(true)
	if(timer) clearInterval(timer)
	setProgress(0)
	timer = setInterval(() =>setProgress(handleProgress), totalTime / 100);
  }
  return (
    <div className="App">
		<button onClick={handleVideo}>{isPlay?"暂停":"播放"}</button>
		<button onClick={replay}>重播</button>
		<div className="container">
			<div className="progress" style={{width:`${progress}%`}}></div>
		</div>
	</div>
  );
}

export default App;
