// Soal no 2
type IComment = {
    commentId: number;
    commentContent: string;
    replies?: IComment[];
}

const comments: IComment[] = [
    {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
            {
            commentId: 11,
            commentContent: 'Hai juga',
            replies: [
                {
                commentId: 111,
                commentContent: 'Haai juga hai jugaa'
                },
                {
                commentId: 112,
                commentContent: 'Haai juga hai jugaa'
                }
            ]
            },
            {
            commentId: 12,
            commentContent: 'Hai juga',
            replies: [
                {
                commentId: 121,
                commentContent: 'Haai juga hai jugaa'
                }
            ]
            }
        ]
    },
    {
        commentId: 2,
        commentContent: 'Halooo'
    }
]

const countComments = (comments: IComment[]): number => {
  let total = 0

  for (const comment of comments) {
    total += 1

    if (comment.replies) {
      total += countComments(comment.replies)
    }
  }

  return total
}

const totalKomentar = countComments(comments)
console.log("\nSoal no 2. \nTotal komentar: ", totalKomentar)
// Jawaban: Total komentar:  7 komentae