import { FC } from "react"
import CharBox from "../CharBox/CharBox"
import "./Introduce.less"

const example1 = [["j", 1], ["a", 1], ["q", 1], ["e", 2], ["s", 2]] as [string, number][]

const example2 = [["j", 1], ["a", 1], ["h", 0], ["s", 1], ["e", 1]] as [string, number][]

const example3 = [["j", 1], ["a", 1], ["q", 1], ["s", 1], ["e", 1]] as [string, number][]

interface IIntroduceProps {
    type: 0 | 1 | 2
    setType: (type: 0 | 1 | 2) => void
}

const Introduce: FC<IIntroduceProps> = ({ type, setType }) => {
    const closeIntro = () => {
        document.getElementById("cordle-intro")?.classList.add("cordle-intro-hidden")
    }

    return <div id="cordle-intro" className="cordle-intro">
        <div onClick={() => closeIntro()} className="absolute right-5 top-5">X</div>
        <div>
            <p className="cordle-intro-title">哈兜</p>
            <p className="cordle-intro-text">哈萨克语版 Wordle</p>
        </div>

        <div>
            <p className="cordle-intro-subtitle">游戏规则</p>
            <p className="cordle-intro-text">随着单词的长度你有不同次数的尝试机会猜一个 <b className="cordle-intro-point">哈语单词</b>。</p>
            <p className="cordle-intro-text">每次猜测后，格子中的颜色将会标识其与正确答案的区别。</p>
        </div>

        {/* 示例1 */}
        <div>
            <CharBox chars={example1} />
            <p className="cordle-intro-text">上面的例子中，<span className="text-[#de7525]">橙色</span>代表当前字母在单词中，但不在正确的位置上。<span className="text-[#1d9c9c]">绿色</span>代表在正确的位置上。</p>
        </div>
        {/* 示例2 */}
        <div>
            <CharBox chars={example2} />
            <p className="cordle-intro-text">上面的例子中，<span className="text-[#5d6673]">灰色</span>代表当前字母不在单词中。</p>
        </div>

        <div>
            <CharBox chars={example3} />
            <p className="cordle-intro-text">卡片全部为<span className="text-[#1d9c9c]">绿色</span>则恭喜你答对了！</p>
        </div>
        {/* 开始游戏 */}
        <button className="bg-[#1d9c9c] text-white px-4 py-2 rounded m-5">开始游戏</button>

        <div className="flex flex-row shadow shadow-gray-300">
            <button onClick={() => setType(0)} className={`rounded-lg px-2 py-1 ${type === 0 ? "bg-[#1d9c9c] text-white" : "bg-white"}`}>哈拼</button>
            <button onClick={() => setType(1)} className={`rounded-lg px-2 py-1 ${type === 1 ? "bg-[#1d9c9c] text-white" : "bg-white"}`}>老文字</button>
            <button onClick={() => setType(2)} className={`rounded-lg px-2 py-1 ${type === 2 ? "bg-[#1d9c9c] text-white" : "bg-white"}`}>西里尔字母</button>
        </div>

        {/* 配置项菜单 */}
        <p className="mt-10 font-mono">
            inspired by <a href="https://www.wordle.net/">Wordle</a>, <a href="https://handle.antfu.me" title="Handle">汉兜</a>, made by <a href="https://goer.icu" title="Herbert He">Herbert He</a>
        </p>
        <p><a href="https://github.com/ha-pin/cordle" title="Source Code">Source Code</a></p>
    </div>
}

export default Introduce
