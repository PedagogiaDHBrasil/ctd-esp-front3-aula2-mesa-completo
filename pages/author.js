import Link from "next/link";

const AuthorPage = () => {
  return (
    <div>
      <Link href="/">
        <a>Página inicial</a>
      </Link>

      <h2>Sobre o autor</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare
        cursus varius. Praesent non pretium ex. Vivamus quis tincidunt est, et
        sodales mauris. Pellentesque fermentum feugiat tortor quis vulputate.{" "}
      </p>
    </div>
  );
};

export default AuthorPage;
