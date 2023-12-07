import { Comment } from '@/types/comment';

export default class API {

    static async getComments(): Promise<Comment[]> {
        const res = await fetch('/api/comments');
        return res.json();
    }

    static async getComment(id: number): Promise<Comment> {
        const res = await fetch(`/api/comments/${id}`);
        return res.json();
    }

    static async storeComment(data: Object): Promise<Comment> {
        const res = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });
        return res.json();
    }

    static async deleteComment(id: number) {
        const res = await fetch(`/api/comments/${id}`, { method: 'Delete' });
        const data = await res.json();
    }
}

