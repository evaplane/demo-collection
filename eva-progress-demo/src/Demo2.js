import {useState} from 'react'
import "./Demo2.css"
let totalTime = 3000
/**
 * 设置两个`@keyframes`是为了在使进度条重新播放时可以做一个切换，即点击重播时，直接切换到另一个动画，就可以实现
 * 进度条从0开始递增
 * 
 * 两个类名的样式，分别用于控制动画的播放和暂停
 * 
 */
function Demo2 (props) {
	const [isPlay,setIsPlay] = useState(false)
	const [count,setCount] = useState(0)
	const [type,setType] = useState(0) // 使用哪个动画 0 @keyframe play; 1 @keyframe replay
	const handleVideo = () => setIsPlay(!isPlay)
	const replay = ()=>{
		setIsPlay(true)
		setType(type?0:1)
	}
	const end = ()=>{
		setCount(count+1)
		replay()
	}

	return (
		<div id='root'>
			<button onClick={handleVideo}>{isPlay?'暂停':'播放'}</button>
			<button onClick={replay}>重播</button>
			<span>{`播放次数为 ${count}`}</span>
			<div className="container">
				<div className={`progress ${isPlay?'play':'pause'}`} 
				style={{ 
					animationDuration:`${totalTime}ms`,
					animationName:`${type?'replay':'play'}`
				}}
				onAnimationEnd={end}
				></div>
			</div>
		</div>
	)
}
export default Demo2