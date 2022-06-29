import { createSignal } from 'solid-js';
import { useStore } from '@nanostores/solid';
import { bearStore, increase, decrease } from './../store/globla.js';

export default function Home() {
  const count = useStore(bearStore);

  return (
    <section class="p-8">
      <h1 class="text-2xl font-bold">الرئيسية</h1>
      <p class="mt-4">هذه هي الصفحة الرئيسية.</p>

      <div class="flex items-center space-x-2">
        <button
          class="border rounded-lg px-2 border-gray-900"
          onClick={() => decrease()}
        >
          -
        </button>

        <output class="p-10px">عداد: 
          <span>{count().value}</span>
        </output>

        <button
          class="border rounded-lg px-2 border-gray-900"
          onClick={() => increase()}
        >
          +
        </button>
      </div>
    </section>
  );
}
