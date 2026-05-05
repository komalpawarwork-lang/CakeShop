
import './style.css'


let Section1 = (props) => {

    const mydata = props.atr1;

    return (
        <>
            <header className="herosec">
                {/* NAVBAR */}
                <div className="">
                    {/* TOP HEADER */}
                    <div className='headertop'>
                        <div className="container-fluid">
                            <div className="row">
                                <div className='col-xl-12'>
                                    <div className="d-flex justify-content-between flex-wrap align-items-center p-3">
                                        <div className="header-left d-none d-sm-block">
                                            <ul className="header-social p-0">
                                                <li><a href=""><i class="bi bi-facebook text-white"></i></a></li>
                                                <li><a href=""><i class="bi bi-instagram  text-white"></i></a></li>
                                                <li><a href=""><i class="bi bi-twitter text-white"></i></a></li>
                                            </ul>
                                        </div>

                                        <div className='logo'>
                                            <a href=""><img src="/Image/logo (3).png" alt="" className='w-100 ' /></a>
                                        </div>

                                        <div className='header-info-right d-none d-lg-block'>
                                            <a href="" className="btn_2">Call Us: +10 783 346 4378</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM HEADER */}
                    <nav className="navbar navbar-expand-lg fw-bold fs-5 ">

                        <button type="button" className="navbar-toggler text-end w-100 text-white" data-bs-toggle="collapse"
                            data-bs-target="#navid">MENU<i className="bi bi-list text-white "></i></button>

                        <div className="collapse navbar-collapse ms-auto text-end" id="navid">

                            <ul className="navbar-nav navbar nav text-center ms-auto w-100 d-flex justify-content-center " >

                                <li className=" nav-item ">
                                    <a href="#" className="nav-link text-white ms-1  ancky">Home</a>
                                </li>

                                <li className=" nav-item ">
                                    <a href="#" className="nav-link text-white  ms-1 ancky ">Cake</a>
                                </li>


                                <li className=" nav-item ">
                                    <a href="#" className="nav-link text-white  ms-1 ancky ">About</a>
                                </li>


                                <li className=" nav-item">
                                    <a href="#" className="nav-link text-white  ms-1  ancky ">Blog</a>
                                </li>


                                <li className=" nav-item">
                                    <a href="#" className="nav-link  text-white ms-1 ancky">Contact</a>
                                </li>

                            </ul>
                        </div>
                    </nav>

                </div>

                {/* HERO CONTENT */}
                <div className='div1main d-flex justify-content-start align-items-center '>
                    <div className="ps-5">
                        <div className="">
                            <h1 className="textmain mb-5">Healthy Made <br />Delicious Cake</h1>
                            <a href="" className=' btnorder'>Order Now</a>
                        </div>

                    </div>

                </div>

            </header>

        </>
    )

}
export default Section1;