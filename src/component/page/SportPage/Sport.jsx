import Header from '../../section/HomePage/Header'
import TabPage from '../../utils/tab/TabPage'

export default function Sport() {
  return (
    <div id="sport">
        <Header />
        <div className="relative flex flex-col">
                <div className="p-16 space-y-1 lg:pl-40 bg-slate-100">
                    <div className="text-xl font-poppin  tracking-normal text-gray-700">
                        ------------------
                    </div>
                    <div className="text-5xl font-poppin font-bold tracking-normal text-gray-700">   
                        SPORTS
                    </div>
                    <div className="text-xl font-poppin tracking-normal text-gray-700">
                        ------------------
                    </div>
                </div>
            </div>
        <TabPage />
    </div>
  )
}
