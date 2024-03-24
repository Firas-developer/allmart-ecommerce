import logo from "../Assets/images/logo1.png"
function Footer() {
    return (
        <div className="flex flex-col items-center justify-center mt-10 p-5" style={{ backgroundColor: "#A5F1E9" }}>
            <img src={logo} className="md:w-40 w-36"></img>
            <div className="flex gap-20 mt-5 text-sm text-green-700 items-center">
                <div>
                    <p>Carrers</p>
                    <p>Our Mart</p>
                    <p>Accessories</p>
                    <p>Appliances</p>
                </div>
                <div>
                    <p>Customer Care</p>
                    <p>Ecommerce site</p>
                    <p>All Mart India</p>
                    <p>Products India</p>
                </div>
            </div>
            <div className="mt-10 text-2xl flex gap-10">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-pinterest"></i>
            </div>
            <div className="mt-10 pt-3 md:text-sm text-xs w-full flex flex-col items-center" style={{borderTop:"solid 1px gray"}}>
                <div className="flex gap-1">
                    <p>Website |</p>
                    <p>Privacy |</p>
                    <p>Accessability |</p>
                    <p>Customer |</p>
                    <p>Supplier</p>
                </div>
                <div className="flex gap-1 mt-3">
                    <p>Product Selling  |</p>
                    <p>Do not sell my Information </p>
                </div>
                <div className="mt-3">
                    <p>&copy;2024 Chennai, All Mart Inc, Tamil Nadu, India</p>
                </div>
            </div>
        </div>
    )
}
export default Footer