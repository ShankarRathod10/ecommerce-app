import React,{useState} from "react";
import { useLocation } from "react-router-dom";
function ProductDescription(){
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
               descriptions :[
                {
                    title : 'Dashing Display',
                    description: 'The Samsung Galaxy F13 boasts an exceptional 16.62 cm (6.6) FHD+ LCD Display that delivers a cinematic visual experience with stunning picture quality. Thus, you can seamlessly immerse yourself into your favourite movie with enhanced precision.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/54616a0dcbf645fa9b071a59e3e35457_18189cbc69e_image.jpeg?q=90'
                },
                {
                    title : 'Superior Toughness',
                    description: 'Thanks to the Gorilla Glass 5 adapted into this smartphone’s screen which protects it from inadvertent falls and scratches. This way you can carry your phone anywhere without any inhibition.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/bcd4eabd45c74a9d8454453f00a9dd93_18189cbe485_image.jpeg?q=90'
                },
                {
                    title : 'Powerful Battery',
                    description : 'The Samsung Galaxy F13 comes with a monstrous 6000 mAh Battery that supports 15 W Fast Charging, allowing you to binge-watch your favourite TV show and play your favourite game seamlessly.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/72886b2604a24aafbedb98e6b88c7983_18189cca76c_image.jpeg?q=90'
                },
                {
                    title : 'Unmatched Connectivity',
                    description : 'With the Auto Data Switching feature incorporated in this phone which automatically chooses from the best available network provider, you can enjoy unmatched data connectivity wherever you are and always stay connected to the world.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/8eb3e2b458da4a1f8d70c2940e11a29d_18189cd8c18_image.png?q=90'
                },
                {
                    title : 'Enthralling RAM',
                    description : 'Driven by up to 8 GB of RAM and sporting an incredible RAM Plus feature that uses the phone’s internal storage and converts into virtual RAM, there is practically no stopping your multitasking ability. This way you can amplify your entertainment quotient significantly.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/8e74ead3af394e96bf9dc5c7ec2eab36_18189cdcc8d_image.jpeg?q=90'
                },
                {
                    title : 'Magical Photography',
                    description : 'This phone features a stunning 50 MP Triple Camera setup that helps you to capture mesmerising images with exceptional imagery, allowing you to savour memorable events whenever your heart desires.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/b489b9755619484e99d04a55f2e576bd_18189cdeaec_image.jpeg?q=90'
                },
                {
                    title : 'Security Enhanced',
                    description : 'Your sensitive and secret data will be safeguarded wherever you go courtesy of the multi-layered Knox security built into this device, which keeps you stress-free at all times.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/e4b6466db815499aad4074043650c996_18189ce1bb8_image.jpeg?q=90'
                }
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
               descriptions :[
                {
                    title : 'Dashing Display',
                    description: 'The Samsung Galaxy F13 boasts an exceptional 16.62 cm (6.6) FHD+ LCD Display that delivers a cinematic visual experience with stunning picture quality. Thus, you can seamlessly immerse yourself into your favourite movie with enhanced precision.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/54616a0dcbf645fa9b071a59e3e35457_18189cbc69e_image.jpeg?q=90'
                },
                {
                    title : 'Superior Toughness',
                    description: 'Thanks to the Gorilla Glass 5 adapted into this smartphone’s screen which protects it from inadvertent falls and scratches. This way you can carry your phone anywhere without any inhibition.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/bcd4eabd45c74a9d8454453f00a9dd93_18189cbe485_image.jpeg?q=90'
                },
                {
                    title : 'Powerful Battery',
                    description : 'The Samsung Galaxy F13 comes with a monstrous 6000 mAh Battery that supports 15 W Fast Charging, allowing you to binge-watch your favourite TV show and play your favourite game seamlessly.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/72886b2604a24aafbedb98e6b88c7983_18189cca76c_image.jpeg?q=90'
                },
                {
                    title : 'Unmatched Connectivity',
                    description : 'With the Auto Data Switching feature incorporated in this phone which automatically chooses from the best available network provider, you can enjoy unmatched data connectivity wherever you are and always stay connected to the world.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/8eb3e2b458da4a1f8d70c2940e11a29d_18189cd8c18_image.png?q=90'
                },
                {
                    title : 'Enthralling RAM',
                    description : 'Driven by up to 8 GB of RAM and sporting an incredible RAM Plus feature that uses the phone’s internal storage and converts into virtual RAM, there is practically no stopping your multitasking ability. This way you can amplify your entertainment quotient significantly.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/8e74ead3af394e96bf9dc5c7ec2eab36_18189cdcc8d_image.jpeg?q=90'
                },
                {
                    title : 'Magical Photography',
                    description : 'This phone features a stunning 50 MP Triple Camera setup that helps you to capture mesmerising images with exceptional imagery, allowing you to savour memorable events whenever your heart desires.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/b489b9755619484e99d04a55f2e576bd_18189cdeaec_image.jpeg?q=90'
                },
                {
                    title : 'Security Enhanced',
                    description : 'Your sensitive and secret data will be safeguarded wherever you go courtesy of the multi-layered Knox security built into this device, which keeps you stress-free at all times.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/e4b6466db815499aad4074043650c996_18189ce1bb8_image.jpeg?q=90'
                }
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
               descriptions :[
                {
                    title : 'Dashing Display',
                    description: 'The Samsung Galaxy F13 boasts an exceptional 16.62 cm (6.6) FHD+ LCD Display that delivers a cinematic visual experience with stunning picture quality. Thus, you can seamlessly immerse yourself into your favourite movie with enhanced precision.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/54616a0dcbf645fa9b071a59e3e35457_18189cbc69e_image.jpeg?q=90'
                },
                {
                    title : 'Superior Toughness',
                    description: 'Thanks to the Gorilla Glass 5 adapted into this smartphone’s screen which protects it from inadvertent falls and scratches. This way you can carry your phone anywhere without any inhibition.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/bcd4eabd45c74a9d8454453f00a9dd93_18189cbe485_image.jpeg?q=90'
                },
                {
                    title : 'Powerful Battery',
                    description : 'The Samsung Galaxy F13 comes with a monstrous 6000 mAh Battery that supports 15 W Fast Charging, allowing you to binge-watch your favourite TV show and play your favourite game seamlessly.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/72886b2604a24aafbedb98e6b88c7983_18189cca76c_image.jpeg?q=90'
                },
                {
                    title : 'Unmatched Connectivity',
                    description : 'With the Auto Data Switching feature incorporated in this phone which automatically chooses from the best available network provider, you can enjoy unmatched data connectivity wherever you are and always stay connected to the world.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/8eb3e2b458da4a1f8d70c2940e11a29d_18189cd8c18_image.png?q=90'
                },
                {
                    title : 'Enthralling RAM',
                    description : 'Driven by up to 8 GB of RAM and sporting an incredible RAM Plus feature that uses the phone’s internal storage and converts into virtual RAM, there is practically no stopping your multitasking ability. This way you can amplify your entertainment quotient significantly.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/8e74ead3af394e96bf9dc5c7ec2eab36_18189cdcc8d_image.jpeg?q=90'
                },
                {
                    title : 'Magical Photography',
                    description : 'This phone features a stunning 50 MP Triple Camera setup that helps you to capture mesmerising images with exceptional imagery, allowing you to savour memorable events whenever your heart desires.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/b489b9755619484e99d04a55f2e576bd_18189cdeaec_image.jpeg?q=90'
                },
                {
                    title : 'Security Enhanced',
                    description : 'Your sensitive and secret data will be safeguarded wherever you go courtesy of the multi-layered Knox security built into this device, which keeps you stress-free at all times.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/e4b6466db815499aad4074043650c996_18189ce1bb8_image.jpeg?q=90'
                }
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
               descriptions :[
                {
                    title : 'Dashing Display',
                    description: 'The Samsung Galaxy F13 boasts an exceptional 16.62 cm (6.6) FHD+ LCD Display that delivers a cinematic visual experience with stunning picture quality. Thus, you can seamlessly immerse yourself into your favourite movie with enhanced precision.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/54616a0dcbf645fa9b071a59e3e35457_18189cbc69e_image.jpeg?q=90'
                },
                {
                    title : 'Superior Toughness',
                    description: 'Thanks to the Gorilla Glass 5 adapted into this smartphone’s screen which protects it from inadvertent falls and scratches. This way you can carry your phone anywhere without any inhibition.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/bcd4eabd45c74a9d8454453f00a9dd93_18189cbe485_image.jpeg?q=90'
                },
                {
                    title : 'Powerful Battery',
                    description : 'The Samsung Galaxy F13 comes with a monstrous 6000 mAh Battery that supports 15 W Fast Charging, allowing you to binge-watch your favourite TV show and play your favourite game seamlessly.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/72886b2604a24aafbedb98e6b88c7983_18189cca76c_image.jpeg?q=90'
                },
                {
                    title : 'Unmatched Connectivity',
                    description : 'With the Auto Data Switching feature incorporated in this phone which automatically chooses from the best available network provider, you can enjoy unmatched data connectivity wherever you are and always stay connected to the world.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/8eb3e2b458da4a1f8d70c2940e11a29d_18189cd8c18_image.png?q=90'
                },
                {
                    title : 'Enthralling RAM',
                    description : 'Driven by up to 8 GB of RAM and sporting an incredible RAM Plus feature that uses the phone’s internal storage and converts into virtual RAM, there is practically no stopping your multitasking ability. This way you can amplify your entertainment quotient significantly.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/8e74ead3af394e96bf9dc5c7ec2eab36_18189cdcc8d_image.jpeg?q=90'
                },
                {
                    title : 'Magical Photography',
                    description : 'This phone features a stunning 50 MP Triple Camera setup that helps you to capture mesmerising images with exceptional imagery, allowing you to savour memorable events whenever your heart desires.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/b489b9755619484e99d04a55f2e576bd_18189cdeaec_image.jpeg?q=90'
                },
                {
                    title : 'Security Enhanced',
                    description : 'Your sensitive and secret data will be safeguarded wherever you go courtesy of the multi-layered Knox security built into this device, which keeps you stress-free at all times.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/e4b6466db815499aad4074043650c996_18189ce1bb8_image.jpeg?q=90'
                }
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
               descriptions :[
                {
                    title : 'Dashing Display',
                    description: 'The Samsung Galaxy F13 boasts an exceptional 16.62 cm (6.6) FHD+ LCD Display that delivers a cinematic visual experience with stunning picture quality. Thus, you can seamlessly immerse yourself into your favourite movie with enhanced precision.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/54616a0dcbf645fa9b071a59e3e35457_18189cbc69e_image.jpeg?q=90'
                },
                {
                    title : 'Superior Toughness',
                    description: 'Thanks to the Gorilla Glass 5 adapted into this smartphone’s screen which protects it from inadvertent falls and scratches. This way you can carry your phone anywhere without any inhibition.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/bcd4eabd45c74a9d8454453f00a9dd93_18189cbe485_image.jpeg?q=90'
                },
                {
                    title : 'Powerful Battery',
                    description : 'The Samsung Galaxy F13 comes with a monstrous 6000 mAh Battery that supports 15 W Fast Charging, allowing you to binge-watch your favourite TV show and play your favourite game seamlessly.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/72886b2604a24aafbedb98e6b88c7983_18189cca76c_image.jpeg?q=90'
                },
                {
                    title : 'Unmatched Connectivity',
                    description : 'With the Auto Data Switching feature incorporated in this phone which automatically chooses from the best available network provider, you can enjoy unmatched data connectivity wherever you are and always stay connected to the world.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/8eb3e2b458da4a1f8d70c2940e11a29d_18189cd8c18_image.png?q=90'
                },
                {
                    title : 'Enthralling RAM',
                    description : 'Driven by up to 8 GB of RAM and sporting an incredible RAM Plus feature that uses the phone’s internal storage and converts into virtual RAM, there is practically no stopping your multitasking ability. This way you can amplify your entertainment quotient significantly.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/8e74ead3af394e96bf9dc5c7ec2eab36_18189cdcc8d_image.jpeg?q=90'
                },
                {
                    title : 'Magical Photography',
                    description : 'This phone features a stunning 50 MP Triple Camera setup that helps you to capture mesmerising images with exceptional imagery, allowing you to savour memorable events whenever your heart desires.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/b489b9755619484e99d04a55f2e576bd_18189cdeaec_image.jpeg?q=90'
                },
                {
                    title : 'Security Enhanced',
                    description : 'Your sensitive and secret data will be safeguarded wherever you go courtesy of the multi-layered Knox security built into this device, which keeps you stress-free at all times.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/e4b6466db815499aad4074043650c996_18189ce1bb8_image.jpeg?q=90'
                }
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
               descriptions :[
                {
                    title : 'Dashing Display',
                    description: 'The Samsung Galaxy F13 boasts an exceptional 16.62 cm (6.6) FHD+ LCD Display that delivers a cinematic visual experience with stunning picture quality. Thus, you can seamlessly immerse yourself into your favourite movie with enhanced precision.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/54616a0dcbf645fa9b071a59e3e35457_18189cbc69e_image.jpeg?q=90'
                },
                {
                    title : 'Superior Toughness',
                    description: 'Thanks to the Gorilla Glass 5 adapted into this smartphone’s screen which protects it from inadvertent falls and scratches. This way you can carry your phone anywhere without any inhibition.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/bcd4eabd45c74a9d8454453f00a9dd93_18189cbe485_image.jpeg?q=90'
                },
                {
                    title : 'Powerful Battery',
                    description : 'The Samsung Galaxy F13 comes with a monstrous 6000 mAh Battery that supports 15 W Fast Charging, allowing you to binge-watch your favourite TV show and play your favourite game seamlessly.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/72886b2604a24aafbedb98e6b88c7983_18189cca76c_image.jpeg?q=90'
                },
                {
                    title : 'Unmatched Connectivity',
                    description : 'With the Auto Data Switching feature incorporated in this phone which automatically chooses from the best available network provider, you can enjoy unmatched data connectivity wherever you are and always stay connected to the world.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/8eb3e2b458da4a1f8d70c2940e11a29d_18189cd8c18_image.png?q=90'
                },
                {
                    title : 'Enthralling RAM',
                    description : 'Driven by up to 8 GB of RAM and sporting an incredible RAM Plus feature that uses the phone’s internal storage and converts into virtual RAM, there is practically no stopping your multitasking ability. This way you can amplify your entertainment quotient significantly.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/8e74ead3af394e96bf9dc5c7ec2eab36_18189cdcc8d_image.jpeg?q=90'
                },
                {
                    title : 'Magical Photography',
                    description : 'This phone features a stunning 50 MP Triple Camera setup that helps you to capture mesmerising images with exceptional imagery, allowing you to savour memorable events whenever your heart desires.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/b489b9755619484e99d04a55f2e576bd_18189cdeaec_image.jpeg?q=90'
                },
                {
                    title : 'Security Enhanced',
                    description : 'Your sensitive and secret data will be safeguarded wherever you go courtesy of the multi-layered Knox security built into this device, which keeps you stress-free at all times.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/e4b6466db815499aad4074043650c996_18189ce1bb8_image.jpeg?q=90'
                }
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
               descriptions :[
                {
                    title : 'Dashing Display',
                    description: 'The Samsung Galaxy F13 boasts an exceptional 16.62 cm (6.6) FHD+ LCD Display that delivers a cinematic visual experience with stunning picture quality. Thus, you can seamlessly immerse yourself into your favourite movie with enhanced precision.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/54616a0dcbf645fa9b071a59e3e35457_18189cbc69e_image.jpeg?q=90'
                },
                {
                    title : 'Superior Toughness',
                    description: 'Thanks to the Gorilla Glass 5 adapted into this smartphone’s screen which protects it from inadvertent falls and scratches. This way you can carry your phone anywhere without any inhibition.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/bcd4eabd45c74a9d8454453f00a9dd93_18189cbe485_image.jpeg?q=90'
                },
                {
                    title : 'Powerful Battery',
                    description : 'The Samsung Galaxy F13 comes with a monstrous 6000 mAh Battery that supports 15 W Fast Charging, allowing you to binge-watch your favourite TV show and play your favourite game seamlessly.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/72886b2604a24aafbedb98e6b88c7983_18189cca76c_image.jpeg?q=90'
                },
                {
                    title : 'Unmatched Connectivity',
                    description : 'With the Auto Data Switching feature incorporated in this phone which automatically chooses from the best available network provider, you can enjoy unmatched data connectivity wherever you are and always stay connected to the world.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/8eb3e2b458da4a1f8d70c2940e11a29d_18189cd8c18_image.png?q=90'
                },
                {
                    title : 'Enthralling RAM',
                    description : 'Driven by up to 8 GB of RAM and sporting an incredible RAM Plus feature that uses the phone’s internal storage and converts into virtual RAM, there is practically no stopping your multitasking ability. This way you can amplify your entertainment quotient significantly.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/8e74ead3af394e96bf9dc5c7ec2eab36_18189cdcc8d_image.jpeg?q=90'
                },
                {
                    title : 'Magical Photography',
                    description : 'This phone features a stunning 50 MP Triple Camera setup that helps you to capture mesmerising images with exceptional imagery, allowing you to savour memorable events whenever your heart desires.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/b489b9755619484e99d04a55f2e576bd_18189cdeaec_image.jpeg?q=90'
                },
                {
                    title : 'Security Enhanced',
                    description : 'Your sensitive and secret data will be safeguarded wherever you go courtesy of the multi-layered Knox security built into this device, which keeps you stress-free at all times.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/e4b6466db815499aad4074043650c996_18189ce1bb8_image.jpeg?q=90'
                }
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
               descriptions :[
                {
                    title : 'Dashing Display',
                    description: 'The Samsung Galaxy F13 boasts an exceptional 16.62 cm (6.6) FHD+ LCD Display that delivers a cinematic visual experience with stunning picture quality. Thus, you can seamlessly immerse yourself into your favourite movie with enhanced precision.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/54616a0dcbf645fa9b071a59e3e35457_18189cbc69e_image.jpeg?q=90'
                },
                {
                    title : 'Superior Toughness',
                    description: 'Thanks to the Gorilla Glass 5 adapted into this smartphone’s screen which protects it from inadvertent falls and scratches. This way you can carry your phone anywhere without any inhibition.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/bcd4eabd45c74a9d8454453f00a9dd93_18189cbe485_image.jpeg?q=90'
                },
                {
                    title : 'Powerful Battery',
                    description : 'The Samsung Galaxy F13 comes with a monstrous 6000 mAh Battery that supports 15 W Fast Charging, allowing you to binge-watch your favourite TV show and play your favourite game seamlessly.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/72886b2604a24aafbedb98e6b88c7983_18189cca76c_image.jpeg?q=90'
                },
                {
                    title : 'Unmatched Connectivity',
                    description : 'With the Auto Data Switching feature incorporated in this phone which automatically chooses from the best available network provider, you can enjoy unmatched data connectivity wherever you are and always stay connected to the world.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/8eb3e2b458da4a1f8d70c2940e11a29d_18189cd8c18_image.png?q=90'
                },
                {
                    title : 'Enthralling RAM',
                    description : 'Driven by up to 8 GB of RAM and sporting an incredible RAM Plus feature that uses the phone’s internal storage and converts into virtual RAM, there is practically no stopping your multitasking ability. This way you can amplify your entertainment quotient significantly.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/8e74ead3af394e96bf9dc5c7ec2eab36_18189cdcc8d_image.jpeg?q=90'
                },
                {
                    title : 'Magical Photography',
                    description : 'This phone features a stunning 50 MP Triple Camera setup that helps you to capture mesmerising images with exceptional imagery, allowing you to savour memorable events whenever your heart desires.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/b489b9755619484e99d04a55f2e576bd_18189cdeaec_image.jpeg?q=90'
                },
                {
                    title : 'Security Enhanced',
                    description : 'Your sensitive and secret data will be safeguarded wherever you go courtesy of the multi-layered Knox security built into this device, which keeps you stress-free at all times.',
                    imgSrc : 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/e4b6466db815499aad4074043650c996_18189ce1bb8_image.jpeg?q=90'
                }
               ]
           }
   ]);
   const location = useLocation();
   console.log(location.pathname);
   const productId = location.pathname.split('/')[2]
   const selectedProduct = products.find(product => product.id == productId);
    return (
        <div className="container" >
            {selectedProduct && selectedProduct.descriptions.map(description => (
                <div className="row border p-2 py-3 my-5" style={{position : "sticky"}}>
                    <div className="col-sm-9" style={{position : ""}}>
                        <h3>{description.title}</h3>
                        <p>{description.description}</p>
                    </div>
                    <div className="col-sm-3">
                        <img src={description.imgSrc} width="120px" />
                    </div>
                </div>


           ))}
        </div>
    )
}
export default ProductDescription;