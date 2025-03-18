
export interface BookmarkContentProps {
    bookmarks?: BookmarkProps[]
    loading: boolean
    onItemClick: (param: BookmarkProps) => void
    onItemDelete: (param: BookmarkProps) => void
}