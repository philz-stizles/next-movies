const CATEGORY_DATA = [
    { id: 'c-1', name: 'drama' },
    { id: 'c-2', name: 'action' },
    { id: 'c-3', name: 'adventure' },
    { id: 'c-4', name: 'historical' }
]

export const getCategories = (milliseconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(CATEGORY_DATA)
            // reject('Cannot fetch data')
        }, milliseconds)
    })
}

export const getCategoryById = (id, milliseconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(CATEGORY_DATA.find(item => item.id === id))
            // reject('Cannot fetch data')
        }, milliseconds)
    })
}