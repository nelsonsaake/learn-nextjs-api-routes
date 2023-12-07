import { Comment } from '@/types/comment';

export const comments = [
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  {
    "postId": 1,
    "id": 3,
    "name": "odio adipisci rerum aut animi",
    "email": "Nikita@garfield.biz",
    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  },
];

export function newComment(name: string, body: string): Comment {
  return { postId: 1, id: comments.length + 1, email: 'nelsonsaakekofi@gmail.com', name: name, body: body, }
}

export function storeComment(comment: Comment) {
  comments.push(comment)
}

export function findComment(id: number) {
  return comments.find(comment => comment.id === id)
}

export function deleteComment(id: number) {
  const index = comments.findIndex(comment => comment.id == id);
  comments.splice(index, 1)
}