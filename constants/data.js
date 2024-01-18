
import images from "./images";
import { COLORS } from "./theme";

export const splashData = [
    {
        id: 1,
        title: "Your first car without a driver's license",
        subTitle: "Goes to meet people who just got their license",
        mode: "dark",
        bgColor: COLORS.primary,
        img: images.Img_car1
    },
    {
        id: 2,
        title: "Always there: more than 1000 cars in Luxury app",
        subTitle: "Our company is a leader by the number of cars in the fleet",
        mode: "dark",
        bgColor: COLORS.lightMode,
        img: images.Img_car2
    },
    {
        id: 3,
        title: "Your first car without a driver's license",
        subTitle: "Goes to meet people who just got their license",
        mode: "light",
        bgColor: COLORS.darkMode,
        img: images.Img1
    },
    {
        id: 4,
        title: "Always there: more than 1000 cars in Luxury app",
        subTitle: "Our company is a leader by the number of cars in the fleet",
        mode: "light",
        bgColor: COLORS.darkMode,
        img: images.Img2
    }
]

export const onboardingOptions = [
    {
        id: 1,
        title: "Drivers License",
        subTitle: "Please upload your drivers license",
        extraDescription: "All four sides of the license should be photographed. Ensure that the license number in the top-left-hand \
        corner is clearly visible in the image photographed",
        screenType: "image",
    },
    {
        id: 2,
        title: "Vehicle Registration",
        subTitle: "Please upload your Vehicle Registration",
        extraDescription: "Please provide accurate registration number",
        screenType: "form",
    },
    {
        id: 3,
        title: "Insurance",
        subTitle: "Please provide all the insurance for your vehicle",
        extraDescription: "All four sides of the document should be visible",
        screenType: "image",
    },
    {
        id: 4,
        title: "Upload Vehicle Image",
        subTitle: "Please provide a high resolution of your vehicle",
        extraDescription: "Upload high resolution image (JPEG or PNG)",
        screenType: "image",
    },
    {
        id: 5,
        title: "Businesses",
        subTitle: "Register under any business of your choice",
        extraDescription: "Select the business you want",
        screenType: "dropdown",
    },
    {
        id: 6,
        title: "Emergency Contact",
        subTitle: "Please provide us with an emergency contact",
        extraDescription: "Please provide us with an emergency contact",
        screenType: "form",
    },
]