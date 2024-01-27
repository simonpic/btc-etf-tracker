import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBitcoinSign} from "@fortawesome/free-solid-svg-icons";

export default function Shares({etfs}) {
    return (
        <div>
            {etfs.map(etf => (
                <div className="flex justify-between text-xl">
                    <span className="mr-3">{etf.etf}</span>
                    <span>{etf.shares.toLocaleString()} <FontAwesomeIcon icon={faBitcoinSign}/></span>
                </div>
            ))
            }
        </div>

    )
}