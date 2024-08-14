import { BiArrowFromBottom } from 'react-icons/bi'

export const ScrollToTopDefault = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="fixed bottom-5 right-5">
            <button type='button' onClick={scrollToTop} className="inline-flex items-center p-3 rounded-full text-white bg-gray-400 transition-opacity hover:bg-yellow-500">
                <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
            </button>
        </div>
    )
}
