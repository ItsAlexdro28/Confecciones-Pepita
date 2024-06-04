import { LitElement, html, css } from 'lit';

export const productos = [
    {
        imagen: ('../public/images/pantalon1.webp'),
        nombre: "Pantalón elegante mujer",
        tallas:"s - m - l",
        metrosMateria: "5",
        botones:"2"
    },
    {
        imagen: ('../public/images/blusa1.webp'),
        nombre: "Blusa elegante mujer",
        tallas:"s - m - l",
        metrosMateria: "2",
        botones:"1"
    },
    {
        imagen: ('../public/images/chaleco1.jpg'),
        nombre: "Chaleco traje hombre",
        tallas:"34 - 36 - 38",
        metrosMateria: "4",
        botones:"5"
    },
    {
        imagen: ('../public/images/gala1.jpg'),
        nombre: "Vestido gala mujer",
        tallas:"xs - s - m",
        metrosMateria: "7",
        botones:"4"
    },
    {
        imagen: ('../public/images/gala2.jpg'),
        nombre: "Vestido formal mujer",
        tallas:"xs - s - m",
        metrosMateria: "8",
        botones:"1"
    },
    {
        imagen: ('../public/images/traje1.jpg'),
        nombre: "Traje boda hombre",
        tallas:"m - l- xl",
        metrosMateria: "12",
        botones:"8"
    },
    {
        imagen: ('../public/images/traje2.jpg'),
        nombre: "Traje formal hombre",
        tallas:"m - l - xl",
        metrosMateria: "10",
        botones:"9"
    },
    {
        imagen: ('../public/images/pantalon1.webp'),
        nombre: "Pantalón elegante mujer",
        tallas:"s - m - l",
        metrosMateria: "5",
        botones:"2"
    },
    {
        imagen: ('../public/images/vestido1.webp'),
        nombre: "Vestido de novia",
        tallas:"s - m - l",
        metrosMateria: "20",
        botones:"5"
    },
    {
        imagen: ('../public/images/vestido2.webp'),
        nombre: "Vestido de novia",
        tallas:"s - m - l",
        metrosMateria: "18",
        botones:"2"
    },
    {
        imagen: ('../public/images/playera.webp'),
        nombre: "Playera unicolor hombre",
        tallas:"s - m - l",
        metrosMateria: "6",
        botones:"4"
    },
    {
        imagen: ('../public/images/cuello.jpg'),
        nombre: "Camisa elegante hombre",
        tallas:"s - m - l",
        metrosMateria: "5",
        botones:"0"
    }
]

class ProductosComponent extends LitElement {
    static get properties() {
        return {
            productos: { type: Array }
        };
    }

    constructor() {
        super();
        this.productos = productos;
    }

    render() {
        return html`
            <styles>
                <link rel="stylesheet" href="/css/style.css"/>
            </styles>
            <div class="inventario">
                ${this.productos.map(producto => html`
                    <div class="producto">
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                        <div class="info">
                            <h3>${producto.nombre}</h3>
                            <p>Tallas: ${producto.tallas}</p>
                            <p>Metros de material: ${producto.metrosMateria}</p>
                            <p>Botones: ${producto.botones}</p>
                        </div>
                    </div>
                `)}
            </div>
        `;
    }
}

customElements.define('productos-lista', ProductosComponent);