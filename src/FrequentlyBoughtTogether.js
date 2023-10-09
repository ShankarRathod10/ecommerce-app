import React,{useState} from "react";
import { useLocation } from "react-router-dom";

function FrequentlyBoughtTogether (){
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
               frequentlyBoughtTogether :[
                {
                    title : 'Dashing Display',
                    descriptions: 'SAMSUNG Galaxy F13 (Nightsky Green, 64 GB)  (4 GB RAM).',
                    imgSrc : 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70'
                },
                {
                    title : 'Superior Toughness',
                    descriptions: 'SAMSUNG Original 25W, Type C Power Adaptor compatible for all Samsung Devices (Super Fast Charge 3.0) (Black)  (Black).',
                    imgSrc : 'https://rukminim2.flixcart.com/image/312/312/xif0q/battery-charger/b/9/q/-original-imagqjh7zkznhahp.jpeg?q=70'
                },
                {
                    title : 'Powerful Battery',
                    descriptions : 'Flipkart SmartBuy Back Cover for Samsung Galaxy F13  (Transparent, Grip Case, Silicon, Pack of: 1).',
                    imgSrc : 'https://rukminim2.flixcart.com/image/312/312/l5iid8w0/cases-covers/back-cover/p/s/l/fksb-c-smg-f13-tra-flipkart-smartbuy-original-imagg65ryebx4gzz.jpeg?q=70'
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
               frequentlyBoughtTogether :[
                {
                    title : 'Dashing Display',
                    descriptions: 'SAMSUNG Galaxy F13 (Nightsky Green, 64 GB)  (4 GB RAM).',
                    imgSrc : 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70'
                },
                {
                    title : 'Superior Toughness',
                    descriptions: 'SAMSUNG Original 25W, Type C Power Adaptor compatible for all Samsung Devices (Super Fast Charge 3.0) (Black)  (Black).',
                    imgSrc : 'https://rukminim2.flixcart.com/image/312/312/xif0q/battery-charger/b/9/q/-original-imagqjh7zkznhahp.jpeg?q=70'
                },
                {
                    title : 'Powerful Battery',
                    descriptions : 'Flipkart SmartBuy Back Cover for Samsung Galaxy F13  (Transparent, Grip Case, Silicon, Pack of: 1).',
                    imgSrc : 'https://rukminim2.flixcart.com/image/312/312/l5iid8w0/cases-covers/back-cover/p/s/l/fksb-c-smg-f13-tra-flipkart-smartbuy-original-imagg65ryebx4gzz.jpeg?q=70'
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
               frequentlyBoughtTogether :[
                {
                    title : 'Dashing Display',
                    descriptions: 'SAMSUNG Galaxy F13 (Nightsky Green, 64 GB)  (4 GB RAM).',
                    imgSrc : 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70'
                },
                {
                    title : 'Superior Toughness',
                    descriptions: 'SAMSUNG Original 25W, Type C Power Adaptor compatible for all Samsung Devices (Super Fast Charge 3.0) (Black)  (Black).',
                    imgSrc : 'https://rukminim2.flixcart.com/image/312/312/xif0q/battery-charger/b/9/q/-original-imagqjh7zkznhahp.jpeg?q=70'
                },
                {
                    title : 'Powerful Battery',
                    descriptions : 'Flipkart SmartBuy Back Cover for Samsung Galaxy F13  (Transparent, Grip Case, Silicon, Pack of: 1).',
                    imgSrc : 'https://rukminim2.flixcart.com/image/312/312/l5iid8w0/cases-covers/back-cover/p/s/l/fksb-c-smg-f13-tra-flipkart-smartbuy-original-imagg65ryebx4gzz.jpeg?q=70'
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
               frequentlyBoughtTogether :[
                {
                    title : 'Dashing Display',
                    descriptions: 'SAMSUNG Galaxy F13 (Nightsky Green, 64 GB)  (4 GB RAM).',
                    imgSrc : 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70'
                },
                {
                    title : 'Superior Toughness',
                    descriptions: 'SAMSUNG Original 25W, Type C Power Adaptor compatible for all Samsung Devices (Super Fast Charge 3.0) (Black)  (Black).',
                    imgSrc : 'https://rukminim2.flixcart.com/image/312/312/xif0q/battery-charger/b/9/q/-original-imagqjh7zkznhahp.jpeg?q=70'
                },
                {
                    title : 'Powerful Battery',
                    descriptions : 'Flipkart SmartBuy Back Cover for Samsung Galaxy F13  (Transparent, Grip Case, Silicon, Pack of: 1).',
                    imgSrc : 'https://rukminim2.flixcart.com/image/312/312/l5iid8w0/cases-covers/back-cover/p/s/l/fksb-c-smg-f13-tra-flipkart-smartbuy-original-imagg65ryebx4gzz.jpeg?q=70'
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
               frequentlyBoughtTogether :[
                {
                    title : 'Dashing Display',
                    descriptions: 'SAMSUNG Galaxy F13 (Nightsky Green, 64 GB)  (4 GB RAM).',
                    imgSrc : 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70'
                },
                {
                    title : 'Superior Toughness',
                    descriptions: 'SAMSUNG Original 25W, Type C Power Adaptor compatible for all Samsung Devices (Super Fast Charge 3.0) (Black)  (Black).',
                    imgSrc : 'https://rukminim2.flixcart.com/image/312/312/xif0q/battery-charger/b/9/q/-original-imagqjh7zkznhahp.jpeg?q=70'
                },
                {
                    title : 'Powerful Battery',
                    descriptions : 'Flipkart SmartBuy Back Cover for Samsung Galaxy F13  (Transparent, Grip Case, Silicon, Pack of: 1).',
                    imgSrc : 'https://rukminim2.flixcart.com/image/312/312/l5iid8w0/cases-covers/back-cover/p/s/l/fksb-c-smg-f13-tra-flipkart-smartbuy-original-imagg65ryebx4gzz.jpeg?q=70'
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
               frequentlyBoughtTogether :[
                {
                    title : 'Dashing Display',
                    descriptions: 'SAMSUNG Galaxy F13 (Nightsky Green, 64 GB)  (4 GB RAM).',
                    imgSrc : 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70'
                },
                {
                    title : 'Superior Toughness',
                    descriptions: 'SAMSUNG Original 25W, Type C Power Adaptor compatible for all Samsung Devices (Super Fast Charge 3.0) (Black)  (Black).',
                    imgSrc : 'https://rukminim2.flixcart.com/image/312/312/xif0q/battery-charger/b/9/q/-original-imagqjh7zkznhahp.jpeg?q=70'
                },
                {
                    title : 'Powerful Battery',
                    descriptions : 'Flipkart SmartBuy Back Cover for Samsung Galaxy F13  (Transparent, Grip Case, Silicon, Pack of: 1).',
                    imgSrc : 'https://rukminim2.flixcart.com/image/312/312/l5iid8w0/cases-covers/back-cover/p/s/l/fksb-c-smg-f13-tra-flipkart-smartbuy-original-imagg65ryebx4gzz.jpeg?q=70'
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
               frequentlyBoughtTogether :[
                {
                    title : 'Dashing Display',
                    descriptions: 'SAMSUNG Galaxy F13 (Nightsky Green, 64 GB)  (4 GB RAM).',
                    imgSrc : 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70'
                },
                {
                    title : 'Superior Toughness',
                    descriptions: 'SAMSUNG Original 25W, Type C Power Adaptor compatible for all Samsung Devices (Super Fast Charge 3.0) (Black)  (Black).',
                    imgSrc : 'https://rukminim2.flixcart.com/image/312/312/xif0q/battery-charger/b/9/q/-original-imagqjh7zkznhahp.jpeg?q=70'
                },
                {
                    title : 'Powerful Battery',
                    descriptions : 'Flipkart SmartBuy Back Cover for Samsung Galaxy F13  (Transparent, Grip Case, Silicon, Pack of: 1).',
                    imgSrc : 'https://rukminim2.flixcart.com/image/312/312/l5iid8w0/cases-covers/back-cover/p/s/l/fksb-c-smg-f13-tra-flipkart-smartbuy-original-imagg65ryebx4gzz.jpeg?q=70'
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
               frequentlyBoughtTogether :[
                {
                    title : 'Dashing Display',
                    descriptions: 'SAMSUNG Galaxy F13 (Nightsky Green, 64 GB)  (4 GB RAM).',
                    imgSrc : 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70'
                },
                {
                    title : 'Superior Toughness',
                    descriptions: 'SAMSUNG Original 25W, Type C Power Adaptor compatible for all Samsung Devices (Super Fast Charge 3.0) (Black)  (Black).',
                    imgSrc : 'https://rukminim2.flixcart.com/image/312/312/xif0q/battery-charger/b/9/q/-original-imagqjh7zkznhahp.jpeg?q=70'
                },
                {
                    title : 'Powerful Battery',
                    descriptions : 'Flipkart SmartBuy Back Cover for Samsung Galaxy F13  (Transparent, Grip Case, Silicon, Pack of: 1).',
                    imgSrc : 'https://rukminim2.flixcart.com/image/312/312/l5iid8w0/cases-covers/back-cover/p/s/l/fksb-c-smg-f13-tra-flipkart-smartbuy-original-imagg65ryebx4gzz.jpeg?q=70'
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
            {selectedProduct && selectedProduct.frequentlyBoughtTogether.map(frequentlyBoughtTogether =>(
             <div className="flex-container">
                <div className="row my-4">
                <div className="flex-container"style={{float : 'left',border : '2px solid grey',boxSizing: 'border-box'}}>
                <div className="col-sm-3">
                    <h6 >
                    <a style={{color : 'blue',cursor : 'pointer'}}>{frequentlyBoughtTogether.descriptions} </a></h6>
                    </div>
                    <div className="dashboardbox">
                    <img src={frequentlyBoughtTogether.imgSrc} width="75px" style={{float : 'left'}}/>
                </div>
                </div>
             </div>
             </div>
            ))}
           
         </div>
    )
}
export default FrequentlyBoughtTogether; 