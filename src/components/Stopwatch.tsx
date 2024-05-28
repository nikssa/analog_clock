export const Stopwatch = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      version='1.0'
      width='64px'
      height='72px'
      viewBox='0 0 128 143'
      xmlSpace='preserve'>
      <rect x='0' y='0' width='100%' height='100%' fill='#FFFFFF' />
      <path
        fill='#000000'
        d='M119.8 31.3l-.6-.6a2.8 2.8 0 0 1-.4.5L116 34a2.8 2.8 0 0 1-4 0v-.2l-1.5 1.5a64 64 0 1 1-48.4-20v-2.6h-.6A3.7 3.7 0 0 1 57.6 9V3.7A3.7 3.7 0 0 1 61.4 0h5.2a3.7 3.7 0 0 1 3.8 3.7V9a3.7 3.7 0 0 1-3.8 3.7H66v2.6a63.8 63.8 0 0 1 42 17.4l1.4-1.5a2.8 2.8 0 0 1 0-4l2.7-2.7a2.8 2.8 0 0 1 .5-.4l-.6-.5a2 2 0 1 1 2.7-2.8l8 8a2 2 0 0 1-3 2.6zM64 19.3a59.7 59.7 0 1 0 60 60 59.8 59.8 0 0 0-60-60zM109.7 80v-1.6h7V80h-7zm-6.5-24.3l6-3.5 1 1.3-6.3 3.5zm-17 63.3l1.3-.8 3.5 6.2-1.3.7zm0-79.7l3.5-6 1.3.6-3.5 6zM64 86a6.7 6.7 0 1 1 6.7-6.8A6.7 6.7 0 0 1 64 86zm0-11.7a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm-.7-47.8h1.5v7h-1.5v-7zm-26.3 98l3.5-6.3 1.3.8-3.5 6zm0-90.6l1.3-.8 3.5 6-1.3 1zm-19 70.8l6-3.5.8 1.3-6 3.5zm0-51.3l.7-1.3 6 3.5-.6 1.3zm.3 26.4h-7v-1.6h7V80zm46.4 51.8h-1.5v-7h1.5v7zm45.4-27l-.7 1.3-6-3.4.6-1.3z'
      />
      <path fill='#000000' d='M64 73.6l-3-.4.8-34 2.2-3.7 2.2 3.7.8 34z'>
        <animateTransform
          attributeName='transform'
          type='rotate'
          from='0 64 79'
          to='360 64 79'
          dur='2160ms'
          repeatCount='indefinite'></animateTransform>
      </path>
    </svg>
  );
};

export default Stopwatch;
