import product1 from "../Assets/images/product1.png"
import product2 from "../Assets/images/product2.png"
import product3 from "../Assets/images/product3.png"
import product4 from "../Assets/images/product4.png"
import product5 from "../Assets/images/product5.png"
import product6 from "../Assets/images/product6.png"
import product7 from "../Assets/images/product7.png"
import product8 from "../Assets/images/product8.png"
import product9 from "../Assets/images/product9.png"
import product10 from "../Assets/images/product10.png"
import fashion1 from "../Assets/images/fashion1.png"
import fashion2 from "../Assets/images/fashion2.png"
import fashion3 from "../Assets/images/fashion3.png"
import fashion4 from "../Assets/images/fashion4.png"
import fashion5 from "../Assets/images/fashion5.png"
import fashion6 from "../Assets/images/fashion6.png"
import fashion7 from "../Assets/images/fashion7.png"
import fashion8 from "../Assets/images/fashion8.png"
import fashion9 from "../Assets/images/fashion9.png"
import fashion10 from "../Assets/images/fashion10.png"
const StoreProducts = [
    {
        id: 1,
        name: "laptop",
        img: product1,
        title: "SAMSUNG Galaxy Book 2 Intel Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Home) NP550 Thin and Light Laptop ",
        rating: "⭐⭐⭐⭐",
        reviews: 128,
        price: "₹17,990",
        originalPrice: "₹34,990",
        offer: "48"
    },
    {
        id: 2,
        name: "camera",
        img: product2,
        title: "Canon R100 Mirrorless Camera RF-S 18-45mm f/4.5-6.3 IS STM  (Black)",
        rating: "⭐⭐⭐",
        reviews: 55,
        price: "₹48,990",
        originalPrice: "₹64,990",
        offer: "26"
    },
    {
        id: 3,
        name: "tv",
        img: product3,
        title: "SAMSUNG Crystal Vision 4K iSmart with Voice Assistant 108 cm (43 inch) Ultra HD (4K) LED Smart Tizen TV 2023 Edition",
        rating: "⭐⭐⭐⭐",
        reviews: 128,
        price: "₹17,990",
        originalPrice: "₹34,990",
        offer: "48"
    },
    {
        id: 4,
        name: "adidas-tshirt",
        img: fashion1,
        title: "Men Striped Round Neck Polyester White T-Shirt",
        rating: "⭐⭐⭐⭐",
        reviews: 28,
        price: "₹990",
        originalPrice: "₹2,990",
        offer: "30"
    },
    {
        id: 5,
        name: "watch",
        img: product4,
        title: "Apple Watch SE GPS (2nd Gen) Heart Rate Monitor, Crash Detection, including notifications if you have an irregular rhythm or an unusually high or low heart rate.",
        rating: "⭐⭐⭐⭐",
        reviews: 128,
        price: "₹24,990",
        originalPrice: "₹34,990",
        offer: "18"
    },
    {
        id: 6,
        name: "adidas-shoe",
        img: fashion2,
        title: "Adidas Shoe Book 2 Intel Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Home) NP550 Thin and Light Laptop  (15.6 Inch, Graphite, 1.80 Kg, With MS Office)",
        rating: "⭐⭐⭐⭐",
        reviews: 128,
        price: "₹17,990",
        originalPrice: "₹34,990",
        offer: "48"
    },
    {
        id: 7,
        name: "joystick",
        img: product5,
        title: "SAMSUNG Joystick Book 2 Intel Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Home) NP550 Thin and Light Laptop  (15.6 Inch, Graphite, 1.80 Kg, With MS Office)",
        rating: "⭐⭐⭐⭐",
        reviews: 128,
        price: "₹17,990",
        originalPrice: "₹34,990",
        offer: "48"
    },
    {
        id: 8,
        name: "nike-hoodie",
        img: fashion3,
        title: "Nike Hoodie Book 2 Intel Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Home) NP550 Thin and Light Laptop  (15.6 Inch, Graphite, 1.80 Kg, With MS Office)",
        rating: "⭐⭐⭐⭐",
        reviews: 128,
        price: "₹17,990",
        originalPrice: "₹34,990",
        offer: "48"
    },
    {
        id: 9,
        name: "phone",
        img: product6,
        title: "I phone 13 Intel Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Home) NP550 Thin and Light Laptop  (15.6 Inch, Graphite, 1.80 Kg, With MS Office)",
        rating: "⭐⭐⭐⭐",
        reviews: 128,
        price: "₹17,990",
        originalPrice: "₹34,990",
        offer: "48"
    },
    {
        id: 10,
        name: "nike-shoe",
        img: fashion4,
        title: "Nike Shoe Intel Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Home) NP550 Thin and Light Laptop  (15.6 Inch, Graphite, 1.80 Kg, With MS Office)",
        rating: "⭐⭐⭐⭐",
        reviews: 128,
        price: "₹17,990",
        originalPrice: "₹34,990",
        offer: "48"
    },
    {
        id: 11,
        name: "headphone",
        img: product7,
        title: "SAMSUNG Galaxy Headphone 2 Intel Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Home) NP550 Thin and Light Laptop  (15.6 Inch, Graphite, 1.80 Kg, With MS Office)",
        rating: "⭐⭐⭐⭐",
        reviews: 128,
        price: "₹17,990",
        originalPrice: "₹34,990",
        offer: "48"
    },
    {
        id: 12,
        name: "airpods",
        img: product8,
        title: "Airpods Intel Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Home) NP550 Thin and Light Laptop  (15.6 Inch, Graphite, 1.80 Kg, With MS Office)",
        rating: "⭐⭐⭐⭐",
        reviews: 128,
        price: "₹17,990",
        originalPrice: "₹34,990",
        offer: "48"
    },
    {
        id: 13,
        name: "adidas-track",
        img: fashion5,
        title: "Adiads Track Intel Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Home) NP550 Thin and Light Laptop  (15.6 Inch, Graphite, 1.80 Kg, With MS Office)",
        rating: "⭐⭐⭐⭐",
        reviews: 128,
        price: "₹17,990",
        originalPrice: "₹34,990",
        offer: "48"
    },
    {
        id: 14,
        name: "nike-track",
        img: fashion6,
        title: "Nike Track 2 Intel Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Home) NP550 Thin and Light Laptop  (15.6 Inch, Graphite, 1.80 Kg, With MS Office)",
        rating: "⭐⭐⭐⭐",
        reviews: 128,
        price: "₹17,990",
        originalPrice: "₹34,990",
        offer: "48"
    },
    {
        id: 15,
        name: "speaker",
        img: product9,
        title: "Speaker Intel Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Home) NP550 Thin and Light Laptop  (15.6 Inch, Graphite, 1.80 Kg, With MS Office)",
        rating: "⭐⭐⭐⭐",
        reviews: 128,
        price: "₹17,990",
        originalPrice: "₹34,990",
        offer: "48"
    },
    {
        id: 16,
        name: "toaster",
        img: product10,
        title: "Toaster Intel Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Home) NP550 Thin and Light Laptop  (15.6 Inch, Graphite, 1.80 Kg, With MS Office)",
        rating: "⭐⭐⭐⭐",
        reviews: 128,
        price: "₹17,990",
        originalPrice: "₹34,990",
        offer: "48"
    },
    {
        id: 17,
        name: "reebook-shoe",
        img: fashion7,
        title: "Reebook Shoe Intel Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Home) NP550 Thin and Light Laptop  (15.6 Inch, Graphite, 1.80 Kg, With MS Office)",
        rating: "⭐⭐⭐⭐",
        reviews: 128,
        price: "₹17,990",
        originalPrice: "₹34,990",
        offer: "48"
    },
    {
        id: 18,
        name: "reebook-tshirt",
        img: fashion8,
        title: "Reebook Tshirt Intel Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Home) NP550 Thin and Light Laptop  (15.6 Inch, Graphite, 1.80 Kg, With MS Office)",
        rating: "⭐⭐⭐⭐",
        reviews: 128,
        price: "₹17,990",
        originalPrice: "₹34,990",
        offer: "48"
    },
    {
        id: 19,
        name: "puma-track",
        img: fashion9,
        title: "Puma Track Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Home) NP550 Thin and Light Laptop  (15.6 Inch, Graphite, 1.80 Kg, With MS Office)",
        rating: "⭐⭐⭐⭐",
        reviews: 128,
        price: "₹17,990",
        originalPrice: "₹34,990",
        offer: "48"
    },
    {
        id: 20,
        name: "puma-shoe",
        img: fashion10,
        title: "Puma Shoe Intel Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Home) NP550 Thin and Light Laptop  (15.6 Inch, Graphite, 1.80 Kg, With MS Office)",
        rating: "⭐⭐⭐⭐",
        reviews: 128,
        price: "₹17,990",
        originalPrice: "₹34,990",
        offer: "48"
    }
]

export { StoreProducts }