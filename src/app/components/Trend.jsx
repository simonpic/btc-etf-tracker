import {faArrowDown, faArrowUp, faBitcoinSign, faEquals} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Trend({history}) {
    const start = history[0]
    const last = history[history.length - 1];
    const variation = last - start;
    const percentage = Math.round((100 / start * variation + Number.EPSILON) * 100) / 100;

    let icon;

    if (variation > 0) {
        icon = <FontAwesomeIcon className="place-self-center text-2xl text-green-600" icon={faArrowUp}/>
    } else if (variation < 0) {
        icon = <FontAwesomeIcon className="place-self-center text-2xl text-red-600" icon={faArrowDown}/>
    } else {
        icon = <FontAwesomeIcon className="place-self-center text-2xl" icon={faEquals}/>
    }

    return <div className="flex ml-5 text-xs gap-3 transition-opacity">
        {icon}
        <div className="flex flex-col">
            <span className="text-xl mr-3">
                {Math.trunc(variation).toLocaleString()}
                <FontAwesomeIcon className="ml-1" icon={faBitcoinSign}/>
            </span>

            <span >{percentage}%</span>
        </div>
    </div>
}