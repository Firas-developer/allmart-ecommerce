function Order() {
    return (
        <div className="flex justify-center items-center mt-56">
            <div className="flex flex-col justify-center items-center gap-5 shadow-2xl shadow-black w-fit p-5">
                <h1 className="font-bold text-green-900 text-xl md:text-3xl">Thank You for Choosing All Mart </h1>
                <div className="flex flex-col items-center justify-center">
                    <i class="fa-solid fa-circle-check text-3xl"></i>
                    <p className="font-bold text-sm">Your Order has been Confirmed</p>
                </div>
            </div>
        </div>
    )
}
export default Order