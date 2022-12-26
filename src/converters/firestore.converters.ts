import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions
} from 'firebase/firestore'
import { ICategory } from '../types/category.type'
import { IUser } from '../types/user.types'

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

export const userConverter = {
  toFirestore(user: IUser): DocumentData {
    return { ...user }
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): IUser {
    const data = snapshot.data(options)

    return {
      id: data.id,
      name: data.name,
      email: data.email,
      emailConfirmation: data.emailConfirmation,
      provider: data.provider
    }
  }
}
