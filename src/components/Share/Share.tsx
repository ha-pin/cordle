import { FC } from "react"
import CharBox from "../CharBox/CharBox"
import { exportForSharing } from "../utils/export"

interface IShareProps {
    ans: [string, string, number][][]
}

// 分享页面
const Share: FC<IShareProps> = ({ ans }) => {
    const res = exportForSharing(ans)

    const exportForShare = () => {
        // exportForSharing(ans)
    }


    return <div className="flex flex-col justify-start items-center">
        <p>恭喜你猜对了今日份的词汇！</p>
        {/* 分享 */}
        <ul className="text-center my-9">
            <li className="my-1">Cordle · 一</li>
            {
                res.map((item, idx) => <li key={idx}>{item}</li>)
            }
            <li className="my-1">ha-pin.github.io/cordle</li>
        </ul>
        <button className="bg-[#1d9c9c] text-white px-5 py-2 rounded" onClick={() => exportForShare()}>分享</button>
    </div>
}

export default Share
