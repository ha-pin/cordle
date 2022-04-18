import { FC, useState } from "react"
import CharBox from "../CharBox/CharBox"
import "./Introduce.less"

const example1 = [["j", ["j", "ج", ""], 1], ["a", ["a", "ا", ""], 1], ["q", ["q", "ق", ""], 1], ["e", ["e", "ى", ""], 2], ["s", ["s", "س", ""], 2]] as [string, [string, string, string], number][]

const example2 = [["j", ["j", "ج", ""], 1], ["a", ["a", "ا", ""], 1], ["h", ["h", "ح", ""], 0], ["s", ["s", "س", ""], 1], ["e", ["e", "ى", ""], 1]] as [string, [string, string, string], number][]

const example3 = [["j", ["j", "ج", ""], 1], ["a", ["a", "ا", ""], 1], ["q", ["q", "ق", ""], 1], ["s", ["s", "س", ""], 1], ["e", ["e", "ى", ""], 1]] as [string, [string, string, string], number][]

interface IIntroduceProps {
    type: 0 | 1 | 2
    setType: (type: 0 | 1 | 2) => void
}

const Introduce: FC<IIntroduceProps> = ({ type, setType }) => {
    const e1 = example1.map(([k, c, s]) => [k, c[type], s]) as [string, string, number][]
    const e2 = example2.map(([k, c, s]) => [k, c[type], s]) as [string, string, number][]
    const e3 = example3.map(([k, c, s]) => [k, c[type], s]) as [string, string, number][]

    const closeIntro = () => {
        document.getElementById("cordle-intro")?.classList.add("cordle-intro-hidden")
    }

    return <div id="cordle-intro" className="cordle-intro">
        <div onClick={() => closeIntro()} className="absolute right-5 top-5">X</div>
        <div className="flex flex-col justify-center items-center">
            <p className="cordle-intro-title">哈兜</p>
            <p className="cordle-intro-text">哈萨克语版 Wordle</p>
        </div>

        <div className="flex flex-col justify-center items-center">
            <p className="cordle-intro-subtitle">游戏规则</p>
            <p className="cordle-intro-text">随着单词的长度你有不同次数的尝试机会猜一个<b className="cordle-intro-point">哈语单词</b>。</p>
            <p className="cordle-intro-text">每次猜测后，格子中的颜色将会标识其与正确答案的区别。</p>
        </div>

        {/* 示例1 */}
        <div className="flex flex-col justify-center items-center">
            <CharBox chars={e1} type={type} />
            <p className="cordle-intro-text">上面的例子中，<span className="text-[#de7525]">橙色</span>代表当前字母在单词中，但不在正确的位置上。<span className="text-[#1d9c9c]">绿色</span>代表在正确的位置上。</p>
        </div>
        {/* 示例2 */}
        <div className="flex flex-col justify-center items-center">
            <CharBox chars={e2} type={type} />
            <p className="cordle-intro-text">上面的例子中，<span className="text-[#5d6673]">灰色</span>代表当前字母不在单词中。</p>
        </div>

        <div className="flex flex-col justify-center items-center">
            <CharBox chars={e3} type={type} />
            <p className="cordle-intro-text">卡片全部为<span className="text-[#1d9c9c]">绿色</span>则恭喜你猜对了！</p>
        </div>
        {/* 开始游戏 */}
        <button onClick={() => closeIntro()} className="bg-[#1d9c9c] text-white px-4 py-2 rounded m-5">开始游戏</button>

        <div className="flex flex-row shadow shadow-gray-300">
            <button onClick={() => setType(0)} className={`rounded-lg px-2 py-1 ${type === 0 ? "bg-[#1d9c9c] text-white" : "bg-white"}`}>哈拼</button>
            <button onClick={() => setType(1)} className={`rounded-lg px-2 py-1 ${type === 1 ? "bg-[#1d9c9c] text-white" : "bg-white"}`}>老文字</button>
            {/* TODO 支持西里尔字母 */}
            {/* <button onClick={() => setType(2)} className={`rounded-lg px-2 py-1 ${type === 2 ? "bg-[#1d9c9c] text-white" : "bg-white"}`}>西里尔字母</button> */}
        </div>

        {/* 配置项菜单 */}
        <p className="mt-10 font-mono">
            inspired by <a href="https://www.wordle.net/">Wordle</a>, <a href="https://handle.antfu.me" title="Handle">汉兜</a>, made by <a href="https://goer.icu" title="Herbert He">Herbert He</a>
        </p>
        <p><a href="https://github.com/ha-pin/cordle" title="Source Code">Source Code</a></p>
    </div>
}

export default Introduce
