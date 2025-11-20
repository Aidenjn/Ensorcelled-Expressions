import { CustomIcon } from "@/lib/types/CustomIcon";
import CustomIconSVG from "./CustomIconSVG";

export default function PageHeading(
  {
    titleText,
    descriptionText,
    icon,
  }: {
    titleText: string,
    descriptionText?: string,
    icon?: CustomIcon
  }
) {
  return (
    <div className="max-w-5xl mx-auto pr-6 pl-6 max-w-200">
      <h1 className="text-3xl font-semibold text-foreground text-center">{ icon && <CustomIconSVG icon={ icon } className="w-10 h-10 sm:w-15 sm:h-15 mr-5 stroke-white inline-block mr-5" />}{ titleText }</h1>
      { descriptionText && (
        <p className="text-left mt-4 mb-4">{ descriptionText }</p>
      ) }
    </div>
  );
}