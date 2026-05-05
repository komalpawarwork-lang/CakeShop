
import './style.css'

let Section2 = (props) => {
    let mydata = props.atr2;

    return (
        <>
            <div className='container-fluid bg-black pt-5'>
                {
                    mydata.map((x) => {
                        return (
                            <>
                                <section className=" text-center container">
                                    <div className="">

                                        <div className='pb-3 row justify-content-center'>
                                            <div className='col-xl-6 col-lg-7 col-md-9 pb-3'>
                                                <h2 className='sec2text1 pb-3'>{x.text1}</h2>
                                                <hr className='hrclass ' />
                                            </div>
                                        </div>

                                        <div className=' row align-items-center section-overlay'>

                                            <div className=" text-white pt-4 divsec2 offset-xl-1 col-xxl-5 col-xl-6 col-lg-6 col-md-9">
                                                <div className='about-caption about-caption1'>
                                                    <h2 className=' sec2text1 texth2 text-start'>{x.text1}</h2>
                                                    <p className='text-start textpara'>{x.text2}</p>
                                                    <p className='text-start textpara'>{x.text3}</p>
                                                </div>
                                            </div>

                                            <div className='col-xxl-5 col-xl-5 col-lg-6 col-md-8'>
                                                <div className='w-100 about-img about-img1'>
                                                    <img src={x.image} className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </section>
                            </>
                        )

                    })
                }
            </div>

        </>
    )
}
export default Section2;