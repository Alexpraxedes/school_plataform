import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      slug
      title
      teacher {
        name
        bio
        avatarURL
      }
    }
  }
`;

interface Lesson {
  id: string;
  slug: string;
  title: string;
  teacher: {
    name: string;
    bio: string;
    avatarURL: string;
  };
}

export default function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
  
  return (
    <>
      <h1 className="text-2xl font-bold text-green-600">AX | School Plataform</h1>

      <ul>
        { data?.lessons.map(( lesson) => (
          <li key={ lesson.id }>
            <h2 className="text-xl font-bold">{ lesson.title }</h2>
            <p>{ lesson.teacher.name }</p>
          </li>
        ))}
      </ul>
    </>
  )
}
