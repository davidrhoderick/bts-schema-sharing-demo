import { useQuery } from "@apollo/client";
import {
  GetBooksDocument,
  GetBooksQuery,
} from "@bts-schema-sharing-demo/types";

function App() {
  const { data } = useQuery<GetBooksQuery>(GetBooksDocument);

  return (
    <>
      {data?.books?.map(({ author, title }) => (
        <div key={`${title}-${author}`}>
          <h1>{title}</h1>
          <h2>by {author}</h2>
        </div>
      ))}
    </>
  );
}

export default App;
