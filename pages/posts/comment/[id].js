import Link from "next/link";

const CommentPage = () => {
  return (
    <div>
      <Link href="/">
        <a>Página inicial</a>
      </Link>
      <p>"Amei a postagem sobre Next.js" - Steve Nest</p>
    </div>
  );
};

export default CommentPage;
