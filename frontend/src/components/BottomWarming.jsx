import { Link } from "react-router-dom";

const BottomWarming = ( {label, to, buttonText, home, buttonTextHome}) => {           
    return (
        <div className="py-2 text-sm flex justify-center flex-col items-center">
            <div className="flex flex-row">
            <div>
                {label}
            </div>
            <Link className="pointer underline pl-1 cursor-pointer text-blue-500" to={to}>
            {buttonText}
            </Link>
            </div>
            <div className="flex flex-row">
            <div>
                Return to Home Page.
            </div>
            <Link className="pointer underline pl-1 cursor-pointer text-blue-500" to={home}>
            {buttonTextHome}
            </Link>
            </div>
        </div>
    )
}

export default BottomWarming;