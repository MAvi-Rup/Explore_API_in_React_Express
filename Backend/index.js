import express from 'express';

const app = express();

const port = process.env.PORT  || 3000;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});

app.get('/api/products', (req, res)=>{
    const products = [
        {
            id: 1,
            name: 'Table Wooden',
            price: 200,
            image: 'https://picsum.photos/200/300'
        },
        {
            id: 2,
            name: 'Chair Plastic',
            price: 50,
            image: 'https://picsum.photos/200/301'
        },
        {
            id: 3,
            name: 'Sofa Fabric',
            price: 500,
            image: 'https://picsum.photos/200/302'
        },
        {
            id: 4,
            name: 'Desk Metal',
            price: 150,
            image: 'https://picsum.photos/200/303'
        },
        {
            id: 5,
            name: 'Bookshelf Wooden',
            price: 300,
            image: 'https://picsum.photos/200/304'
        },
        {
            id: 6,
            name: 'Lampshade',
            price: 30,
            image: 'https://picsum.photos/200/305'
        },
        {
            id: 7,
            name: 'Rug Patterned',
            price: 100,
            image: 'https://picsum.photos/200/306'
        },
        {
            id: 8,
            name: 'Curtains',
            price: 80,
            image: 'https://picsum.photos/200/307'
        },
        {
            id: 9,
            name: 'Mirror Frame',
            price: 70,
            image: 'https://picsum.photos/200/308'
        },
        {
            id: 10,
            name: 'Wall Clock',
            price: 40,
            image: 'https://picsum.photos/200/309'
        }
    ];

    if(req.query.search){
        const filterProducts= products.filter(product=> product.name.includes(req.query.search))

        res.send(filterProducts);
        return;
    }

    setTimeout(()=>{
        res.send(products);
    }, 3000);
})