import slide1Img from '../../assets/HeroImg/Nike_Produce_One-Of-One_World_Cup_Mashup__Jersey_-_SoccerBible.png'
import slide2Img from "../../assets/HeroImg/Nike_Superfly_9_white_and_red.png"
import slide3Img from '../../assets/HeroImg/Adidas Predator Golve.png'

const HeroData = [
    {
        imgUrl: slide1Img,
        name : "Nike Mashup World Cup Jersey",
        des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat obcaecati dolorem suscipit asperiores similique deleniti labore culpa nulla aperiam. Voluptates.",
        price: 1200,
        rating: "⭐⭐⭐⭐⭐",
        reviews: 345,
        ImgClass : "slide1",
        btnDesign : "btn-warning",
        headingDesign: "text-warning"
    }, {
        imgUrl: slide2Img,
        name : "Nike Superfly 9 White and Red",
        des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat obcaecati dolorem suscipit asperiores similique deleniti labore culpa nulla aperiam. Voluptates.",
        price: 1400,
        rating: "⭐⭐⭐⭐",
        reviews: 145,
        ImgClass : "slide2",
        btnDesign : "btn-danger",
        headingDesign: "text-danger"
    }, {
        imgUrl: slide3Img,
        name : "Adidas Predator GL Pro Goalkeeper Gloves",
        des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat obcaecati dolorem suscipit asperiores similique deleniti labore culpa nulla aperiam. Voluptates.",
        price: 1600,
        rating: "⭐⭐⭐⭐",
        reviews: 1345,
        ImgClass : "slide3",
        btnDesign : "btn-ternary",
        headingDesign: "text-ternary"
    }
]

export default HeroData;