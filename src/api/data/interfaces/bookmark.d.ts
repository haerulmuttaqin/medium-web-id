interface BookmarkProps {
    xid: number;
    bid: string;
    sid: string;
    author: { name: string, avatar: string }
    title: string;
    thumbnail: string;
    summary: string;
    content: string;
    tags: string;
    url: string;
    created_at?: string
}

interface BookmarkPayloadProps {
    author: { name: string, avatar: string }
    title: string;
    thumbnail: string;
    summary: string;
    content: string;
    tags: string;
    url?: string;
    created_at?: string
    sid?: string
}