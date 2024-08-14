import Header from "../../section/HomePage/Header";
import ArtTabPage from "./ArtTabs/ArtTabPage";
export default function Art() {
    return (
        <div id="art">
            <Header />
            <div className="relative flex flex-col">
                <div className="p-16 space-y-1 lg:pl-40 bg-slate-100">
                    <div className="text-xl font-poppin  tracking-normal text-gray-700">
                        -----------------------------
                    </div>
                    <div className="text-5xl font-poppin font-bold tracking-normal text-gray-700">
                        ART & MUSIC
                    </div>
                    <div className="text-xl font-poppin tracking-normal text-gray-700">
                        -----------------------------
                    </div>
                </div>
                <ArtTabPage />
            </div>
        </div>
    )
}