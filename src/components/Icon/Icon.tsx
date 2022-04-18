import { FC } from "react"

interface IIconProps {
    icon: string
    fontSize?: number
}

const Icon: FC<IIconProps> = ({ icon, fontSize = 20 }) => <span style={{ fontSize: fontSize }}>
    <span className="iconify" data-icon={icon}></span>
</span>

export default Icon
