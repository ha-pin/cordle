import { useEffect, useState } from 'react'
import './App.less'

import CharBox from './components/CharBox/CharBox'
import Icon from './components/Icon/Icon'
import Introduce from './components/Introduce/Introduce'
import Keyboard from './components/keyboard/Keyboard'
import Share from './components/Share/Share'

import { getAns, getCurr, getGOT, getIDX, getKeep, preDetectClear, setAns, setCurr, setGOT, setIDX, setKeep } from './components/utils/localStorage'

const App = () => {
    preDetectClear()

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

    // TODO 网络请求
    const ans = "jaqse"

    useEffect(() => {
        // 根据答案生成初始化的值
        if (
            getCurr().length === 0
        ) {
            setCurrent(Array(ans.length).fill(["", "", -1]))
            setCurr(Array(ans.length).fill(["", "", -1]))
        }
    }, [])

    const backspace = () => {
        if (idx > 0) {
            let tmp = [...current]
            tmp.splice(idx - 1, 1, ["", "", -1])
            setIdx(idx - 1)
            setIDX(idx - 1)
            setCurrent(tmp)
            setCurr(tmp)
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
            setIDX(idx + 1)
            setCurrent(tmp)
            setCurr(tmp)
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
        setKeep(new Set([...except, ...e]), new Set([...included, ...i]), new Set([...right, ...r]))

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
            setAns([...answers, check()])
            setCurrent(Array(ans.length).fill(["", "", -1]))
            setCurr(Array(ans.length).fill(["", "", -1]))
            setIdx(0)
            setIDX(0)
        }
    }

    return (
        <div className="App">
            <Introduce type={type} setType={setType} />
            {
                !got && <div className="flex flex-row items-center w-full px-5 py-1 shadow shadow-gray-300">
                    <button title="show" type='button' onClick={() => {
                        document.getElementById("cordle-intro")?.classList.remove("cordle-intro-hidden")
                    }}>
                        <Icon icon="charm:info" fontSize={30} />
                    </button>
                </div>
            }
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
