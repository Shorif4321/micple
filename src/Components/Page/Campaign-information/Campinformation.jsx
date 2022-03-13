import React from 'react';
import './Campinformation.css';
import bannarImg from '../Images/banner.png'

const Campinformation = () => {
    return (
        <div>
            <section className='main-section'>
                {/* === Left side start */}
                <div className=''>
                    <div className='left-side'>
                        <div className='camp-main'>
                            <p className='campaign-info'> Campaign Information</p>
                            <p className='remove-bookmark'><i class="fas fa-star-of-david"></i>  Remove Bookmarks</p>
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

                        <p className='user-id'>Rates</p>
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


                </div>




                {/* === right side start */}
                <div className='right-side'>
                    <h1>some text will be go here</h1>
                </div>

            </section>


        </div>
    );
};

export default Campinformation;