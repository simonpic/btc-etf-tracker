import BitcoinValue from "@/app/components/BitcoinValue";
import ETF from "../model/ETF"

export default function Shares({etfs, btcPrice}) {

    return (
        <div className="flex flex-col gap-3">
            {etfs.map(etf => (
                <a href={ETF[etf.symbol].url} target="_blank"
                   className="flex justify-between hover:font-bold transition-all"
                   key={etf.symbol}>
                    <div className="flex flex-col mr-5">
                        <span className="text-xl">{etf.symbol}</span>
                        <span className="text-sm italic">{ETF[etf.symbol].issuer}</span>
                    </div>
                    <BitcoinValue size="medium" btc={etf.shares} btcPrice={btcPrice}/>
                </a>
            ))}
        </div>

    )
}