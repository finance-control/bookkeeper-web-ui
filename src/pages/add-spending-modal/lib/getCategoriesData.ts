import { ICategory } from "src/shared/models"

export const getCategoriesData = (data: ICategory[] | null | undefined) => {
  if (data && data.length > 0) {
    const categories = data.map((item: any) => (
      {
        value: '' + item.id,
        label: item.title
      }
    ))
    return [...categories]
  }
  return [{ value: '', label: '' }]
}