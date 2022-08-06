const products = [
    { 
        id: '1', 
        name: 'Rohini Rare Spring Green – First Flush Green Tea', 
        price: 450, 
        category: 'Infusiones', 
        subCategory: 'Te Verde',
        img1:'../images/00101.jpg', 
        img2:'../images/00102.jpg', 
        stock: 25, 
        description:'Este especial y raro té verde Darjeeling proviene de Rohini Tea Estate, uno de los jardines de té más jóvenes de Darjeeling. Se elabora durante la temporada de primavera a partir de arbustos japoneses especiales que tienen menos contenido de taninos. Los arbustos están cubiertos de espesas sombras naturales que ayudan a que las hojas retengan la clorofila y les den un sabor único.'
    },
    { 
        id: '2', 
        name: 'Gopaldhara Darjeeling Roasted Leaf Tea – Black Tea', 
        price: 515, 
        category: 'Infusiones', 
        subCategory: 'Te Negro',
        img1:'../images/00201.jpg', 
        img2:'../images/00202.jpg', 
        stock: 20, 
        description:'Este té de hojas tostadas es un té negro premium de Gopaldhara Tea Estate. Las hojas se tuestan suavemente a fuego lento para darle ese sabor tostado. El té se convierte en un licor de pekoe de color naranja dorado brillante con un sabor fuerte y un rico sabor a malta. Se puede disfrutar tal cual o con un chorrito de leche. Este té aromático te hará sentir fresco y enérgico y se puede tomar en cualquier momento del día.'
    },
    { 
        id: '3', 
        name: 'Gopaldhara Darjeeling Roasted Tea – Broken Black Tea', 
        price: 495, 
        category: 'Infusiones', 
        subCategory: 'Te Negro',
        img1:'../images/00301.jpg', 
        img2:'../images/00302.jpg', 
        stock: 20, 
        description:'Este té tostado de Gopaldhara es un té negro partido del valle de Darjeeling Mirik. Las hojas de té se tuestan suavemente a fuego lento para agregar el sabor tostado a las hojas de té. El té se prepara en una taza de color rojo brillante que tiene un sabor fuerte y un rico sabor a malta con una astringencia agradable. Este té se puede disfrutar con leche o como un licor de pekoe naranja dorado brillante.'
    },
    { 
        id: '4', 
        name: 'Taza Con Filtro U.K.', 
        price: 1995, 
        category: 'Vajilla', 
        subCategory: 'Taza de Té',
        img1:'../images/00401.jpg', 
        img2:'../images/00402.jpg', 
        stock: 20, 
        description:'Desde Londres te traemos este clásico diseño de taza para el té. Su filtro es muy resistente, muy amplio y de acero inoxidable.'
    },
    { 
        id: '5', 
        name: 'Taza Mágica', 
        price: 1295, 
        category: 'Vajilla', 
        subCategory: 'Taza de Té',
        img1:'../images/00501.jpg', 
        img2:'../images/00502.jpg', 
        stock: 20, 
        description:'Taza Mágica con tapa de madera. ¿Té preguntas por que es mágica? Cuando rellenas la taza con líquido caliente la silueta negra cambia!'
    },
    { 
        id: '6', 
        name: 'Taza Para Té De Desayuno', 
        price: 2595, 
        category: 'Vajilla', 
        subCategory: 'Taza de Té',
        img1:'../images/00601.jpg', 
        img2:'../images/00602.jpg', 
        stock: 20, 
        description:'Taza con plato de porcelana fina. Hecha en Inglaterra. Capacidad 400 ml'
    },
    { 
        id: '7', 
        name: 'Taza XL', 
        price: 2495, 
        category: 'Vajilla', 
        subCategory: 'Taza de Té',
        img1:'../images/00701.jpg', 
        img2:'../images/00702.jpg', 
        stock: 20, 
        description:'Preciosa taza de porcelana fina para el té con filtro incorporado. Su gran tamaño permite llenarte una buena taza de té. Su filtro de acero inoxidable es muy resistente, también muy amplio para que las hebras del té puedan abrirse y liberar todos sus compuestos.'
    },
    { 
        id: '8', 
        name: 'Lata 150 Gr Bella', 
        price: 695, 
        category: 'Accesorios', 
        subCategory: 'Latas para Té',
        img1:'../images/00801.jpg', 
        img2:'../images/00802.jpg', 
        stock: 20, 
        description:'La capacidad de esta práctica lata es de 150 gramos. Está hecha de acero inoxidable. Es perfecta para guardar rooibos, infusiones de frutas, tés verdes, tés negros… Elige entre nuestros 3 modelos diferentes, o porque no! Puedes llevártelos todos y tener una bonita colección para guardar tus tés favoritos.'
    },
    { 
        id: '9', 
        name: 'Lata 200 Gramos Galatea', 
        price: 995, 
        category: 'Accesorios', 
        subCategory: 'Latas para Té',
        img1:'../images/00901.jpg', 
        img2:'../images/00902.jpg', 
        stock: 20, 
        description:'Preciosa lata para guardar y conservar tus tés favoritos por más tiempo. Tenemos 3 modelos diferentes para que tengas tu propia colección de latas para guardar el té y tu despensa luzca siempre original y ordenada.'
    },
    { 
        id: '10', 
        name: 'Filtro Inox Antideslizante', 
        price: 995, 
        category: 'Accesorios', 
        subCategory: 'Filtros',
        img1:'../images/01001.jpg', 
        img2:'../images/01002.jpg', 
        stock: 20, 
        description:'Filtro de inox antideslizante, adaptable a tazas de diferentes tamaños.'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === categoryId))
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === id))
        }, 2000)
    })
}