export default function PageHeading(
  {
    titleText,
    descriptionText,
  }: {
    titleText: string,
    descriptionText?: string,
  }
) {
  return (
    <div className="max-w-5xl mx-auto pr-6 pl-6 max-w-200">
      <h1 className="text-3xl font-semibold text-foreground text-center">{ titleText }</h1>
      { descriptionText && (
        <p className="text-left mt-4 mb-4">{ descriptionText }</p>
      ) }
    </div>
  );
}