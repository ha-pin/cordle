import { useEffect, useState } from 'react'
import './App.less'
import CharBox from './components/CharBox/CharBox'

import Keyboard from './components/keyboard/Keyboard'

const App = () => {
    const [type, setType] = useState<0 | 1 | 2>(1)
    const [included, setIncluded] = useState<Set<string>>(new Set())
    const [right, setRight] = useState<Set<string>>(new Set())
    const [except, setExcept] = useState<Set<string>>(new Set())

    const [answers, setAnswers] = useState<Array<Array<[string, number]>>>([])
    const [current, setCurrent] = useState<Array<[string, number]>>([])
    const [idx, setIdx] = useState<number>(0)
    const [attempt, setAttempt] = useState<number>(0)
    const [got, setGot] = useState<boolean>(false)

    const ans = "jaqse"

    useEffect(() => {
        // 根据答案生成初始化的值
        setCurrent(Array(ans.length).fill(["", -1]))
    }, [])

    const backspace = () => {
        if (idx > 0) {
            let tmp = [...current]
            tmp.splice(idx - 1, 1, ["", -1])
            setIdx(idx - 1)
            setCurrent(tmp)
        }
    }

    /**
     * 追加元素
     * @param c
     */
    const add = (c: string) => {
        if (idx < ans.length) {
            let tmp = [...current]
            tmp.splice(idx, 1, [c, -1])
            setIdx(idx + 1)
            setCurrent(tmp)
        }
    }

    const check = () => {
        const back = [...current].map((c, idx) => {
            if (c[0] === ans.charAt(idx)) {
                setRight(new Set([...right, c[0]]))
                return [c[0], 1]
            }

            if (Array.from(ans).includes(c[0])) {
                setIncluded(new Set([...included, c[0]]))
                return [c[0], 2]
            }

            setExcept(new Set([...except, c[0]]))
            return [c[0], 0]
        }) as [string, number][]

        if (back.every((c) => c[1] === 1)) {
            setGot(true)
        }

        return back
    }

    // TODO 提交答案次数限制
    const submit = () => {
        if (idx === ans.length && current.every(x => x[0] !== "")) {
            setAnswers([...answers, check()])
            setCurrent(Array(ans.length).fill(["", -1]))
            setIdx(0)
        }
    }

    return (
        <div className="App">
            <div className={!got ? "mb-[400px] mt-3" : "m-3"}>
                {answers.length > 0 && answers.map(item => <CharBox chars={item} />)}
                {!got && current.length !== 0 && <CharBox chars={current} />}
            </div>
            {
                got && <div>
                    <p>恭喜你猜对了今日份的词汇！</p>
                </div>
            }
            <Keyboard type={type} included={included} right={right} except={except} add={add} backspace={backspace} submit={submit} hidden={got} />
        </div>
    )
}

export default App
