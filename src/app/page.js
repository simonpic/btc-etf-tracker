import Shares from "@/app/Shares";
import BitcoinValue from "@/app/components/BitcoinValue";
import SharesChart from "@/app/components/SharesChart";
import {faBitcoinSign, faDollarSign} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

async function getCurrentHoldings() {
    const res = await fetch(process.env.BTC_ETF_TRACKER_API_URL + "/holdings/current", {cache: "no-cache"})
    return res.json()
}

async function getDailyHistory() {
    const res = await fetch(process.env.BTC_ETF_TRACKER_API_URL + "/holdings/daily", {cache: "no-cache"})
    const data = await res.json();
    console.log(data);
    return data
}

async function getBitcoinPrice() {
    const res = await fetch(process.env.BTC_ETF_TRACKER_API_URL + "/prices/btc", {cache: "no-cache"})
    const data = await res.json()
    return data.bitcoin.usd;
}


export default async function Home() {
    const currentHoldings = await getCurrentHoldings();

    const sum = currentHoldings.etfs.reduce((acc, cur) => acc + cur.shares, 0)
    const orderedEtf = currentHoldings.etfs.sort((etfA, etfB) => etfB.shares - etfA.shares);

    const dailyHistory = await getDailyHistory();

    const btcPrice = await getBitcoinPrice();

    return (
        <main className="flex min-h-screen flex-col items-center p-20">
            <div className="absolute text-2xl top-0 right-0 p-1">
                <span>
                    1<FontAwesomeIcon icon={faBitcoinSign}/>
                    {" = " + btcPrice.toLocaleString()}
                    <FontAwesomeIcon icon={faDollarSign}/>
                </span>
            </div>

            <BitcoinValue className="mb-24" size="large" btc={sum} btcPrice={btcPrice}/>
            <div className="flex flex-col lg:flex-row lg:gap-20">
                <SharesChart data={dailyHistory}/>
                <Shares etfs={orderedEtf} btcPrice={btcPrice}/>
            </div>
        </main>
    );
}
