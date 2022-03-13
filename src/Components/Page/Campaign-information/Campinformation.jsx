import React from 'react';
import './Campinformation.css';
import bannarImg from '../Images/banner.png'

const Campinformation = () => {
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
                                <p className='item'>Contextual</p>
                                <p className='item'>Display</p>
                                <p className='item'>Search</p>
                                <p className='item'>Social</p>
                                <p className='item'>Native</p>
                                <p className='item'>Mobile Ads</p>
                                <p className='item'>Email</p>
                                <p className='item-dif'>Incentive</p>
                                <p className='item'>Brand Bidding</p>
                            </div>
                        </div>

                        <div>
                            <p className='user-id'>Your Status :</p>
                        </div>

                        <div className='text-main'>
                            <div className='text-left'>
                                <p>Your Daily Cap</p>
                            </div>
                            <div className='text-right'>
                                20 action per day
                            </div>
                        </div>

                        <div className='text-main text-pad'>
                            <div className='text-left'>
                                <p>Countries Allowed</p>
                            </div>
                            <div className='text-right'>
                                United States
                            </div>
                        </div>

                        <div className='text-main text-pad'>
                            <div className='text-left'>
                                <p>Device</p>
                            </div>
                            <div className='text-right'>
                                All Device operating system allowed
                            </div>
                        </div>


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
                        <div className='rate-head '>
                            <p className=''>Sample</p>
                            <p >Preview <i className="fas fa-people-carry"></i></p>
                        </div>
                        <div className='rate-head '>
                            <p >Initial (Default)</p>
                            <p >Preview <i className="fas fa-people-carry"></i></p>
                        </div>
                    </div>

                    <div className='left-side rates-main'>
                        <p className='user-id rate-type custom-landing'>Creatives</p>
                        <div className='rate-head '>
                            <p >Text Link</p>
                            <p >Preview <i className="fas fa-people-carry"></i></p>
                        </div>
                        <div className='rate-head '>
                            <p >Bannar</p>
                            <p >View</p>
                        </div>
                        <div className='rate-head '>
                            <p >Solo E-mail (text)</p>
                            <p >View</p>
                        </div>
                        <div className='rate-head '>
                            <p >Solo E-mail (html)</p>
                            <p >View</p>
                        </div>
                    </div>

                    <div className='left-side rates-main custom-bg'>
                        <p className='user-id rate-type custom-details'>Details</p>
                        <div className='text-main'>
                            <div className='text-left'>
                                <p>Network EPC</p>
                            </div>
                            <div className='text-right'>
                                0.03
                            </div>
                        </div>

                        <div className='text-main'>
                            <div className='text-left'>
                                <p>Expire Date</p>
                            </div>
                            <div className='text-right'>
                                No expiry
                            </div>
                        </div>

                        <div className='text-main'>
                            <div className='text-left'>
                                <p>Tracking type</p>
                            </div>
                            <div className='text-right'>
                                Server-to-server tracking
                            </div>
                        </div>
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
                            <h4>1. What type of Traffic do you want to sending</h4>
                            <div className='input-add'>
                                 <input type="radio" />
                                <label className='' htmlFor="">Contextual</label>
                            </div>
                            <div className='input-add'>
                                 <input type="radio" />
                                <label className='' htmlFor="">Display</label>
                            </div>
                            <div className='input-add'>
                                 <input type="radio" />
                                <label className='' htmlFor="">Search</label>
                            </div>
                            <div className='input-add'>
                                 <input type="radio" />
                                <label className='' htmlFor="">Social</label>
                            </div>
                            <div className='input-add'>
                                 <input type="radio" />
                                <label className='' htmlFor="">Native</label>
                            </div>
                            <div className='input-add'>
                                 <input type="radio" />
                                <label className='' htmlFor="">Mobile Add</label>
                            </div>
                            <div className='input-add'>
                                 <input type="radio" />
                                <label className='' htmlFor="">Email</label>
                            </div>
                            <div className='input-add'>
                                 <input type="radio" />
                                <label className='' htmlFor="">Incentive</label>
                            </div>
                        </div>

                        <div className='traffic-select'>
                            <h4>2. Select a Creative</h4>
                            <div className='input-add'>
                                 <input type="radio" />
                                <label className='' htmlFor="">Row link</label>
                            </div>
                            <div className='input-add'>
                                 <input type="radio" />
                                <label className='' htmlFor="">Search </label>
                            </div>
                            <div className='input-add'>
                                 <input type="radio" />
                                <label className='' htmlFor="">Contextual</label>
                            </div>
                            <div className='input-add'>
                                 <input type="radio" />
                                <label className='' htmlFor="">Social</label>
                            </div>
                            <div className='input-add'>
                                 <input type="radio" />
                                <label className='' htmlFor="">Text link </label>
                            </div>
                            <div className='input-add'>
                                 <input type="radio" />
                                <label className='' htmlFor="">Banners</label>
                            </div>
                            <div className='input-add'>
                                 <input type="radio" />
                                <label className='' htmlFor="">Solo E-mail (text)</label>
                            </div>
                            <div className='input-add'>
                                 <input type="radio" />
                                <label className='' htmlFor="">Solo E-mail (html)</label>
                            </div>
                        </div>

                        <div className='traffic-select'>
                            <h4>3. Select a Creative</h4>
                            <div className='subid-add'>
                                <label htmlFor="">Sub ID: 1</label>
                                <input type="text" />
                            </div>
                            <div className='subid-add'>
                                <label htmlFor="">Sub ID: 2</label>
                                <input type="text" />
                            </div>
                            <div className='subid-add'>
                                <label htmlFor="">Sub ID: 3</label>
                                <input type="text" />
                            </div>
                            <div className='subid-add'>
                                <label htmlFor="">Sub ID: 4</label>
                                <input type="text" />
                            </div>
                            <div className='subid-add'>
                                <label htmlFor="">Sub ID: 5</label>
                                <input type="text" />
                            </div>
                            <div className='subid-add'>
                                <label htmlFor="">Sub ID: 6</label>
                                <input type="text" />
                            </div>
                            
                        </div>
                        

                    </div>








                </div>

            </section>


        </div>
    );
};

export default Campinformation;