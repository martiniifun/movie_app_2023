import React from 'react';
import PropTypes from "prop-types";

function Food({name, picture, rating}) {
    return (
        <div>
            <h2> I like {name} </h2>
            <h4>{rating} / 5.0</h4>
            <img src={picture} width={300} alt={name}/>
        </div>
    )
}

const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image: "https://kelliesfoodtoglow.com/wp-content/uploads/2016/10/kimchi1.jpg",
        rating: 5.0
    },
    {
        id: 2,
        name: "Samgyeopsal",
        image: "http://seonkyounglongest.com/wp-content/uploads/2019/06/samgyeopsal-7.jpg",
        rating: 5.0
    },
    {
        id: 3,
        name: "Bibimbap",
        image: "https://www.thespruceeats.com/thmb/4Dp-1foTVieumGmhq5f8NJyeESw=/3714x2476/filters:fill(auto,1)/classic-korean-bibimbap-recipe-2118765-hero-01-091c0e0f8c20426d8f70747955efa61d.jpg",
        rating: 5.0
    },
    {
        id: 4,
        name: "Donkasu",
        image: "https://stonedsoup.net/wp-content/uploads/2019/09/EDD0F73C-232E-44E1-9773-582F9AE5465B.jpeg",
        rating: 5.0
    },
    {
        id: 5,
        name: "Kimbap",
        image: "https://www.thespruceeats.com/thmb/IyxiJdbwFaixy4iolNYTLjBmW_w=/4288x2848/filters:fill(auto,1)/kimbap-korean-sushi-rolls-2118795-Hero-5b7dbdd346e0fb00250718b8.jpg",
        rating: 5.0
    }
];

// function renderFood(i) {
//     return <Food name={i.name} picture={i.image}/>;
// }

function App() {
    return (
        <div>
            {foodILike.map(i => <Food key={i.id} name={i.name} picture={i.image} rating={i.rating}/>)}
        </div>);
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    // rating: PropTypes.number.isRequired,
    rating: PropTypes.number
}

export default App;
