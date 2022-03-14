import React from 'react';
import './Campinformation.css';
import bannarImg from '../Images/banner.png'

const Campinformation = () => {

    const handleContextual = (e) => {
        const Contextual = e.target.value;
        console.log(Contextual);
    }
    const handleDisplay = (e) => {
        const Display = e.target.value;
        console.log(Display);
    }

    const handleSubID1 = (e) => {
        const subID1 = e.target.value;
        console.log(subID1);
    }
    const handleSubID2 = (e) => {
        const subID2 = e.target.value;
        console.log(subID2);
    }
    const handleSubID3 = (e) => {
        const subID3 = e.target.value;
        console.log(subID3);
    }
    const handleSubID4 = (e) => {
        const subID4 = e.target.value;
        console.log(subID4);
    }
    const handleSubID5 = (e) => {
        const subID5 = e.target.value;
        console.log(subID5);
    }
    const handleSubID6 = (e) => {
        const subID6 = e.target.value;
        console.log(subID6);
    }

    const trafficTypes = [
        { name: 'Contextual' },
        { name: 'Display' },
        { name: 'Search' },
        { name: 'Social' },
        { name: 'Native' },
        { name: 'Mobile Ads' },
        { name: 'Email' },
        { name: 'Incentive' },
        { name: 'Brand Bidding' }
    ]
    const status = [
        { tittle: 'Your Daily Cap', name: '20 USD Per Day' },
        { tittle: 'Countrys Allowed', name: 'United State' },
        { tittle: 'Device', name: 'All Device are supported' }
    ]
    const pages = [
        { tittle: 'Simple', name: 'Preview' },
        { tittle: 'Initial (Default)', name: 'All Device are supported' }
    ]
    const Creatives = [
        { tittle: 'Top LINk', name: 'View' },
        { tittle: 'Bannar', name: 'View' },
        { tittle: 'Solo E-mail (Text)', name: 'View' },
        { tittle: 'Solo E-mail ( HTML)', name: 'View' }
    ]

    const details = [
        { tittle: 'Network EPC', name: '0.03' },
        { tittle: 'Expire Date', name: 'No expiry' },
        { tittle: 'Tracking typ', name: 'Server-to-server tracking' }
    ]

    return (
        <div>
            <section className='main-section'>
                {/* === Left side start */}
                <div className='left'>
                    <div className='left-side'>
                        <div className='camp-main'>
                            <p className='campaign-info'> Campaign Information</p>
                            <p className='remove-bookmark'><i className="fas fa-star-of-david"></i>  Remove Bookmarks</p>
                        </div>
                        {/* === Image start */}
                        <div>
                            <img className='bannar-img' src={bannarImg} alt="" />
                        </div>
                        {/* === User Id === */}
                        <div>
                            <p className='user-id'>ID: 478504</p>
                        </div>

                        {/* === traffic type === */}
                        <div className='traffic-main'>
                            <div className='traffic-type'>
                                <p>Allowed TRaffic Types</p>
                            </div>
                            <div className='traffic-items'>
                                {
                                    trafficTypes.map(traffic => <p key={traffic.name} className='item' >{traffic.name}</p>)
                                }
                            </div>
                        </div>

                          {/* === User Status === */}       
                        <div>
                            <p className='user-id'>Your Status :</p>
                        </div>
                        {
                            status.map(stata =>
                                <div key={stata.name} className='text-main text-pad'>
                                    <div className='text-left'>
                                        <p>{stata.tittle}</p>
                                    </div>
                                    <div className='text-right'>
                                        <p>{stata.name}</p>
                                    </div>
                                </div>)
                        }


                    </div>

                    <div className='left-side rates-main'>
                        <p className='user-id rate-type custom-landing'>Rates</p>
                        <div className='rate-head'>
                            <p >Description</p>
                            <p >Type</p>
                            <p >CPA Rate</p>
                        </div>
                        <div className='rate-head2'>
                            <p >cc submit</p>
                            <p className='fixed'>Fixed</p>
                            <p >$20.00 Per Lead</p>
                        </div>
                    </div>

                    <div className='left-side rates-main'>
                        <p className='user-id rate-type custom-landing'>Landing Page</p>
                        {
                            pages.map(page=><div className='rate-head '>
                            <p className=''>{page.tittle}</p>
                            <a href="#" target='_blank'> <p >{page.name} <i className="fas fa-clone"></i></p></a>
                        </div>)
                        }
                    </div>

                    <div className='left-side rates-main'>
                        <p className='user-id rate-type custom-landing'>Creatives</p>
                        {Creatives.map(creative => <div className='rate-head'>
                            <p>{creative.tittle}</p>
                            <a href='#' target="_blank"> <p >{creative.name}</p></a>
                        </div>)}
                    </div>

                    <div className='left-side rates-main custom-bg'>
                        <p className='user-id rate-type custom-details'>Details</p>
                        {
                            details.map(stata =>
                                <div key={stata.name} className='text-main text-pad'>
                                    <div className='text-left'>
                                        <p>{stata.tittle}</p>
                                    </div>
                                    <div className='text-right'>
                                        <p>{stata.name}</p>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>

                {/* === right side start */}
                <div className='right '>
                    <div className='right-side'>
                        <div className='camp-desMain'>
                            <p className='camp-description custom-landing'>Campaign Description</p>
                            <div className='camp-details'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam excepturi inventore non ducimus. Aperiam debitis dolore impedit pariatur eius aliquam fugit id accusamus ullam atque qui tempora alias eligendi quis vel rem tenetur vero dolorem distinctio, incidunt inventore, ipsum officiis. Eaque laborum vel sit, nulla commodi voluptatum facere magni quo.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam excepturi inventore non ducimus. Aperiam debitis dolore impedit pariatur eius aliquam fugit id accusamus ullam atque qui tempora alias eligendi quis vel rem tenetur vero dolorem distinctio, incidunt inventore, ipsum officiis. Eaque laborum vel sit, nulla commodi voluptatum facere magni quo.</p>
                            </div>
                        </div>
                    </div>

                    <div className='res-sear right-side'>
                        <p className='camp-description custom-landing'>Search Restriction</p>
                        <div className='camp-details'>
                            <p className='res-details'>No used of word "free" allowed</p>
                        </div>
                    </div>

                    <div className='res-sear right-side '>
                        <div className='traffic-select'>
                            <h4>1. What type of Traffic do you want to sending</h4>
                            <div className='traffic-input'>
                                <div className='input-add'>
                                    <input onChange={handleContextual} type="radio" id="Contextual" name="micple" value="Contextual"
                                    />
                                    <label htmlFor="Contextual">Contextual</label>
                                </div>
                                <div className='input-add'>
                                    <input onChange={handleDisplay} type="radio" id="Display" name="micple" value="Display"
                                    />
                                    <label htmlFor="Display">Display</label>
                                </div>
                            </div>
                            <div className='radio-input'>
                                <input type="text" placeholder='Search' />
                            </div>
                        </div>


                        <p className='camp-description custom-landing'>Your Tracking link</p>
                        <div className='camp-details link-generate'>
                            <div className='link-url '>
                                <p>https://micple.com/signup https://micple.</p>
                            </div>
                            <div className='link-copy'>
                                <p className='res-details copy-icon'><i className="fas fa-clone"></i> Copy Link </p>
                            </div>
                        </div>

                        <div className='traffic-select'>
                            <h4>3. Select a Creative</h4>
                            <div className='subid-add'>
                                <label htmlFor="">Sub ID: 1</label>
                                <input onChange={handleSubID1} type="text" />
                            </div>
                            <div className='subid-add'>
                                <label htmlFor="">Sub ID: 2</label>
                                <input onChange={handleSubID2} type="text" />
                            </div>
                            <div className='subid-add'>
                                <label htmlFor="">Sub ID: 3</label>
                                <input onChange={handleSubID3} type="text" />
                            </div>
                            <div className='subid-add'>
                                <label htmlFor="">Sub ID: 4</label>
                                <input onChange={handleSubID4} type="text" />
                            </div>
                            <div className='subid-add'>
                                <label htmlFor="">Sub ID: 5</label>
                                <input onChange={handleSubID5} type="text" />
                            </div>
                            <div className='subid-add'>
                                <label htmlFor="">Sub ID: 6</label>
                                <input onChange={handleSubID6} type="text" />
                            </div>

                        </div>


                    </div>








                </div>

            </section>


        </div>
    );
};

export default Campinformation;