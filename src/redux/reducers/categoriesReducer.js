//reducer is just function. It takes care of all dispatched actions
//related to categoriesReducer, and returns new state depending on dispatched action type/name
export const categoriesReducer = (state = { currentCategories: [] }, action) => {
    switch (action.type) {//if dispatched categorie type/name is ....
        case 'SET_CATEGORIES'://set currentCategories to dispatched action send data
            return {
                currentCategories: action.payload
            }
        default: {
            return state;
        }
    }
}