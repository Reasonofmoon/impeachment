/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'red': {
          100: '#fee2e2',
          500: '#ef4444',
          800: '#991b1b',
        },
        'green': {
          100: '#dcfce7',
          500: '#22c55e',
          800: '#166534',
        },
        'blue': {
          50: '#eff6ff',
        },
        'gray': {
          400: '#9ca3af',
          700: '#374151',
        },
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-red-100', 'bg-red-500', 'bg-green-100', 'bg-green-500', 'bg-gray-400', 'bg-blue-50',
    'text-red-800', 'text-green-800', 'text-white',
    'grid-cols-1', 'md:grid-cols-2', 'md:col-span-2',
    'p-4', 'mt-2', 'mt-4', 'mb-2', 'rounded-lg', 'rounded-full', 'shadow-md', 'border',
    'flex', 'items-center', 'justify-center', 'justify-between',
    'text-xs', 'text-sm', 'text-lg', 'text-xl', 'font-bold', 'italic',
    'w-full', 'h-8', 'overflow-hidden',
    'transition-all', 'duration-300',
    'bg-white', 'px-3', 'py-1',
  ],
}
