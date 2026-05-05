import "./style.css"

const Section3 = (props) => {

    const mydata = props.atr3;

    return (
        <>
            <section className="bg-black sec3main pt-5 pb-5">
                <div className='d-md-flex'>
                    {
                        mydata.map((x) => {
                            return (
                                <>
                                    <section className="">
                                        <div className="container">

                                            <div className=''>
                                                <div className='sec3img p-3'>
                                                    <img src={x.image1} className="img-fluid "/>
                                                </div>
                                                
                                            </div>

                                            <div className="p-3">
                                                <h3><a href="" className=" sec3text1">{x.text1}</a></h3>
                                                <div>
                                                    <p className=" sec3price"> {x.price}</p>
                                                </div>
                                            </div>

                                        </div>
                                    </section>
                                </>
                            )

                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Section3;