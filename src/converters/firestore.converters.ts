import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions
} from 'firebase/firestore'
import { ICategory } from '../types/category.type'

export const catergoryConverter = {
  toFirestore(category: ICategory): DocumentData {
    return { ...category }
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): ICategory {
    const data = snapshot.data(options)

    return {
      id: data.id,
      displayName: data.displayName,
      imageUrl: data.imageUrl,
      name: data.name,
      products: data.products
    }
  }
}
