/**
 * Array of gallery items, each representing either an image or a video.
 *
 * For images, the object contains:
 * - type: 'image' to indicate its an image
 * - src: a string path to the image file
 *
 * For videos, the object contains:
 * - type: 'video' to indicate its a video
 * - prevImage: a string patch to the thumbnail or preview image for the video
 * - src: a string URL to the embedded video (e.g.: a YouTube link)
 *
 * @example
 * // Image item
 * {
 *  type: "image",
 *  src: "/images/gallery/project1.png"
 * }
 *
 * @example
 * // Video item
 * {
 *  type: "video",
 *  prevImage: "/images/gallery/project1.png"
 *  src: "https://www.youtube.com/embed/GWaQiFeQ87g"
 * }
 */
export const gallery = [
  {
    type: "image",
    src: "/images/gallery/project1.png",
  },
  {
    type: "image",
    src: "/images/gallery/project2.png",
  },
  {
    type: "image",
    src: "/images/gallery/project3.png",
  },
  {
    type: "video",
    prevImage: "/images/gallery/video-project.png",
    src: "https://www.youtube.com/embed/GWaQiFeQ87g",
  },
  {
    type: "image",
    src: "/images/gallery/project4.png",
  },
];
