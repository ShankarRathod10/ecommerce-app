import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function ProductRatingReviews(){
    const [products, setProducts] = useState(
        [
           {   id   : 1,
               name : "realme C53 (Champion Gold, 64 GB)  (6 GB RAM)",
               imgSrc : "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/z/n/-original-imagrggwzadhhuz7.jpeg?q=70",
               price : 180999,
               specifications : [
                "6 GB RAM | 64 GB ROM | Expandable Upto 2 TB",
                "17.12 cm (6.74 inch) HD Display",
                "108MP + 2MP | 8MP Front Camera",
                "5000 mAh Battery",
                "T612 Processor",
                "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories"
            ],
               averageRating : 4.2,
               imgUrls : [
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/2/a/t/-original-imagnrhknw9pbg3t.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/d/6/-original-imagnrhkv92wgwgs.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/g/l/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhj8vf9zkf6.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/g/l/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhj8vf9zkf6.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/h/j/v/-original-imagnrhkdwkjxvj9.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/o/u/i/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhjts3vjtp3.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/s/m/5/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhj5yz3gb2y.jpeg?q=70'
               ],
               ratingReviews: [
                {
                    rating: 3,
                    title: 'Nice',
                    description: "Battery is 5volt and 1.55 amps so that charging time is up to 4 .00 hrs, this is only 7.5 watts charger please don't encourage this product"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Nice product 👌...natural view is amazing 👏"
                },
                {
                    rating: 5,
                    title: 'Best in the market!',
                    description: "Very good 😊👍"
                },
                {
                    rating: 5,
                    title: 'Terrific',
                    description: "Better than experience. I'm Samsung user😀😀"
                },
            ]
                
               
           },
           {    id   : 2,
               name : "realme C53 (Champion Gold, 64 GB)  (6 GB RAM)",
               imgSrc : "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/z/n/-original-imagrggwzadhhuz7.jpeg?q=70",
               price : 170999,
               specifications : [
                   "6 GB RAM | 64 GB ROM | Expandable Upto 2 TB",
                   "17.12 cm (6.74 inch) HD Display",
                   "108MP + 2MP | 8MP Front Camera",
                   "5000 mAh Battery",
                   "T612 Processor",
                   "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories"
               ],
               averageRating : 4.2,
               imgUrls : [
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/2/a/t/-original-imagnrhknw9pbg3t.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/d/6/-original-imagnrhkv92wgwgs.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/g/l/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhj8vf9zkf6.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/g/l/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhj8vf9zkf6.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/h/j/v/-original-imagnrhkdwkjxvj9.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/o/u/i/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhjts3vjtp3.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/s/m/5/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhj5yz3gb2y.jpeg?q=70'
               ],
               ratingReviews: [
                {
                    rating: 3,
                    title: 'Nice',
                    description: "Battery is 5volt and 1.55 amps so that charging time is up to 4 .00 hrs, this is only 7.5 watts charger please don't encourage this product"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Nice product 👌...natural view is amazing 👏"
                },
                {
                    rating: 5,
                    title: 'Best in the market!',
                    description: "Very good 😊👍"
                },
                {
                    rating: 5,
                    title: 'Terrific',
                    description: "Better than experience. I'm Samsung user😀😀"
                },
            ]
               
           },
           {    id   : 3,
               name : "realme C53 (Champion Gold, 64 GB)  (6 GB RAM)",
               imgSrc : "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/z/n/-original-imagrggwzadhhuz7.jpeg?q=70",
               price : 160999,
               specifications : [
                   "6 GB RAM | 64 GB ROM | Expandable Upto 2 TB",
                   "17.12 cm (6.74 inch) HD Display",
                   "108MP + 2MP | 8MP Front Camera",
                   "5000 mAh Battery",
                   "T612 Processor",
                   "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories"
               ],
               averageRating : 4.2,
               imgUrls : [
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/2/a/t/-original-imagnrhknw9pbg3t.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/d/6/-original-imagnrhkv92wgwgs.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/g/l/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhj8vf9zkf6.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/g/l/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhj8vf9zkf6.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/h/j/v/-original-imagnrhkdwkjxvj9.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/o/u/i/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhjts3vjtp3.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/s/m/5/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhj5yz3gb2y.jpeg?q=70'
               ],
               ratingReviews: [
                {
                    rating: 3,
                    title: 'Nice',
                    description: "Battery is 5volt and 1.55 amps so that charging time is up to 4 .00 hrs, this is only 7.5 watts charger please don't encourage this product"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Nice product 👌...natural view is amazing 👏"
                },
                {
                    rating: 5,
                    title: 'Best in the market!',
                    description: "Very good 😊👍"
                },
                {
                    rating: 5,
                    title: 'Terrific',
                    description: "Better than experience. I'm Samsung user😀😀"
                },
            ]
           },
           {   
               id   : 4,
               name : "realme C53 (Champion Gold, 64 GB)  (6 GB RAM)",
               imgSrc : "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/z/n/-original-imagrggwzadhhuz7.jpeg?q=70",
               price : 150999,
               specifications : [
                   "6 GB RAM | 64 GB ROM | Expandable Upto 2 TB",
                   "17.12 cm (6.74 inch) HD Display",
                   "108MP + 2MP | 8MP Front Camera",
                   "5000 mAh Battery",
                   "T612 Processor",
                   "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories"
               ],
               averageRating : 4.2,
               imgUrls : [
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/2/a/t/-original-imagnrhknw9pbg3t.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/d/6/-original-imagnrhkv92wgwgs.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/g/l/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhj8vf9zkf6.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/g/l/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhj8vf9zkf6.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/h/j/v/-original-imagnrhkdwkjxvj9.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/o/u/i/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhjts3vjtp3.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/s/m/5/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhj5yz3gb2y.jpeg?q=70'
               ],
               ratingReviews: [
                {
                    rating: 3,
                    title: 'Nice',
                    description: "Battery is 5volt and 1.55 amps so that charging time is up to 4 .00 hrs, this is only 7.5 watts charger please don't encourage this product"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Nice product 👌...natural view is amazing 👏"
                },
                {
                    rating: 5,
                    title: 'Best in the market!',
                    description: "Very good 😊👍"
                },
                {
                    rating: 5,
                    title: 'Terrific',
                    description: "Better than experience. I'm Samsung user😀😀"
                },
            ]
           },
           {
               id   : 5,
               name : "realme C53 (Champion Gold, 64 GB)  (6 GB RAM)",
               imgSrc : "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/z/n/-original-imagrggwzadhhuz7.jpeg?q=70",
               price : 140999,
               specifications : [
                   "6 GB RAM | 64 GB ROM | Expandable Upto 2 TB",
                   "17.12 cm (6.74 inch) HD Display",
                   "108MP + 2MP | 8MP Front Camera",
                   "5000 mAh Battery",
                   "T612 Processor",
                   "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories"
               ],
               averageRating : 4.2,
               imgUrls : [
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/2/a/t/-original-imagnrhknw9pbg3t.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/d/6/-original-imagnrhkv92wgwgs.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/g/l/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhj8vf9zkf6.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/g/l/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhj8vf9zkf6.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/h/j/v/-original-imagnrhkdwkjxvj9.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/o/u/i/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhjts3vjtp3.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/s/m/5/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhj5yz3gb2y.jpeg?q=70'
               ],
               ratingReviews: [
                {
                    rating: 3,
                    title: 'Nice',
                    description: "Battery is 5volt and 1.55 amps so that charging time is up to 4 .00 hrs, this is only 7.5 watts charger please don't encourage this product"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Nice product 👌...natural view is amazing 👏"
                },
                {
                    rating: 5,
                    title: 'Best in the market!',
                    description: "Very good 😊👍"
                },
                {
                    rating: 5,
                    title: 'Terrific',
                    description: "Better than experience. I'm Samsung user😀😀"
                },
            ]
           },
           {
               id   : 6,
               name : "realme C53 (Champion Gold, 64 GB)  (6 GB RAM)",
               imgSrc : "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/z/n/-original-imagrggwzadhhuz7.jpeg?q=70",
               price : 130999,
               specifications : [
                   "6 GB RAM | 64 GB ROM | Expandable Upto 2 TB",
                   "17.12 cm (6.74 inch) HD Display",
                   "108MP + 2MP | 8MP Front Camera",
                   "5000 mAh Battery",
                   "T612 Processor",
                   "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories"
               ],
               averageRating : 4.2,
               imgUrls : [
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/2/a/t/-original-imagnrhknw9pbg3t.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/d/6/-original-imagnrhkv92wgwgs.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/g/l/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhj8vf9zkf6.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/g/l/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhj8vf9zkf6.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/h/j/v/-original-imagnrhkdwkjxvj9.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/o/u/i/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhjts3vjtp3.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/s/m/5/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhj5yz3gb2y.jpeg?q=70'
               ],
               ratingReviews: [
                {
                    rating: 3,
                    title: 'Nice',
                    description: "Battery is 5volt and 1.55 amps so that charging time is up to 4 .00 hrs, this is only 7.5 watts charger please don't encourage this product"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Nice product 👌...natural view is amazing 👏"
                },
                {
                    rating: 5,
                    title: 'Best in the market!',
                    description: "Very good 😊👍"
                },
                {
                    rating: 5,
                    title: 'Terrific',
                    description: "Better than experience. I'm Samsung user😀😀"
                },
            ]
           },
           {
               id   : 7,
               name : "realme C53 (Champion Gold, 64 GB)  (6 GB RAM)",
               imgSrc : "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/h/e/-original-imagzjhwmsamexfk.jpeg?q=70",
               price : 120999,
               specifications : [
                   "6 GB RAM | 64 GB ROM | Expandable Upto 2 TB",
                   "17.12 cm (6.74 inch) HD Display",
                   "108MP + 2MP | 8MP Front Camera",
                   "5000 mAh Battery",
                   "T612 Processor",
                   "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories"
               ],
               averageRating : 4.2,
               imgUrls : [
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/2/a/t/-original-imagnrhknw9pbg3t.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/d/6/-original-imagnrhkv92wgwgs.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/g/l/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhj8vf9zkf6.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/g/l/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhj8vf9zkf6.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/h/j/v/-original-imagnrhkdwkjxvj9.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/o/u/i/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhjts3vjtp3.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/s/m/5/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhj5yz3gb2y.jpeg?q=70'
               ],
               ratingReviews: [
                {
                    rating: 3,
                    title: 'Nice',
                    description: "Battery is 5volt and 1.55 amps so that charging time is up to 4 .00 hrs, this is only 7.5 watts charger please don't encourage this product"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Nice product 👌...natural view is amazing 👏"
                },
                {
                    rating: 5,
                    title: 'Best in the market!',
                    description: "Very good 😊👍"
                },
                {
                    rating: 5,
                    title: 'Terrific',
                    description: "Better than experience. I'm Samsung user😀😀"
                },
            ]
           },
           {
               id   : 8,
               name : "realme C53 (Champion Gold, 64 GB)  (6 GB RAM)",
               imgSrc : "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/f/8/c53-rmx3762-realme-original-imagrffga9srfh7v.jpeg?q=70",
               price : 110999,
               specifications : [
                   "6 GB RAM | 64 GB ROM | Expandable Upto 2 TB",
                   "17.12 cm (6.74 inch) HD Display",
                   "108MP + 2MP | 8MP Front Camera",
                   "5000 mAh Battery",
                   "T612 Processor",
                   "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories"
               ],
               averageRating : 4.2,
               imgUrls : [
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/2/a/t/-original-imagnrhknw9pbg3t.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/d/6/-original-imagnrhkv92wgwgs.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/g/l/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhj8vf9zkf6.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/g/l/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhj8vf9zkf6.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/h/j/v/-original-imagnrhkdwkjxvj9.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/o/u/i/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhjts3vjtp3.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/s/m/5/galaxy-a54-5g-sm-a546ezkdins-samsung-original-imagnqhj5yz3gb2y.jpeg?q=70'
               ],
               ratingReviews: [
                {
                    rating: 3,
                    title: 'Nice',
                    description: "Battery is 5volt and 1.55 amps so that charging time is up to 4 .00 hrs, this is only 7.5 watts charger please don't encourage this product"
                },
                {
                    rating: 4,
                    title: 'Wonderful',
                    description: "Nice product 👌...natural view is amazing 👏"
                },
                {
                    rating: 5,
                    title: 'Best in the market!',
                    description: "Very good 😊👍"
                },
                {
                    rating: 5,
                    title: 'Terrific',
                    description: "Better than experience. I'm Samsung user😀😀"
                },
            ]
           }
   ]);
   const location = useLocation();
    const productId = location.pathname.split('/')[2];
    const selectedProduct = products.find(product => product.id == productId);
    return (
       <div className='container'>
            {selectedProduct && selectedProduct.ratingReviews.map(rating => (
                <div className="row border px-2 py-3 my-2">
                    <div className='col-sm-9'>
                        <h5>{rating.rating} {rating.title}</h5>
                        <p>{rating.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ProductRatingReviews;