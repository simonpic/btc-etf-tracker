import BitcoinValue from "@/app/components/BitcoinValue";

export default function Shares({etfs, btcPrice}) {
    return (
        <div className="flex flex-col gap-3">
            {etfs.map(etf => (
                <div className="flex justify-center gap-5 lg:justify-between" key={etf.symbol}>
                    <div className="flex flex-col">
                        <span className="text-xl">{etf.symbol}</span>
                        <span className="text-xs">({etf.day.split("T")[0]})</span>
                    </div>
                    <BitcoinValue size="medium" btc={etf.shares} btcPrice={btcPrice}/>
                </div>
            ))}
        </div>

    )
}