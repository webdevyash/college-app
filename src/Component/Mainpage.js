import React from 'react';
import Collegecard from './Collegecard';
import data from '../colleges.json';
import './common.css'
class Mainpage extends React.Component {
    render() {
       // console.log({ data })
        return (
            <div className="mainpage">
                {data.map((item) => {
                    // console.log(item);

                    return (
                    <Collegecard
                        collegeName={item.college_name}
                        promoted={item.promoted}
                        discount={item.discount}
                        originalFees={item.original_fees}
                        discountedFees={item.discounted_fees}
                        feesCycle={item.fees_cycle}
                        image={item.image}
                        ranking={item.ranking}
                        tags={item.tags}
                        amenties={item.amenties}

                        rating={item.rating}
                        ratingRemarks={item.rating_remarks}
                        famousNearestPlaces={item.famous_nearest_places}
                        nearestPlace={item.nearest_place}
                        offerText={item.offertext}
                    />)
                })}
            </div>

        )
    }
}

export default Mainpage;
