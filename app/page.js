import Link from 'next/link';

export default function Page() {
    return (
      <div  class="bg-slate-950 text-white">
        <heading className="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</heading>
        <ul>
        <li className="hover:text-green-400 hover:underline"> <Link href="/week-2">Week 2 Assignment</Link>.</li>
        <li className="hover:text-green-400 hover:underline"> <Link href="/week-3">Week 3 Assignment</Link>.</li>
        </ul>
      </div>
    );
  }