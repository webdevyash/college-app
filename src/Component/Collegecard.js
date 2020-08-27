import React from 'react';
import './common.css';
import images from '../images/college_02.jpg';




class Collegecard extends React.Component {
    getStars = (count) => {
        switch(count) {
            case 1: return <span>*</span>
            case 2: return <><span>*</span><span>*</span></>
            case 3: return <><span>*</span><span>*</span><span>*</span></>
            case 4: return <><span>*</span><span>*</span><span>*</span><span>*</span></>
            case 5: return <><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span></>
            default: return <span></span>
        }
    }
    render() {
        return (

            <div className="container">

                <div className="image">
                    <div className="bubbleContainer">
                        <div className="bub1"><span className="bubble bubble1"> {this.props.tags[0]}</span></div>
                        <div className="bub2"><span className="bubble bubble2"> {this.props.tags[1]}</span></div>
                    </div>
                    <div className="promoted">{this.props.promoted ? "Promoted" : null}</div>
                    <img src={images} alt="college pic"></img>
                </div>

                <div className="info">
                    <section className="row row-1">
                        <div className="collegeNameContainer">
                            <span className="collegeName"> {this.props.collegeName}</span>
                            <span className="rating">{this.getStars(this.props.rating)} </span>
                        </div>

                        <div className="right fees">
                            <span className="originalFees"> ₹{this.props.originalFees}</span>
                            <div className="discountContainer">
                                <span className="discount">{this.props.discount}</span>
                            </div>
                        </div>
                    </section>
                    <section className="row row-2">
                        <div>
                            <span className="nearestPlace1">{this.props.nearestPlace[0]}</span>
                            <span className="nearestPlace2">{this.props.nearestPlace[1]}</span>
                        </div>
                        <div className="right">
                            <div className="right discountedFees">₹{this.props.discountedFees}</div>
                            <div className="right feesCycle">{this.props.feesCycle}</div>
                        </div>

                    </section>
                    <section className="row row-3">
                        <div className="famousNearestPlaces">{this.props.famousNearestPlaces}</div>
                    </section>
                    <section className="row row-4">
                        <div className="offerText">{this.props.offerText}</div>
                        <div className="right amenties">
                            <span className="amenties1">{this.props.amenties[0]}</span>
                            <span>.</span>
                            <span className="amenties2">{this.props.amenties[1]}</span>
                        </div>
                    </section>
                </div>

            </div>
        )
    }
}
export default Collegecard;
