import React,{useState} from 'react';
import { Link } from 'react-router-dom';
function ProductsComponent () {
    const [products,setProducts] = useState(
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
    ]); 
    const sortProducts = (mode) => {
        if(mode === 'lowToHigh'){
            const sortedData = products.sort((a , b) => {
                if (a.price < b.price){
                    return -1;
                }else if(a.price > b.price){
                    return -1;
                }else{
                    return 0;
                }
            });
            setProducts([...sortedData]);
        }else{
           const sortedData  = products.sort((a , b) => {
                if (a.price < b.price){
                    return -1;
                } else if(a.price > b.price){
                    return -1;
                } else{
                    return 0;
                }
            });
            setProducts([...sortedData])
        }
    };
    return (
        <div className="container">
            <div className="row">
               <div className="col-sm">
               <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container">
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" style={{cursor:'pointer'}} onClick={() => sortProducts('lowToHigh)')}>Price -- Low to High</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" style={{cursor:'pointer'}} onClick={() => sortProducts('highToLow)')} >Price -- High to Low</a>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a className="nav-link active" href="#">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-disabled="true">Newest First</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-disabled="true">Popularity</a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </nav>
               </div>
            </div>
            {products.map((product)=> (
                <div className="row my-4 py-4 border-bottom text-inline" key={product.name}>
                    <div className="col-sm-3">
                        <img src={product.imgSrc} width="150px" />
                    </div>
                    <div className="col-sm-6">
                        <h3 style={{cursor : "pointer"}}>
                            <Link to={`/product-details/${product.id}/d?name=${product.name}&price=${product.price}`}>{product.name}</Link>
                        </h3>
                        <ul className="ms-4">
                            {product.specifications.map(specification => (
                                <li key={specification}>{specification}</li>
                            ))}
                        </ul>

                    </div>
                    <div className="col-sm-3">
                        <h4>{product.price}</h4>
                        <button className="btn btn-success">Add To Cart</button>
                    </div>
            </div> 

            ))}
        </div>
    )
}
export default ProductsComponent;