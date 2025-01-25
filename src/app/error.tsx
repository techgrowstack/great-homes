'use client';

interface ErrorStateProps {
  error: Error;
  reset: () => void;
}

const Error: React.FC<ErrorStateProps> = ({ error, reset }) => {
  return (
    <div>
      <h1>Uh No!! There was a problem</h1>
      <p>{error.message || 'Something went wrong.'}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default Error;

// import ErrorLayout from '@/layouts/ErrorLayout/ErrorLayout';

// function ErrorPage() {
//   return <h1>There was an error, let me check on that</h1>;
// }

// ErrorPage.getLayout = (page: any) => <ErrorLayout>{page}</ErrorLayout>;

// export const getStaticProps = () => ({
//   props: {
//     title: '🕵🏼 - error',
//   },
// });

// export default ErrorPage;
