import { useState } from "react";
function Cart() {
    
    const [cart, setCart] = useState([]);
    const addProducts = () =>  [
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
            averageRating : 4.2
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
            averageRating : 4.2
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
            ]
        }
]
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h3 className="text-center"> Cart
                    <sup className="text-center" style={{color:"blue"}}>7</sup></h3>
                    {cart.length > 0 ? (
                        <div>

                        </div>
                    ) : (
                        <div className="col-sm text-center">
                            <img width="250px" src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" />
                            <h3>Your cart is empty!</h3>
                            <p>Explore our wide selection and find something you like</p>
                            <button className="btn btn-primary" onClick={addProducts} >Add Products</button>
                        </div>
                    )
                    }


                </div>
            </div>
        </div>
    )
}

export default Cart;