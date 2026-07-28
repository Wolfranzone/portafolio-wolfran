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

const SlideShow = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const multipleImages = images.length > 1;

  return (
    <>
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
        {images.map((image, idx) => (
          <SplideSlide key={idx} className="flex items-center">
            <motion.button
              className="relative block w-full cursor-zoom-in"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`Captura ${idx + 1} de ${images.length}`}
                width={1000}
                height={1000}
                className="h-auto w-full rounded-lg"
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/40 text-sm text-white/90 backdrop-blur-[2px]"
                variants={{ idle: { opacity: 0 }, hover: { opacity: 1 } }}
                transition={{ duration: 0.2 }}
              >
                Toca para ampliar
              </motion.div>
            </motion.button>
          </SplideSlide>
        ))}
      </Splide>

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