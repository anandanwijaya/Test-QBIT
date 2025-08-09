// Soal no 1
type IFruit = {
    fruitId: number,
    fruitName: string,
    fruitType: 'IMPORT' | 'LOCAL',
    stock: number
}

const fruits: IFruit[] = [
    {
        fruitId: 1,
        fruitName: 'Apel',
        fruitType: 'IMPORT',
        stock: 10
    },
    {
        fruitId: 2,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 3,
        fruitName: 'apel',
        fruitType: 'IMPORT',
        stock: 50
    },
    {
        fruitId: 4,
        fruitName: 'Manggis',
        fruitType: 'LOCAL',
        stock: 100
    },
    {
        fruitId: 5,
        fruitName: 'Jeruk Bali',
        fruitType: 'LOCAL',
        stock: 10
    },
    {
        fruitId: 5,
        fruitName: 'KURMA',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 5,
        fruitName: 'Salak',
        fruitType: 'LOCAL',
        stock: 150
    }
]


// Soal 1A
const fruit_name = (data: IFruit[]) : String[] => {
    const selected_fruits = data
        .map(e => e.fruitName.toUpperCase())
        .sort()
        .filter((fruit, index, arr) => fruit !== arr[index + 1])
    return selected_fruits
}

// Soal 1B
const fruit_type = (data: IFruit[]): any => {
    const selected_type : any = []
    data.forEach(item => {
        const key = item.fruitType
        if (!selected_type[key]) {
            selected_type[key] = []
        }
        selected_type[key].push(item)
    })

    const jumlah_wadah = Object.keys(selected_type).length
    const nama_buah_wadah = {}
    Object.keys(selected_type).forEach(fruitType => {
        nama_buah_wadah[fruitType] = selected_type[fruitType].map(item => item.fruitName)
    })

    return {jumlah_wadah, nama_buah_wadah}
}

// Soal 1C
const fruit_stock = (data: IFruit[]): Number[] => {
    const selected_type : any = []
    data.forEach(item => {
        const key = item.fruitType
        if (!selected_type[key]) {
            selected_type[key] = []
        }
        selected_type[key].push(item)
    })

    let stok_buah_wadah = []

    Object.keys(selected_type).forEach(fruitType => {
        stok_buah_wadah[fruitType] = selected_type[fruitType].reduce((a, b) => a + b.stock, 0)
    })
    
    return stok_buah_wadah
}

console.log('Soal no 1')
const soal1A = fruit_name(fruits)
console.log('1. Buah yang dimiliki andi yaitu: ', soal1A)
// Jawaban [ 'APEL', 'JERUK BALI', 'KURMA', 'MANGGIS', 'SALAK' ]

const {jumlah_wadah, nama_buah_wadah} = fruit_type(fruits)
console.log('2. Wadah yang dibutuhkan sebanyak:', jumlah_wadah, 'wadah, dengan buah yang ada di masing-masing wadah yaitu: ', nama_buah_wadah)
// Jawaban: 2 wadah, dengan buah yang ada di masing-masing wadah yaitu:  {
//   IMPORT: [ 'Apel', 'Kurma', 'apel', 'KURMA' ],
//   LOCAL: [ 'Manggis', 'Jeruk Bali', 'Salak' ]
// }

const soal1C = fruit_stock(fruits)
console.log('3. Total stok masing-masing wadah adalah', soal1C)
// Jawaban: Total stok masing-masing wadah adalah [ IMPORT: 100, LOCAL: 260 ]

console.log('4. Untuk kasus diatas tidak ada komentar')
// Jawaban: Untuk kasus diatas tidak ada komentar