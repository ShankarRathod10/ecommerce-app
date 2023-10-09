import React,{useState} from "react";
import { useLocation } from "react-router-dom";

function QuestionAnswers (){
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
               ],
               questionAnswer :[
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name :  'Sushmitha',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Harika',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Vamshe',
                    seller  : "Flipkart Seller"
                }, {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Harsha',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Suresh',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Rajesh',
                    seller  : "Flipkart Seller"
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
               questionAnswer :[
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name :  'Sushmitha',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Harika',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Vamshe',
                    seller  : "Flipkart Seller"
                }, {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Harsha',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Suresh',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Rajesh',
                    seller  : "Flipkart Seller"
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
               questionAnswer :[
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name :  'Sushmitha',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Harika',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Vamshe',
                    seller  : "Flipkart Seller"
                }, {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Harsha',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Suresh',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Rajesh',
                    seller  : "Flipkart Seller"
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
               questionAnswer :[
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name :  'Sushmitha',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Harika',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Vamshe',
                    seller  : "Flipkart Seller"
                }, {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Harsha',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Suresh',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Rajesh',
                    seller  : "Flipkart Seller"
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
               questionAnswer :[
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name :  'Sushmitha',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Harika',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Vamshe',
                    seller  : "Flipkart Seller"
                }, {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Harsha',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Suresh',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Rajesh',
                    seller  : "Flipkart Seller"
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
               questionAnswer :[
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name :  'Sushmitha',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Harika',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Vamshe',
                    seller  : "Flipkart Seller"
                }, {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Harsha',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Suresh',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Rajesh',
                    seller  : "Flipkart Seller"
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
               questionAnswer :[
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name :  'Sushmitha',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Harika',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Vamshe',
                    seller  : "Flipkart Seller"
                }, {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Harsha',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Suresh',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Rajesh',
                    seller  : "Flipkart Seller"
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
               questionAnswer :[
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name :  'Sushmitha',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Harika',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Vamshe',
                    seller  : "Flipkart Seller"
                }, {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Harsha',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Suresh',
                    seller  : "Flipkart Seller"
                },
                {
                    question : 'Q:What are the contents available inbox?',
                    answer : 'A:Smartphone, Travel Adapter, Data Cable Type C, Ejection Pin, Quick Start Guide.',
                    name : 'Rajesh',
                    seller  : "Flipkart Seller"
                },
                
               ]
           }
   ]);
   const location = useLocation();
   console.log(location.pathname);
   const productId = location.pathname.split('/')[2]
   const selectedProduct = products.find(product => product.id == productId);
    return(
      <div className="container">
        {selectedProduct && selectedProduct.questionAnswer.map(QuestionAnswer => (
            <div className="row border px-2 py-3 my-4">
                <div className="col-sm-12">
                    <div className="col-sm b-py-sm-2">
                    <h6>{QuestionAnswer.question}</h6>
                    <p>{QuestionAnswer.answer}</p>
                    <ul className="col-sm">
                        <li>{QuestionAnswer.name}</li>
                    </ul>
                    <div className="col-sm">
                    <ul>
                        <li>{QuestionAnswer.seller}</li>
                    </ul>
                    </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    )
}
export default QuestionAnswers; 