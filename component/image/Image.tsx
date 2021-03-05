import * as React from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { preloadImage } from "../../utils/customPreload";
import styles from "../styles/Home.module.css";

interface IImageProps {
  id?: string;
  className?: string;
  itemProp?: string;
  title?: string;
  src?: string;
  alt: string;
  onSuccess?: (imgUrl: string) => void;
  onError?: (imgUrl: string) => void;
  fallbackImage?: string;
  height?: number | string;
  width?: number | string;
  priority?: boolean;
  customPreload?: boolean;
  checkBrokenImageInCustomPreload?: boolean;
  layout?: "responsive" | "intrinsic" | "fixed";
  testId?: string;
}

const Image = React.forwardRef<HTMLDivElement, IImageProps>(
  (
    {
      id,
      className,
      itemProp,
      src,
      alt,
      title,
      fallbackImage,
      width,
      height,
      priority,
      customPreload,
      layout = "fixed",
      testId,
      checkBrokenImageInCustomPreload,
      // CHECK WITH GABY IF HE IS STILL USING THESE PARAMETERS
      onSuccess,
      onError,
    },
    ref
  ): JSX.Element => {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    // React.useEffect(() => {
    //   // If an image fails to preload, handle it here in order
    //   // to avoid reloading it again as a broken image.
    //   if (!priority) {
    //     const preload = async () => {
    //       try {
    //         await preloadImage(src, checkBrokenImageInCustomPreload);
    //         setLoading(false);
    //         onSuccess && onSuccess(src);
    //       } catch (imageURL) {
    //         setError(true);
    //         onError && onError(imageURL);
    //       }
    //     };
    //     preload();
    //   }
    // }, [src]);

    const isFallback =
      !src || (customPreload && error) || (customPreload && loading);

    const imageProps: Omit<NextImageProps, "layout" | "height" | "width"> = {
      id,
      src: isFallback ? "/no-images-placeholder.jpg" : src,
      alt,
      title,
      itemProp,
      priority,
    };

    return (
      <div
        className={className}
        ref={ref}
        data-testid={testId}
        style={{ width: "100%" }}
      >
        {width !== undefined && height !== undefined ? (
          <NextImage
            {...imageProps}
            data-testid={isFallback ? "fallbackImage" : "image"}
            layout={layout}
            width={width}
            height={height}
          />
        ) : (
          <NextImage
            {...imageProps}
            data-testid={isFallback ? "fallbackImage" : "image"}
            layout="fill"
          />
        )}
      </div>
    );
  }
);

Image.displayName = "Image";

export default Image;
