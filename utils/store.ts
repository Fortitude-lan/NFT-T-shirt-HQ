import { proxy } from 'valtio'

const state = proxy({
    intro: false,
    colors: ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934'],
    decals: ['react', 'three2', 'pmndrs'],
    category: ['shirt', 'towel', 'mugs', 'handbag', 'sticker'],
    fabrics: ['default', 'fabric1', 'fabric2'],
    curfabric: 0,
    texture: ['BoucleFabricBubbly'],
    color: '#d2d1eb',//'#EFBD4E',#786dd5
    tcolor: '#786dd5',//'#EFBD4E',
    decal: 'three2',

})

export { state }
