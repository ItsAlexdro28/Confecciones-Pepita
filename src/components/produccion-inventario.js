import { LitElement, html, css } from 'lit';

export const productos = [
    {
        imagen: ('./public/images/pantalon1.webp'),
        nombre: "Pantalón elegante mujer",
        material: {
            s: {
                talla: "S",
                metrosMateria: "5",
                botones:"2"
            },
            m: {
                talla: "M",
                metrosMateria: "7",
                botones:"2"
            },
            l: {
                talla: "L",
                metrosMateria: "9",
                botones:"2"
            }
        }
    },
    {
        imagen: ('./public/images/blusa1.webp'),
        nombre: "Blusa elegante mujer",
        material: {
            s: {
                talla: "S",
                metrosMateria: "4",
                botones:"2"
            },
            m: {
                talla: "M",
                metrosMateria: "6",
                botones:"2"
            },
            l: {
                talla: "L",
                metrosMateria: "8",
                botones:"2"
            }
        }
    },
    {
        imagen: ('./public/images/chaleco1.jpg'),
        nombre: "Chaleco traje hombre",
        material: {
            s: {
                talla: "S",
                metrosMateria: "9",
                botones:"8"
            },
            m: {
                talla: "M",
                metrosMateria: "10",
                botones:"8"
            },
            l: {
                talla: "L",
                metrosMateria: "12",
                botones:"8"
            }
        }
    },
    {
        imagen: ('./public/images/gala1.webp'),
        nombre: "Vestido gala mujer",
        material: {
            s: {
                talla: "S",
                metrosMateria: "14",
                botones:"4"
            },
            m: {
                talla: "M",
                metrosMateria: "16",
                botones:"2"
            },
            l: {
                talla: "L",
                metrosMateria: "18",
                botones:"4"
            }
        }
    },
    {
        imagen: ('./public/images/gala2.webp'),
        nombre: "Vestido formal mujer",
        material: {
            s: {
                talla: "S",
                metrosMateria: "17",
                botones:"3"
            },
            m: {
                talla: "M",
                metrosMateria: "19",
                botones:"3"
            },
            l: {
                talla: "L",
                metrosMateria: "21",
                botones:"3"
            }
        }
    },
    {
        imagen: ('./public/images/traje1.jpg'),
        nombre: "Traje boda hombre",
        material: {
            s: {
                talla: "S",
                metrosMateria: "30",
                botones:"3"
            },
            m: {
                talla: "M",
                metrosMateria: "34",
                botones:"3"
            },
            l: {
                talla: "L",
                metrosMateria: "38",
                botones:"3"
            }
        }
    },
    {
        imagen: ('./public/images/traje2.jpg'),
        nombre: "Traje formal hombre",
        material: {
            s: {
                talla: "S",
                metrosMateria: "31",
                botones:"9"
            },
            m: {
                talla: "M",
                metrosMateria: "33",
                botones:"9"
            },
            l: {
                talla: "L",
                metrosMateria: "35",
                botones:"9"
            }
        }
    },
    {
        imagen: ('./public/images/pantalon1.webp'),
        nombre: "Pantalón elegante mujer",
        material: {
            s: {
                talla: "S",
                metrosMateria: "13",
                botones:"1"
            },
            m: {
                talla: "M",
                metrosMateria: "14",
                botones:"1"
            },
            l: {
                talla: "L",
                metrosMateria: "15",
                botones:"1"
            }
        }
    },
    {
        imagen: ('./public/images/vestido1.webp'),
        nombre: "Vestido de novia",
        material: {
            s: {
                talla: "S",
                metrosMateria: "40",
                botones:"5"
            },
            m: {
                talla: "M",
                metrosMateria: "44",
                botones:"5"
            },
            l: {
                talla: "L",
                metrosMateria: "46",
                botones:"5"
            }
        }
    },
    {
        imagen: ('./public/images/vestido2.webp'),
        nombre: "Vestido de novia",
        material: {
            s: {
                talla: "S",
                metrosMateria: "45",
                botones:"5"
            },
            m: {
                talla: "M",
                metrosMateria: "48",
                botones:"5"
            },
            l: {
                talla: "L",
                metrosMateria: "51",
                botones:"5"
            }
        }
    },
    {
        imagen: ('./public/images/playera.webp'),
        nombre: "Playera unicolor hombre",
        material: {
            s: {
                talla: "S",
                metrosMateria: "10",
                botones:"3"
            },
            m: {
                talla: "M",
                metrosMateria: "12",
                botones:"3"
            },
            l: {
                talla: "L",
                metrosMateria: "14",
                botones:"3"
            }
        }
    },
    {
        imagen: ('./public/images/cuello.jpg'),
        nombre: "Camisa elegante hombre",
        material: {
            s: {
                talla: "S",
                metrosMateria: "9",
                botones:"0"
            },
            m: {
                talla: "M",
                metrosMateria: "11",
                botones:"0"
            },
            l: {
                talla: "L",
                metrosMateria: "12",
                botones:"0"
            }
        }
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
        <head>
            <link rel="stylesheet" href="/css/style.css"/>
        </head>
            <div class="inventario">
                ${this.productos.map(producto => html`
                    <div class="producto">
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                        <div class="info">
                            <h3>${producto.nombre}</h3>
                            <div class="tallasTabla">
                                <div class="tallaInfo">
                                    <p>Talla: ${producto.material.s.talla}</p>
                                    <p>Metros: ${producto.material.s.metrosMateria}</p>
                                    <p>Botones: ${producto.material.s.botones}</p>
                                </div>

                                <div class="tallaInfo">
                                    <p>Talla: ${producto.material.m.talla}</p>
                                    <p>Metros: ${producto.material.m.metrosMateria}</p>
                                    <p>Botones: ${producto.material.m.botones}</p>
                                </div>

                                <div class="tallaInfo">
                                    <p>Talla: ${producto.material.l.talla}</p>
                                    <p>Metros: ${producto.material.l.metrosMateria}</p>
                                    <p>Botones: ${producto.material.l.botones}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `)}
            </div>
        `;
    }
}

customElements.define('productos-lista', ProductosComponent);