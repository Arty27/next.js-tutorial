import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Metadata Example",
  description: "This is one of the example of description for metadatas",
};

const MetaDataExample = () => {
  const products = [
    { id: 1, name: "One" },
    { id: 2, name: "Two" },
    { id: 3, name: "Three" },
  ];
  return (
    <div>
      <h1>Metadata examples</h1>
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            <Link href={`/metadata-example/${prod.id}`}>{prod.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MetaDataExample;
