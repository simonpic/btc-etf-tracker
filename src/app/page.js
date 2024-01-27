import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBitcoinSign} from "@fortawesome/free-solid-svg-icons";
import Shares from "@/app/Shares";

async function getCurrentHoldings() {
    const res = await fetch(process.env.API_BASE_URL + "dailyHoldings/currently")
    return res.json();
}

export default async function Home() {
    const currentHoldings = await getCurrentHoldings();
    const sum = currentHoldings.etfs.reduce((acc, cur) => acc + cur.shares, 0)

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-4xl mb-16">{sum.toLocaleString()} <FontAwesomeIcon icon={faBitcoinSign}/></h1>
            <Shares etfs={currentHoldings.etfs}/>
        </main>
    );
}
