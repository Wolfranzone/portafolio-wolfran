// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { motion } from "motion/react";

import "@splidejs/react-splide/css";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

const SlideShow = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const multipleImages = images.length > 1;

  const imageCard = (image: string, index: number) => (
    <motion.button
      key={image}
      className="relative block w-full overflow-hidden rounded-xl border border-white/10 bg-black/20 text-left shadow-sm"
      onClick={() => setSelectedImage(image)}
    >
      <Image
        src={image}
        alt={`Captura ${index + 1} de ${images.length}`}
        width={1000}
        height={1000}
        className="h-auto w-full"
      />
      <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
        Captura {index + 1} de {images.length}
      </span>
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-10 text-sm font-medium text-white">
        Toca para ampliar
      </span>
    </motion.button>
  );

  return (
    <>
      {isMobile ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {images.map(imageCard)}
        </div>
      ) : (
        <Splide
          options={{
            autoplay: false,
            perPage: 1,
            start: 0,
            rewind: true,
            arrows: multipleImages,
            pagination: multipleImages,
            drag: true,
            i18n: {
              prev: "Imagen anterior",
              next: "Imagen siguiente",
              first: "Ir a la primera imagen",
              last: "Ir a la última imagen",
              slideX: "Ir a la imagen %s",
            },
          }}
        >
          {images.map((image, index) => (
            <SplideSlide key={image} className="flex items-center px-1">
              {imageCard(image, index)}
            </SplideSlide>
          ))}
        </Splide>
      )}

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage("")}>
        <DialogContent
          className="max-h-[90vh] max-w-[90vw] border-none bg-transparent p-0"
          onClick={() => setSelectedImage("")}
        >
          <DialogHeader className="sr-only">
            <DialogTitle>Captura ampliada</DialogTitle>
            <DialogDescription>Vista ampliada de la captura del proyecto</DialogDescription>
          </DialogHeader>
          <motion.div>
            <Image
              src={selectedImage || ""}
              alt="Captura ampliada"
              width={1080}
              height={1080}
              className="max-h-[90vh] w-full rounded-lg"
            />
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SlideShow;