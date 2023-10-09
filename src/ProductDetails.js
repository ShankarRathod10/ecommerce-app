import React,{useState} from 'react';
import {Link,Outlet} from 'react-router-dom'
import { useParams,useSearchParams } from "react-router-dom"
function ProductDetails (){
    const params = useParams();
    const {productId} = params;
    const [searchParams,setSearchParams] = useSearchParams();
    console.log(searchParams.get('name'),searchParams.get('price'))
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
               ]
           }
   ]);
   const selectedProduct = products.find(product => product.id == productId);
   console.log(selectedProduct);
   const [selectedImgUrl,setSelectedImgUrl] = useState (selectedProduct.imgUrls[0]);
   const selectImgUrl  =  (imgUrl) => {
    setSelectedImgUrl(imgUrl); 
   }
   return(
    <div className='container'>
        <div className='row'style={{position : "sticky"}}>
        <div className='col-sm-2'>
            {selectedProduct.imgUrls.map(imgUrl => (
                <div className='border text-center' style={{width : "100px"}}>
                    <img src={imgUrl} width="70px" className='my-2' onClick={() => selectImgUrl(imgUrl)}/>
                </div>
            ))}
        </div>
        <div className='col-sm-10'>
            <div className='row my-5'>
                <div className='col-sm-4'>
                    <img src={selectedImgUrl} width= "300px" />   
                </div>
                <div className='col-sm-8'>
                <h3 style={{cursor : "pointer"}}>{selectedProduct.name} </h3>
                        <ul className="ms-4">
                            {selectedProduct.specifications.map(specification => (
                                <li key={specification}>{specification}</li>
                            ))}
                        </ul> 
                <h4>{selectedProduct.price}</h4>
                <button className='btn btn-success'> Add to Cart<Link ></Link></button> 
                           <nav class="navbar navbar-expand-lg bg-body-tertiary my-4">
                               <div class="container-fluid">
                                   <div class="collapse navbar-collapse" id="navbarNav">
                                       <ul class="navbar-nav">
                                               <Link class="nav-link active" to={`/product-details/${productId}/description`} >Product Description</Link>
                                               <Link class="nav-link"to= {`/product-details/${productId}/specifications`}>Product Specifications</Link>
                                               <Link class="nav-link" to={`/product-details/${productId}/rating-reviews`}>Rating & Reviews</Link>
                                               <Link class="nav-link" to={`/product-details/${productId}/frequently-bought-together`}>Frequently Bought</Link>
                                               <Link class="nav-link" to={`/product-details/${productId}/questions-answers`}>Questions</Link>
                                       </ul>
                                   </div>
                               </div>
                           </nav>
                           <div>
                            <Outlet />
                           </div>
                                           
                </div>
            </div>
        </div>
        </div>
    </div>
   )
}
export default ProductDetails;