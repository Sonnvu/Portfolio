export default function Widget({children}) {
    return (
        <div
            className=" basis-1/5 m-6 p-6 flex justify-center items-center
                        bg-amber-100
                        rounded-2xl border-4 border-orange-200
                        h-5/6
                      "
        >
            {children}
        </div>
    )
}