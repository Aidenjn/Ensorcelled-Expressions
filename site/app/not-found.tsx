import NotFoundIcon from '@/public/custom_graphics/confused.svg';
import PageHeading from '@/components/shared/PageHeading';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto -my-32 p-5">
      <PageHeading titleText="404 | Page not found" />
      <NotFoundIcon className="stroke-foreground w-full h-34 my-9" />
      <p className="mt-4 mb-4 text-center">The page you are looking for does not exist.</p>
    </div>
  );
}
