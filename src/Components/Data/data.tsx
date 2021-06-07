import { productType } from "../Product/types"
// аннотация productType[] показывает то, что возвращает функция
export const getProductsByCategory = (category: string, products: productType[]): productType[] => {
    return products.filter(product => product.category === category);
}

export const getCategory = (category: string): productType[] => {
    return Products.filter(product => product.category === category);
}

// enumerable перечисляемые свойства = {}
export enum CATEGORY {
    SOFA = 'sofas',
    CHAIR = 'chairs',
    DESK = 'desks',
    BED = 'beds',
    CARPET = 'carpets',
    CUPBOARD = 'cupboards'
}
export const Products: productType[] = [
    {
        id: 3875945,
        category: CATEGORY.SOFA,
        title: 'Fullset Grey Sofa With Pillow',
        price: 799,
        discount: 13,
        previewUrl: 'https://cdn.boydforcongress.com/wp-content/uploads/fabric-sofas_89570.jpg',
        rating: 5,
        salesCount: 400,
        isFavourite: false,
        toBuy: false,
        options: [{type: 'select', title: 'color', value: ['black', 'white', 'grey']}]
    },
    {
        id: 34214145,
        category: CATEGORY.SOFA,
        title: 'Green Slepper Sofa',
        price: 120,
        discount: 0,
        previewUrl: 'https://im0-tub-ru.yandex.net/i?id=5451047b52e0f7f9874fcc175d503712&n=13&exp=1',
        rating: 3,
        salesCount: 350,
        isFavourite: false,
        toBuy: false,
    },
    {
        id: 384575475,
        category: CATEGORY.SOFA,
        title: 'Morning Fantasy Sofa',
        price: 350,
        discount: 17,
        previewUrl: 'https://im0-tub-ru.yandex.net/i?id=0d8a8cc93a24d143dcb7d8991f8cb777&n=13&exp=1',
        rating: 4,
        salesCount: 240,
        isFavourite: false,
        toBuy: false,
        options: [{type: 'boolean', title: 'warranty', value: true}]
    },
    {
        id: 97898987,
        category: CATEGORY.CHAIR,
        title: 'White Ice Chair',
        price: 180,
        discount: 10,
        previewUrl: 'https://im0-tub-ru.yandex.net/i?id=ae27c74c1342e16858326489c36171c3&n=13&exp=1',
        rating: 5,
        salesCount: 205,
        isFavourite: false,
        toBuy: false,
    },
    {
        id: 1241414,
        category: CATEGORY.CHAIR,
        title: 'Soft Dark Chair',
        price: 95,
        discount: 5,
        previewUrl: 'https://im0-tub-ru.yandex.net/i?id=b725aaef9a6fa5c512b8160f8f9b8540&n=13&exp=1',
        rating: 4,
        salesCount: 165,
        isFavourite: false,
        toBuy: false,
        options: [{type: 'select', title: 'color', value: ['black', 'white', 'grey']}]
    },
    {
        id: 678665,
        category: CATEGORY.CHAIR,
        title: 'Orange Cool Chair',
        price: 250,
        discount: 27,
        previewUrl: 'https://im0-tub-ru.yandex.net/i?id=ee1cdaf660203123884873f2d8a6891a&n=13&exp=1',
        rating: 3,
        salesCount: 290,
        isFavourite: false,
        toBuy: false,
        options: [{type: 'boolean', title: 'warranty', value: true}]
    },
    {
        id: 214414,
        category: CATEGORY.DESK,
        title: 'Holly Writing Desk',
        price: 200,
        discount: 20,
        previewUrl: 'https://www.livingspaces.com/globalassets/productassets/200000-299999/220000-229999/225000-225999/225500-225599/225568/225568_multicolor_multimedia_writing_desk_room_08.jpg?w=415&h=280&mode=pad',
        rating: 5,
        salesCount: 105,
        isFavourite: false,
        toBuy: false,
        options: [{type: 'select', title: 'color', value: false}]
    },
    {
        id: 567414,
        category: CATEGORY.DESK,
        title: 'White Bloom Desk',
        price: 142,
        discount: 18,
        previewUrl: 'https://blog.modsy.com/wp-content/uploads/2017/10/Desk-Behind-Sofa.jpg',
        rating: 4,
        salesCount: 265,
        isFavourite: false,
        toBuy: false,
    },
    {
        id: 45745714,
        category: CATEGORY.DESK,
        title: 'Oak Beauty Desk',
        price: 250,
        discount: 14,
        previewUrl: 'https://i.pinimg.com/originals/2e/1a/c3/2e1ac3d25555a1d46bfe5b521b0d14a0.jpg',
        rating: 3,
        salesCount: 390,
        isFavourite: false,
        toBuy: false,
        options: [{type: 'boolean', title: 'warranty', value: false}]
    },
    {
        id: 1214414,
        category: CATEGORY.CUPBOARD,
        title: 'Coral Fantasy',
        price: 180,
        discount: 10,
        previewUrl: 'https://i.pinimg.com/originals/4a/74/15/4a74153b4fcffd2eac0d67ca5ce8ab7a.jpg',
        rating: 4,
        salesCount: 195,
        isFavourite: false,
        toBuy: false,
    },
    {
        id: 213134,
        category: CATEGORY.CUPBOARD,
        title: 'Hi-Tech Stylish',
        price: 95,
        discount: 5,
        previewUrl: 'https://i.ebayimg.com/thumbs/images/g/QXcAAOSwIShbfVaP/s-l300.jpg',
        rating: 4,
        salesCount: 230,
        isFavourite: false,
        toBuy: false,
        options: [{type: 'select', title: 'color', value: ['black', 'white', 'grey']}]
    },
    {
        id: 2121214,
        category: CATEGORY.CUPBOARD,
        title: 'Good Old Beauty',
        price: 250,
        discount: 27,
        previewUrl: 'https://d31xuhd0t0tftl.cloudfront.net/wp-content/uploads/2019/07/cape-cod-living-room-entertainment-center-lago-sorrento-miter-shaker-glass-inserts-gllry_compress.jpg',
        rating: 5,
        salesCount: 450,
        isFavourite: false,
        toBuy: false,
        options: [{type: 'boolean', title: 'warranty', value: true}]
    },
    {
        id: 331414,
        category: CATEGORY.CARPET,
        title: 'Sea Breese',
        price: 254,
        discount: 14,
        previewUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSJRTBLcwLpqvlhv3aASe5N3U03oUgXdDnjWkkAInuNIYuXUAoiQEz57KfIA&usqp=CAc',
        rating: 3,
        salesCount: 342,
        isFavourite: false,
        toBuy: false,
        options: [{type: 'select', title: 'color', value: ['black', 'white', 'grey']}]
    },
    {
        id: 714814,
        category: CATEGORY.CARPET,
        title: 'Pudding Hover',
        price: 360,
        discount: 25,
        previewUrl: 'https://cdn1.ozone.ru/s3/multimedia-c/wc1200/6017860764.jpg',
        rating: 4,
        salesCount: 315,
        isFavourite: false,
        toBuy: false,
        options: [{type: 'boolean', title: 'warranty', value: true}]
    },
    {
        id: 69414,
        category: CATEGORY.CARPET,
        title: 'East Legend',
        price: 250,
        discount: 27,
        previewUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIdMOT_GQYiiPJNMToOTQC-NVCzsAmLhcuTA&usqp=CAU',
        rating: 5,
        salesCount: 220,
        isFavourite: false,
        toBuy: false,
    },
    {
        id: 3426364,
        category: CATEGORY.BED,
        title: 'Heart Perl',
        price: 380,
        discount: 20,
        previewUrl: 'https://rukminim1.flixcart.com/image/612/612/kc54ivk0/sofa-bed/y/3/n/double-brown-polyester-swsb1001-flipkart-perfect-homes-studio-original-imaftbz8xyygg4fp.jpeg?q=70',
        rating: 4,
        salesCount: 165,
        isFavourite: false,
        toBuy: false,
        options: [{type: 'boolean', title: 'warranty', value: ['true', 'false']}]
    },
    {
        id: 565654,
        category: CATEGORY.BED,
        title: 'Show Seduction',
        price: 242,
        discount: 25,
        previewUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuKe6JdTIyHuHV0HL9WrtBVGhiANpwSnzbwQ&usqp=CAU',
        rating: 4,
        salesCount: 215,
        isFavourite: false,
        toBuy: false,
    },
    {
        id: 87854,
        category: CATEGORY.BED,
        title: 'Pink Ecstasy',
        price: 350,
        discount: 27,
        previewUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSASrG9dDTVd1wXF8WG29wOXampnl6RLF6frg&usqp=CAU',
        rating: 4,
        salesCount: 380,
        isFavourite: false,
        toBuy: false,
        options: [{type: 'select', title: 'color', value: ['black', 'white', 'grey']}]
    },
]
