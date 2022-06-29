import { createEffect, Suspense } from 'solid-js';
import { useRouteData } from 'solid-app-router';

export default function About() {
  const name = useRouteData();

  createEffect(() => {
    console.log(name());
  });

  return (
    <section class="p-8">
      <h1 class="text-2xl font-bold">حول</h1>

      <p class="mt-4">صفحة حول ماهية هذا الموقع.</p>

      <p>
        <span>نحن نحب</span>
        <Suspense fallback={<span>...</span>}>
          <span>&nbsp;{name()}</span>
        </Suspense>
      </p>
    </section>
  );
}
