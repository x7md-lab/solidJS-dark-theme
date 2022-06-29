import { Link, useRoutes, useLocation, useParams, useSearchParams } from 'solid-app-router';

import { routes } from './routes';

const App = () => {
  const location = useLocation();
  const Route = useRoutes(routes);
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <nav class="px-4">
        <ul class="flex items-center font-semibold">
          <li class="py-2 px-4">
            <Link href="/" class="no-underline hover:underline">
              الرئيسية
            </Link>
          </li>
          <li class="py-2 px-4">
            <Link href="/about" class="no-underline hover:underline">
              حول
            </Link>
          </li>
          <li class="py-2 px-4">
            <Link href="/error" class="no-underline hover:underline">
              خطأ
            </Link>
          </li>
        </ul>
      </nav>

      <main class="h-full">
        {/*View Router */}
        <Route />
      </main>
    </>
  );
};

export default App;
