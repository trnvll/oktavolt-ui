"use client"

import {typography} from '@/components/typography/typography';
import {image} from '@/components/image/image';
import {container} from '@/components/container/container';
import {button} from '@/components/button/button';

export default function Home() {
  const image1 = image({"src": "https://dummyimage.com/600x400/000/fff&text=QueueMaster+Interface", "alt": "Sleek QueueMaster Interface", "className": "w-2/3 mb-4"})
  const typo1 = typography({"variant": "h1", "children": "Queue Solved: Home Finding, Simplified", "className": "text-white mb-4"})
  const typo2 = typography({"variant": "text-lg", "children": "Unlock the power of seamless queue management.", "className": "text-gray-400 mb-6"})
  const typo3 = typography({"variant": "text-md", "children": "With over 50,000 users and an exceptional 4.5/5 rating from 800 reviews, Queue Solved is the most trusted platform for tackling your housing queue challenges.", "className": "text-gray-400 mb-6"})
  const button1 = button({"variant": "primary", "to": "/sign-up", "children": "Get Started", "className": "my-4"})

  const layout = [
    container(
      {"className":"flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white py-10 space-y-8", children: [image1, typo1, typo2, typo3, button1]}),
  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {layout}
    </main>
  );
}
