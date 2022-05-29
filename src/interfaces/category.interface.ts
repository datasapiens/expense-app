import { CategoryState } from 'src/enums/categoryState.enum'

export interface Category {
    id: string
    label: string
    state: CategoryState
}
