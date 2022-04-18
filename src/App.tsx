import { useEffect, useState } from 'react'
import './App.less'
import CharBox from './components/CharBox/CharBox'
import Introduce from './components/Introduce/Introduce'

import Keyboard from './components/keyboard/Keyboard'
import Share from './components/Share/Share'
import { getAns, getCurr, getGOT, getIDX, getKeep, setAns, setCurr, setGOT, setIDX, setKeep } from './components/utils/localStorage'

const App = () => {
    const [type, setType] = useState<0 | 1 | 2>(0)
    const [included, setIncluded] = useState<Set<string>>(getKeep()[2])
    const [right, setRight] = useState<Set<string>>(getKeep()[1])
    const [except, setExcept] = useState<Set<string>>(getKeep()[0])

    const [answers, setAnswers] = useState<Array<Array<[string, string, number]>>>(getAns())
    const [current, setCurrent] = useState<Array<[string, string, number]>>(getCurr())
    const [idx, setIdx] = useState<number>(getIDX())
    // TODO
    const [attempt, setAttempt] = useState<number>(0)
    const [got, setGot] = useState<boolean>(getGOT())

    const ans = "jaqse"

    useEffect(() => {
        // 根据答案生成初始化的值
        if (
            getCurr() === null
        ) {
            setCurrent(Array(ans.length).fill(["", "", -1]))
        }

        return () => {
            // TODO 持久化数据的时机错误！退出的时候保存现有内容
            setAns(answers)
            setCurr(current)
            setIDX(idx)
            setKeep(except, right, included)
        }
    }, [])

    const backspace = () => {
        if (idx > 0) {
            let tmp = [...current]
            tmp.splice(idx - 1, 1, ["", "", -1])
            setIdx(idx - 1)
            setCurrent(tmp)
        }
    }

    /**
     * 追加元素
     * @param c
     */
    const add = (k: string, c: string) => {
        if (idx < ans.length) {
            let tmp = [...current]
            tmp.splice(idx, 1, [k, c, -1])
            setIdx(idx + 1)
            setCurrent(tmp)
        }
    }

    const check = () => {
        let r: string[] = []
        let i: string[] = []
        let e: string[] = []

        const back = [...current].map(([k, c], idx) => {
            if (k === ans.charAt(idx)) {
                r.push(k)
                return [k, c, 1]
            }

            if (Array.from(ans).includes(k)) {
                i.push(k)
                return [k, c, 2]
            }

            e.push(k)
            return [k, c, 0]
        }) as [string, string, number][]

        setRight(new Set([...right, ...r]))
        setIncluded(new Set([...included, ...i]))
        setExcept(new Set([...except, ...e]))

        if (back.every((c) => c[2] === 1)) {
            setGot(true)
            setGOT()
        }

        return back
    }

    // TODO 提交答案次数限制
    const submit = () => {
        if (idx === ans.length && current.every(x => x[0] !== "")) {
            setAnswers([...answers, check()])
            setCurrent(Array(ans.length).fill(["", "", -1]))
            setIdx(0)
        }
    }

    return (
        <div className="App">
            <Introduce type={type} setType={setType} />
            <div className={!got ? "pb-[400px] pt-3" : "p-3"}>
                {answers.length > 0 && answers.map(item => <CharBox chars={item} type={type} />)}
                {!got && current.length !== 0 && <CharBox chars={current} type={type} />}
            </div>
            {
                got && <Share ans={answers} />
            }
            <Keyboard type={type} included={included} right={right} except={except} add={add} backspace={backspace} submit={submit} hidden={got} />
        </div>
    )
}

export default App
