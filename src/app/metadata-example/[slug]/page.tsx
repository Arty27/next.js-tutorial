import { Metadata } from "next";

const dummyData = {
  "1": { id: 1, name: "Boom Boom One" },
  "2": { id: 2, name: "Boom Boom Two" },
  "3": { id: 3, name: "Boom Boom Three" },
};

// Name of this function should be the same as given below
// generateMetadata
// generateMetaData will give error
// ****************** important
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = dummyData[slug as keyof typeof dummyData];
  console.log(slug);
  return {
    title: data.name,
    description: data.name,
  };
}

export default async function MetadataExampleDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log(slug, "from default function");
  return (
    <div>
      <h1>{dummyData[slug as keyof typeof dummyData].name}</h1>
    </div>
  );
}
